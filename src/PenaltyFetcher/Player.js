const ValidateTeam = require("./utilities/ValidateTeam");

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
        let urlSuffix = this.name.replace(/\s+/g, '-').toLowerCase();
        urlSuffix += "-" + this.id;
        this.url = new URL('http://nhl.com/player/' + urlSuffix);
    }

    GetURL = () => {
        return this.url;
    }

    toString = () => {
        return this.name + " - " + this.team;
    }
}

module.exports = Player;