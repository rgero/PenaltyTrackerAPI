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
}

module.exports = Referee;