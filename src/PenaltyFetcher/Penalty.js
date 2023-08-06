const dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)
const ValidateTeam = require("./utilities/ValidateTeam");

class Penalty 
{
    constructor(player = null,
                penalty = "", 
                opposingTeam = "", 
                homeStatus = false, 
                refereeList = [], 
                date = dayjs(),
                seasonType = "",
                season = "" )
    {
        this.player = player;
        this.penalty = penalty;
        this.opposingTeam = opposingTeam;
        this.homeStatus = homeStatus;
        this.refereeList = refereeList;
        this.date = date;
        this.seasonType = seasonType;
        this.season = season;
    }

    setOpponent = (team) => {
        if(!ValidateTeam(team))
        {
            throw new Error("Invalid Opponent Team");
        }
        this.opposingTeam = team;
    }

    // Remember NHL API stores time in GMT.
    // When the React App does the processing, I'll need to convert it to local time.
    setDate = (dateString) => {
        let targetDate = dayjs.utc(dateString);
        if (!targetDate.isValid())
        {
            throw new Error("Penalty Date is invalid");
        }
        this.date = targetDate;
    }

    setSeasonType = (type) => {
        switch(type.toLowerCase())
        {
            case 'pr':
                type = "Preseason"
                break;
            case 'r':
                type = 'Regular';
                break;
            case 'p':
                type = 'Post';
                break;
            default:
                type = "Unknown"
                break;
        }
        this.seasonType = type;
    }

    toJSON = () => {
        let refereeJSONList = [];
        for(const ref of this.refereeList)
        {
            refereeJSONList.push(ref.toJSON());
        }

        return {
            player: this.player.toJSON(),
            penalty: this.penalty,
            opponent: this.opposingTeam,
            home: this.homeStatus,
            date: this.date.toJSON(),
            refereeList: refereeJSONList,
            season: this.season,
            seasonType: this.seasonType,
        }
    }

    toString = () => {
        let penalty = this.toJSON();
        return JSON.stringify(penalty);
    }
}

module.exports = Penalty;