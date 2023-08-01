const dayjs = require('dayjs');
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)

const nhlInteractor = require('../api/nhl');

class PenaltyFetcher
{
    constructor()
    {
        // These got to be in YYYY-MM-DD
        this.startDate = dayjs()
        this.endDate = dayjs()
        this.gameURLs = []
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
    }
}

module.exports = PenaltyFetcher;