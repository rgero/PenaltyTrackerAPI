#!/usr/bin/env node

const express = require('express');
const cors = require('cors')
const QueryParser = require('./queryparser');
const DatabaseManager = require('./databasemanager')
const app = express();

//You'll want to do conditional logic to see if the app is in a production environment
if (process.env.NODE_ENV === "production"){ require('./startup/prod')(app); }

app.use(express.json())
app.use(cors());

const database = new DatabaseManager('season.db');

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
    dbQuery.push(QueryParser.parseTeams(queryParams["teams"]));
    dbQuery.push(QueryParser.parseTeams(queryParams["opponents"]));
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