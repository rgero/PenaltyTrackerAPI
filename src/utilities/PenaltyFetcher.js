const moment = require('moment');

class PenaltyFetcher
{
    constructor()
    {
        // These got to be in YYYY-MM-DD
        this.startDate = moment().format("YYYY-MM-DD");
        this.endDate = moment().format("YYYY-MM-DD");
    }

    setStartDate = (newDate) => {
        this.startDate = newDate;
    }

    setEndDate = (newDate) => {
        this.endDate = newDate;
    }

    GetGameURLS = async () => {
        
    }

    ProcessGame = async (gameURL) => {
        // Use the Actual URL and parse through it.
        // I don't remember if these are in the API format. I should investigate.
    }
}

export default PenaltyFetcher;