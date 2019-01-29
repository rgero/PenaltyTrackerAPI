const express = require('express');
const QueryParser = require('./queryparser');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("This is the index page for the Penalty Tracker API.")
})

app.get('/api/', (req, res)=>{

    let queryParams = req.query;
    let dbQuery = {}

    // Check to see if there are any parameters.
    if (!Object.keys(queryParams).length){
        res.redirect('/');
    }

    /* Parameters that we care about?
        Players
        Teams
        Opponents
        Home/Away
        Start Date
        End Date
        Penalties
        Season Type
    */
    if (queryParams["players"]) {
        dbQuery["players"] = QueryParser.parseInput(queryParams["players"])
    }
    if (queryParams["teams"]) {
        dbQuery["teams"] = QueryParser.parseInput(queryParams["teams"])
    }
    if (queryParams["opponents"]) {
        dbQuery["opponents"] = QueryParser.parseInput(queryParams["opponents"])
    }
    if (queryParams["penalties"]) {
        dbQuery["penalties"] = QueryParser.parseInput(queryParams["penalties"])
    }
    dbQuery["location"] = queryParams["location"]
    dbQuery["start"] = queryParams["start"]
    dbQuery["end"] = queryParams["end"]
    dbQuery["season"] = queryParams["season"]
    

    // Send a response
    res.send(JSON.stringify(dbQuery));
})

// Reading Environment Variables
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log("Listening on port: ", port);
})