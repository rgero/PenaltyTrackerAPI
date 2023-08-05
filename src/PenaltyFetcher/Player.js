const ValidateTeam = require("./utilities/ValidateTeam");

class Player
{
    constructor()
    {
        this.name = "";
        this.id = -1;
        this.url = null;
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
        if (this.id == -1 || this.name == "")
        {
            throw new Error ("Player data not filled out completely, cannot get url");
        }

        if (this.url == null)
        {
            this.constructURL();
        }
        return this.url;
    }

    toString = () => {
        let player = {
            name: this.name,
            team: this.team,
            id: this.id,
            url: this.GetURL().toString(),
        }

        return JSON.stringify(player);
    }    
}

module.exports = Player;