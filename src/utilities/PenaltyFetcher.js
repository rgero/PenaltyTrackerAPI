const dayjs = require('dayjs');
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)

const nhlInteractor = require('../api/nhl');
const Referee = require('./Referee');
const Player = require('./Player');
const Penalty = require('./Penalty');

class PenaltyFetcher
{
    constructor()
    {
        // These got to be in YYYY-MM-DD
        this.startDate = dayjs()
        this.endDate = dayjs()
        this.gameURLs = []
        this.penaltyList = [];
    }

    setStartDate = (newDate) => {
        let targetDate = dayjs(newDate);
        if (!targetDate.isValid())
        {
            throw new Error('Start Date is not valid');
        }
        this.startDate = targetDate;
    }

    setEndDate = (newDate) => {
        let targetDate = dayjs(newDate);
        if (!targetDate.isValid())
        {
            throw new Error('End Date is not valid');
        }
        this.endDate = targetDate;
    }

    setTargetDate = (newDate) => {
        this.setStartDate(newDate);
        this.setEndDate(newDate);
    }

    FetchGameURLs = async () => {
        if( !this.startDate.isSameOrBefore(this.endDate))
        {
            throw new Error("Start and End date are invalid");
        }

        let queryParams = {
            startDate: this.startDate.format("YYYY-MM-DD"),
            endDate: this.endDate.format("YYYY-MM-DD")
        }

        const response = await nhlInteractor.get('/api/v1/schedule', { params: queryParams});
        let responseData = response.data;
        let datesArray =  responseData['dates']
        datesArray.forEach( element => {
            let gamesArray = element["games"];
            gamesArray.forEach(game => {
                this.gameURLs.push(game["link"])
            })
        })
    }

    ProcessGame = async (gameURL) => {
        const response = await nhlInteractor.get(gameURL);
        const gameData = response.data["gameData"];
        const liveData = response.data["liveData"];

        let homeTeam = gameData["teams"]["home"]["name"];
        let awayTeam = gameData["teams"]["away"]["name"];

        // NHL's API stores time in GMT.
        let gameDate = gameData["datetime"]["dateTime"];
        let seasonType = gameData["game"]["type"]
        let season = gameData["game"]["season"]

        let refereeList = [];
        let refereeArray = liveData["boxscore"]["officials"];
        refereeArray.forEach(potentialRef => {
            if (potentialRef["officialType"].toLowerCase() == "referee")
            {
                let referee = new Referee();
                referee.name = potentialRef["official"]["fullName"];
                referee.id = potentialRef["official"]["id"]
                refereeList.push(referee);
            }
        })

        let penaltyMasterList = liveData["plays"]["penaltyPlays"];
        penaltyMasterList.forEach(penaltyIndex => {
            let penaltyEvent = liveData["plays"]["allPlays"][penaltyIndex]
            let penaltyName = penaltyEvent["result"]["secondaryType"]
            let playerTeamName = penaltyEvent["team"]["name"]

            // If it is a Penalty Shot, don't count it. They don't show up as power plays.
            if (penaltyName.includes("PS-") || penaltyName.includes("PS -"))
            {
                return;
            }

            // Construct the Player
            let penalizedPlayer = new Player();
            penalizedPlayer.setName( penaltyEvent["players"][0]["player"]["fullName"] );
            penalizedPlayer.setID( penaltyEvent["players"][0]["player"]["id"] );
            penalizedPlayer.setTeam( playerTeamName );
            
            // Determine Home/Away Status
            let homeStatus = false;
            if (playerTeamName == homeTeam)
            {
                homeStatus = true;
            }
            
            // Construct the Penalty.
            let newPenalty = new Penalty();
            newPenalty.player = penalizedPlayer;
            newPenalty.setOpponent( homeStatus ? awayTeam : homeTeam );
            newPenalty.refereeList = refereeList;
            newPenalty.penalty = penaltyName;
            newPenalty.setDate(gameDate);
            newPenalty.setSeasonType(seasonType)
            newPenalty.season = season;
            
            console.log(newPenalty.toString())

            this.penaltyList.push(newPenalty);
        })
    }

    Perform = async () => {
        if (this.gameURLs.length == 0)
        {
            return;
        }

        await this.gameURLs.forEach( async game => {
            await this.ProcessGame(game);
        })
    }
}

module.exports = PenaltyFetcher;