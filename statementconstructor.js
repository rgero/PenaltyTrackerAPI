
var DirectionEnum = {
    BEFORE: false,
    AFTER: true
}
class StatementConstructor {
    constructor(queryParameters){
        this.params = queryParameters;
        this.sqlString = ""
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

    statementConstructor(index, keyword)
    {
        var sqlString = ""
        if( this.params[index] )
        {
            if (!this.checkForData(this.params, index, DirectionEnum.BEFORE))
            {
                sqlString += " WHERE "
            }
            var testArr = this.params[index];
            sqlString = sqlString + "(" + this.arrayParser(testArr, keyword) + ")"
            if (this.checkForData(this.params, index, DirectionEnum.AFTER)){
                sqlString += " AND "
            }
        }
        return sqlString;
    }

    constructWhere(){

        // Default Values
        var season = (this.params[0] ? this.params[0] : "Regular_18_19");
        this.params.splice(0,1); // Removing Season.
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
        if(!this.checkForData(this.params))
        {
            return sqlString;
        }

        sqlString += this.statementConstructor( 0, "playerName");
        sqlString += this.statementConstructor( 1, "teamName");
        sqlString += this.statementConstructor( 2, "opponentTeam");
        sqlString += this.statementConstructor( 3, "penalty");
        //Location
        if( this.params[4] )
        {
            if (!this.checkForData(4, DirectionEnum.BEFORE))
            {
                sqlString += " WHERE "
            }
            var testArr = this.params[4];
            sqlString = sqlString + "homeAway=" + testArr + " "
            if (this.checkForData(4, DirectionEnum.AFTER)){
                sqlString += " AND "
            }
        }

        //Start Date and End Date
        var startDate = (this.params[5] ? this.params[5] : null);
        var endDate =  (this.params[6] ? this.params[6] : null);
        if (startDate || endDate)
        {
            if (!this.checkForData(5, DirectionEnum.BEFORE))
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
            if (this.checkForData(6, DirectionEnum.AFTER)){
                sqlString += " AND "
            }
        }

        // Refs
        sqlString += this.statementConstructor(7, "refs");
        console.log(sqlString)
        
        return sqlString;

    }
}

module.exports = StatementConstructor;