class Referee
{
    constructor()
    {
        this.name = "";
        this.id = -1;
    }

    setName = (name) => {
        this.name = name;
    }

    setID = (id) => {
        this.id = id;
    }

    toJSON = () => {
        return {
            name: this.name,
            id: this.id
        }
    }
    
    toString = () => {
        let referee = this.toJSON();
        return JSON.stringify(referee);
    }
}

module.exports = Referee;