const dayjs = require('dayjs');
const nhlAPI = require('../api/nhl');

class PenaltyFetcher
{
    

    constructor()
    {
        // These got to be in YYYY-MM-DD
        this.startDate = dayjs().format("YYYY-MM-DD");
        this.endDate = dayjs().format("YYYY-MM-DD");
        this.gameURLs = []
    }

    setStartDate = (newDate) => {
        this.startDate = dayjs(newDate).format("YYYY-MM-DD");
    }

    setEndDate = (newDate) => {
        this.endDate = dayjs(newDate).format("YYYY-MM-DD");
    }

    setTargetDate = (newDate) => {
        this.startDate = dayjs(newDate).format("YYYY-MM-DD");
        this.endDate = dayjs(newDate).format("YYYY-MM-DD");
    }

    FetchGameURLs = async () => {
        let queryParams = {
            startDate: this.startDate,
            endDate: this.endDate
        }
        const response = await nhlAPI.get('/schedule', { params: queryParams});
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
        let gamePrefix = "https://statsapi.web.nhl.com/";
    }
}

module.exports = PenaltyFetcher;