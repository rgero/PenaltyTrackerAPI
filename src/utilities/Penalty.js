const dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)
const ValidateTeam = require("./ValidateTeam");

class Penalty 
{
    constructor(player = null,
                penalty = "", 
                opposingTeam = "", 
                homeStatus = false, 
                refereeList = [], 
                date = dayjs() )
    {
        this.player = player;
        this.penalty = penalty;
        this.opposingTeam = opposingTeam;
        this.homeStatus = homeStatus;
        this.refereeList = refereeList;
        this.date = date;
    }

    setOpponent = (team) => {
        if(!ValidateTeam(team))
        {
            throw new Error("Invalid Opponent Team");
        }
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
}

module.exports = Penalty;