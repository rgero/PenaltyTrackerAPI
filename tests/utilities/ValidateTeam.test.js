const ValidateTeam = require('../../src/utilities/ValidateTeam');

const teamList = [
    "Anaheim Ducks",
    "Arizona Coyotes",
    "Boston Bruins",
    "Buffalo Sabres",
    "Calgary Flames",
    "Carolina Hurricanes",
    "Chicago Blackhawks",
    "Colorado Avalanche",
    "Columbus Blue Jackets",
    "Dallas Stars",
    "Detroit Red Wings",
    "Edmonton Oilers",
    "Florida Panthers",
    "Los Angeles Kings",
    "Minnesota Wild",
    "Montreal Canadiens",
    "Nashville Predators",
    "New Jersey Devils",
    "New York Islanders",
    "New York Rangers",
    "Ottawa Senators",
    "Philadelphia Flyers",
    "Pittsburgh Penguins",
    "San Jose Sharks",
    "Seattle Kraken",
    "St. Louis Blues",
    "Tampa Bay Lightning",
    "Toronto Maple Leafs",
    "Vancouver Canucks",
    "Vegas Golden Knights",
    "Washington Capitals",
    "Winnipeg Jets"
]

describe("Validate Teams", ()=> {
    test("Run through all 32", ()=> {
        teamList.forEach(team => {
            expect(ValidateTeam(team)).toBe(true);
        })
    })

    test("Run through all 32 case insensitive", ()=> {
        teamList.forEach(team => {
            expect(ValidateTeam(team.toLocaleUpperCase())).toBe(true);
        })
    })

    test("Invalid answer", ()=> {
        expect(ValidateTeam("Boston Red Sox")).toBe(false);
    })
})