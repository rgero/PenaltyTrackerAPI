const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird');

var DirectionEnum = {
    BEFORE: false,
    AFTER: true
}

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


    checkForData(arr, currentIndex = -1, direction = DirectionEnum.BEFORE){
            if (currentIndex === -1){
                currentIndex = arr.length;
            }
            
            if (!direction)
            {
                for(var i = 0; i < currentIndex; i++){
                    if (arr[i]) {return true;}
                }
            } else {
                for(var i = arr.length-1; i > currentIndex; i--){
                    if (arr[i]) {return true;}
                }
            }
            return false;
    }

    statementConstructor(paramArr, index, keyword)
    {
        var sqlString = ""
        if( paramArr[index] )
        {
            if (!this.checkForData(paramArr, index, DirectionEnum.BEFORE))
            {
                sqlString += " WHERE "
            }
            var testArr = paramArr[index];
            sqlString = sqlString + "(" + this.arrayParser(testArr, keyword) + ")"
            if (this.checkForData(paramArr, index, DirectionEnum.AFTER)){
                sqlString += " AND "
            }
        }
        return sqlString;
    }

    constructWhere(paramArr){

        // Default Values
        var season = (paramArr[0] ? paramArr[0] : "Regular_18_19");
        paramArr.splice(0,1); // Removing Season.
        var sqlString = "SELECT * FROM "

        /* Order of array
            Players
            Teams
            Opponents
            Home/Away
            Start Date
            End Date
            Penalties
        */    

        
        var sqlString = sqlString + season;

        // Check to see if there are any search parameters
        if(!this.checkForData(paramArr))
        {
            return sqlString;
        }

        sqlString += this.statementConstructor(paramArr, 0, "playerName");
        sqlString += this.statementConstructor(paramArr, 1, "teamName");
        sqlString += this.statementConstructor(paramArr, 2, "opponentTeam");
        sqlString += this.statementConstructor(paramArr, 3, "penalty");
        //Location
        if( paramArr[4] )
        {
            if (!this.checkForData(paramArr, 4, DirectionEnum.BEFORE))
            {
                sqlString += " WHERE "
            }
            var testArr = paramArr[4];
            sqlString = sqlString + "homeAway=" + testArr + " "
            if (this.checkForData(paramArr, 4, DirectionEnum.AFTER)){
                sqlString += " AND "
            }
        }

        //Start Date and End Date
        var startDate = (paramArr[5] ? paramArr[5] : null);
        var endDate =  (paramArr[6] ? paramArr[6] : null);
        if (startDate || endDate)
        {
            if (!this.checkForData(paramArr, 5, DirectionEnum.BEFORE))
            {
                sqlString += " WHERE "
            }
            if (startDate && !endDate){
                sqlString += "gameDate >= date(" + startDate + ") "
            } else if (!startDate && endDate){
                sqlString += "gameDate <= date(" + endDate + ") "
            } else if (startDate && endDate){
                sqlString += "gameDate BETWEEN date('" + startDate + "') AND date('" + endDate + "') "
            }
            if (this.checkForData(paramArr, 6, DirectionEnum.AFTER)){
                sqlString += " AND "
            }
        }

        // Refs
        sqlString += this.statementConstructor(paramArr, 7, "refs");
        console.log(sqlString)
        
        return sqlString;

    }

    all(params = []){
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