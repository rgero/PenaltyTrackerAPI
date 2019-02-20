const express = require('express');
const cors = require('cors')
const QueryParser = require('./queryparser');
const DatabaseManager = require('./databasemanager')
const app = express();

app.use(express.json())
app.use(cors());

const database = new DatabaseManager('season.db');


app.get('/', (req, res) => {
    res.send("This is the index page for the Penalty Tracker API.")
})

app.get('/api/', async (req, res)=>{

    let queryParams = req.query;
    let dbQuery = []
    

    // // Check to see if there are any parameters.
    // if (!Object.keys(queryParams).length){
    //     res.redirect('/');
    // }

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
    dbQuery.push(queryParams["season"]);
    dbQuery.push(QueryParser.parseInput(queryParams["players"]));
    dbQuery.push(QueryParser.parseInput(queryParams["teams"]));
    dbQuery.push(QueryParser.parseInput(queryParams["opponents"]));
    dbQuery.push(QueryParser.parseInput(queryParams["penalties"]));
    dbQuery.push(queryParams["location"])
    dbQuery.push(queryParams["start"])
    dbQuery.push(queryParams["end"])
    dbQuery.push(QueryParser.parseInput(queryParams["referees"]));
    
    // Query the database.
    var results = await database.all(dbQuery);

    // Send a response
    res.send(JSON.stringify(results));
})

// Reading Environment Variables
const port = process.env.PORT || 8888;
app.listen(port, ()=> {
    console.log("Listening on port: ", port);
})