const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird');
const StatementConstructor = require("./statementconstructor");

class Database {
    constructor(dbPath){
        this.db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (error)=>
        {
            if (error){
                console.log("Error connecting to database. ", error);
            } else {
                console.log("Connected to the database");
            }
        })
    }

    all(params = []){
        //Construct the Query Statement based on the Parameters, store in string
        var statementConstructor = new StatementConstructor(params)
        var sql = statementConstructor.constructWhere();

        return new Promise((resolve, reject)=> {
            this.db.all(sql, (err, rows)=> {
                if (err) {
                    console.log("You've got an error.\n", err)
                    reject(err)
                } else {
                    console.log(rows.length);
                    resolve(rows);
                }
            })
        })
    }
}

module.exports = Database;