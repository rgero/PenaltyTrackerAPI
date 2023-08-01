const ValidateTeam = require("./ValidateTeam");

class Penalty 
{
    constructor()
    {
        this.player = null;
        this.penalty = "";
        this.opposingTeam = "";
        this.homeStatus = false;
        this.refereeList = [];
    }

    setOpponent = (team) => {
        if(!ValidateTeam(team))
        {
            throw new Error("Invalid Opponent Team");
        }
    }
}

module.exports = Penalty;