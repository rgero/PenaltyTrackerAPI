const moment = require('moment');
const nhlAPI = require('../api/nhl');

class PenaltyFetcher
{
    

    constructor()
    {
        // These got to be in YYYY-MM-DD
        this.startDate = moment().format("YYYY-MM-DD");
        this.endDate = moment().format("YYYY-MM-DD");
        this.gameURLs = []
    }

    setStartDate = (newDate) => {
        // Assume the new date is a string
        this.startDate = moment(newDate).format("YYYY-MM-DD");
    }

    setEndDate = (newDate) => {
        this.endDate = moment(newDate).format("YYYY-MM-DD");
    }

    setTargetDate = (newDate) => {
        this.startDate = moment(newDate).format("YYYY-MM-DD");
        this.endDate = moment(newDate).format("YYYY-MM-DD");
    }

    GetGameURLS = async () => {
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

        console.log(this.gameURLs)
    }

    ProcessGame = async (gameURL) => {
        let gamePrefix = "https://statsapi.web.nhl.com/";
    }
}

module.exports = PenaltyFetcher;