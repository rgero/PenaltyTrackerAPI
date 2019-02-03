const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird');

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

    arrayParser(array, keyword){
        var newString = ""
        if (array){
            if (array.length > 1){
                for(var i = 0; i < array.length-1; i++)
                {
                    newString = newString + " " + keyword + " LIKE '%" + array[i] + "%' OR"
                };
            }
            newString = newString + " " + keyword + " LIKE '%" + array[array.length-1] + "%'"
        }
        return newString
    }

    constructWhere(params){

        // Default Values
        var season = "Regular_18_19"
        var players = ""
        var sqlString = "SELECT * FROM "
        
        if (params["season"])
        {
            season = params["season"]
        }
        var sqlString = sqlString + season + " WHERE";
        if (params["players"]){
            sqlString = sqlString + this.arrayParser(params["players"], "playerName")
        }
        var sqlString = sqlString + " AND "
        if (params["penalties"]){
            sqlString = sqlString + this.arrayParser(params["penalties"], "penalty")
        }

        console.log(sqlString)
        
        return sqlString;

    }

    all(params = {}){
        //Construct the Query Statement based on the Parameters, store in string
        var sql = this.constructWhere(params);
        console.log(sql);

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