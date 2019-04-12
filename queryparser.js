function parseInput(inputString){
    if (inputString)
    {
        return inputString.split(',');
    }
}

function parseTeams(inputString){
    let teamList =  [   { id: "ANA", name: "Anaheim Ducks"},
                        { id: "ARI", name: "Arizona Coyotes"},
                        { id: "BOS", name: "Boston Bruins"},
                        { id: "BUF", name: "Buffalo Sabres"},
                        { id: "CGY", name: "Calgary Flames"},
                        { id: "CAR", name: "Carolina Hurricanes"},
                        { id: "CHI", name: "Chicago Blackhawks"},
                        { id: "COL", name: "Colorado Avalanche"},
                        { id: "CBJ", name: "Columbus Blue Jackets"},
                        { id: "DAL", name: "Dallas Stars"},
                        { id: "DET", name: "Detroit Red Wings"},
                        { id: "EDM", name: "Edmonton Oilers"},
                        { id: "FLA", name: "Florida Panthers"},
                        { id: "LAK", name: "Los Angeles Kings"},
                        { id: "MIN", name: "Minnesota Wild"},
                        { id: "MTL", name: "Montreal Canadiens"},
                        { id: "NSH", name: "Nashville Predators"},
                        { id: "NJD", name: "New Jersey Devils"},
                        { id: "NYI", name: "New York Islanders"},
                        { id: "NYR", name: "New York Rangers"},
                        { id: "OTT", name: "Ottawa Senators"},
                        { id: "PHI", name: "Philadelphia Flyers"},
                        { id: "PIT", name: "Pittsburgh Penguins"},
                        { id: "SJS", name: "San Jose Sharks"},
                        { id: "STL", name: "St Louis Blues"},
                        { id: "TBL", name: "Tampa Bay Lightning"},
                        { id: "TOR", name: "Toronto Maple Leafs"},
                        { id: "VAN", name: "Vancouver Canucks"},
                        { id: "VGK", name: "Vegas Golden Knights"},
                        { id: "WSH", name: "Washington Capitals"},
                        { id: "WPG", name: "Winnipeg Jets"}
                    ]
    var resultTeams = [];
    var inputList = parseInput(inputString);
    if (inputList){
        inputList.forEach( (entry) => {
            teamList.forEach( (team) => {
                if (team.id.toLowerCase() === entry.toLowerCase() || team.name.toLowerCase() === entry.toLowerCase()) {
                    resultTeams.push(team.name);
                    return;
                }
            } )
        } )
        return resultTeams;
    }
}

module.exports.parseInput = parseInput;
module.exports.parseTeams = parseTeams;