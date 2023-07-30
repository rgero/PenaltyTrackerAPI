
class PenaltyFetcher
{
    constructor()
    {
        // These got to be in YYYY-MM-DD
        this.startDate = "";
        this.endDate = "";
    }

    setStartDate = (newDate) => {
        this.startDate = newDate;
    }

    setEndDate = (newDate) => {
        this.endDate = newDate;
    }

    GetGameURLS = async () => {
        // Use the NHL API to fetch the Game URLS
    }

    ProcessGame = async (gameURL) => {
        // Use the Actual URL and parse through it.
        // I don't remember if these are in the API format. I should investigate.
    }
}