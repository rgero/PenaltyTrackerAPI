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
    
    toString = () => {
        let referee = {
            name: this.name,
            id: this.id
        }
        return JSON.stringify(referee);
    }
}

module.exports = Referee;