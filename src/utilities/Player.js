const ValidateTeam = require("./ValidateTeam");

class Player
{
    constructor()
    {
        this.name = "";
        this.id = -1;
        this.url = "";
        this.team = "";
    }

    setName = (name) => {
        this.name = name;
    }

    setID = (id) => {
        this.id = id;
    }

    setTeam = (team) => {
        if (!ValidateTeam(team))
        {
            throw new Error("Invalid Player Team");
        }
        this.team = team;
    }

    constructURL = () => {
        // The format is as follows:
        // nhl.com/player/{name with hyphen}-{playerID}
    }

    GetURL = () => {
        return this.url;
    }
}

module.exports = Player;