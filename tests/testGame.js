const correctPenaltyList = [
        {
          player: {
            name: 'Mikael Granlund',
            team: 'Nashville Predators',
            id: 8475798,
            url: 'http://nhl.com/player/mikael-granlund-8475798'
          },
          penalty: 'Holding',
          opponent: 'Florida Panthers',
          home: false,
          date: '2022-02-23T00:00:00.000Z',
          refereeList: [
            { name: 'Kelly Sutherland', id: 2265 },
            { name: 'Jean Hebert', id: 4604 }
          ],
          season: '20212022',
          seasonType: 'Regular'
        },
        {
          player: {
            name: 'Aleksander Barkov',
            team: 'Florida Panthers',
            id: 8477493,
            url: 'http://nhl.com/player/aleksander-barkov-8477493'
          },
          penalty: 'Interference',
          opponent: 'Nashville Predators',
          home: false,
          date: '2022-02-23T00:00:00.000Z',
          refereeList: [
            { name: 'Kelly Sutherland', id: 2265 },
            { name: 'Jean Hebert', id: 4604 }
          ],
          season: '20212022',
          seasonType: 'Regular'
        },
        {
          player: {
            name: 'MacKenzie Weegar',
            team: 'Florida Panthers',
            id: 8477346,
            url: 'http://nhl.com/player/mackenzie-weegar-8477346'
          },
          penalty: 'Roughing',
          opponent: 'Nashville Predators',
          home: false,
          date: '2022-02-23T00:00:00.000Z',
          refereeList: [
            { name: 'Kelly Sutherland', id: 2265 },
            { name: 'Jean Hebert', id: 4604 }
          ],
          season: '20212022',
          seasonType: 'Regular'
        },
        {
          player: {
            name: 'Philip Tomasino',
            team: 'Nashville Predators',
            id: 8481577,
            url: 'http://nhl.com/player/philip-tomasino-8481577'
          },
          penalty: 'Too many men on the ice',
          opponent: 'Florida Panthers',
          home: false,
          date: '2022-02-23T00:00:00.000Z',
          refereeList: [
            { name: 'Kelly Sutherland', id: 2265 },
            { name: 'Jean Hebert', id: 4604 }
          ],
          season: '20212022',
          seasonType: 'Regular'
        },
        {
          player: {
            name: 'Alexandre Carrier',
            team: 'Nashville Predators',
            id: 8478851,
            url: 'http://nhl.com/player/alexandre-carrier-8478851'
          },
          penalty: 'Cross checking',
          opponent: 'Florida Panthers',
          home: false,
          date: '2022-02-23T00:00:00.000Z',
          refereeList: [
            { name: 'Kelly Sutherland', id: 2265 },
            { name: 'Jean Hebert', id: 4604 }
          ],
          season: '20212022',
          seasonType: 'Regular'
        },
        {
          player: {
            name: 'Sam Bennett',
            team: 'Florida Panthers',
            id: 8477935,
            url: 'http://nhl.com/player/sam-bennett-8477935'
          },
          penalty: 'Cross checking',
          opponent: 'Nashville Predators',
          home: false,
          date: '2022-02-23T00:00:00.000Z',
          refereeList: [
            {
              "id": 2265,
              "name": "Kelly Sutherland"
            },{
              "id": 4604,
              "name": "Jean Hebert"
            }
          ],
          season: '20212022',
          seasonType: 'Regular'
        }
]

const testGame = {
    "copyright" : "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.",
    "gamePk" : 2021020511,
    "link" : "/api/v1/game/2021020511/feed/live",
    "metaData" : {
      "wait" : 10,
      "timeStamp" : "20220225_172915"
    },
    "gameData" : {
      "game" : {
        "pk" : 2021020511,
        "season" : "20212022",
        "type" : "R"
      },
      "datetime" : {
        "dateTime" : "2022-02-23T00:00:00Z",
        "endDateTime" : "2022-02-23T02:46:33Z"
      },
      "status" : {
        "abstractGameState" : "Final",
        "codedGameState" : "7",
        "detailedState" : "Final",
        "statusCode" : "7",
        "startTimeTBD" : false
      },
      "teams" : {
        "away" : {
          "id" : 18,
          "name" : "Nashville Predators",
          "link" : "/api/v1/teams/18",
          "venue" : {
            "id" : 5030,
            "name" : "Bridgestone Arena",
            "link" : "/api/v1/venues/5030",
            "city" : "Nashville",
            "timeZone" : {
              "id" : "America/Chicago",
              "offset" : -6,
              "tz" : "CST"
            }
          },
          "abbreviation" : "NSH",
          "triCode" : "NSH",
          "teamName" : "Predators",
          "locationName" : "Nashville",
          "firstYearOfPlay" : "1998",
          "division" : {
            "id" : 16,
            "name" : "Central",
            "nameShort" : "CEN",
            "link" : "/api/v1/divisions/16",
            "abbreviation" : "C"
          },
          "conference" : {
            "id" : 5,
            "name" : "Western",
            "link" : "/api/v1/conferences/5"
          },
          "franchise" : {
            "franchiseId" : 34,
            "teamName" : "Predators",
            "link" : "/api/v1/franchises/34"
          },
          "shortName" : "Nashville",
          "officialSiteUrl" : "http://www.nashvillepredators.com/",
          "franchiseId" : 34,
          "active" : true
        },
        "home" : {
          "id" : 13,
          "name" : "Florida Panthers",
          "link" : "/api/v1/teams/13",
          "venue" : {
            "id" : 5027,
            "name" : "FLA Live Arena",
            "link" : "/api/v1/venues/5027",
            "city" : "Sunrise",
            "timeZone" : {
              "id" : "America/New_York",
              "offset" : -5,
              "tz" : "EST"
            }
          },
          "abbreviation" : "FLA",
          "triCode" : "FLA",
          "teamName" : "Panthers",
          "locationName" : "Florida",
          "firstYearOfPlay" : "1993",
          "division" : {
            "id" : 17,
            "name" : "Atlantic",
            "nameShort" : "ATL",
            "link" : "/api/v1/divisions/17",
            "abbreviation" : "A"
          },
          "conference" : {
            "id" : 6,
            "name" : "Eastern",
            "link" : "/api/v1/conferences/6"
          },
          "franchise" : {
            "franchiseId" : 33,
            "teamName" : "Panthers",
            "link" : "/api/v1/franchises/33"
          },
          "shortName" : "Florida",
          "officialSiteUrl" : "http://www.floridapanthers.com/",
          "franchiseId" : 33,
          "active" : true
        }
      },
      "players" : {
        "ID8478508" : {
          "id" : 8478508,
          "fullName" : "Yakov Trenin",
          "link" : "/api/v1/people/8478508",
          "firstName" : "Yakov",
          "lastName" : "Trenin",
          "primaryNumber" : "13",
          "birthDate" : "1997-01-13",
          "currentAge" : 26,
          "birthCity" : "Chelyabinsk",
          "birthCountry" : "RUS",
          "nationality" : "RUS",
          "height" : "6' 2\"",
          "weight" : 201,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8475218" : {
          "id" : 8475218,
          "fullName" : "Mattias Ekholm",
          "link" : "/api/v1/people/8475218",
          "firstName" : "Mattias",
          "lastName" : "Ekholm",
          "primaryNumber" : "14",
          "birthDate" : "1990-05-24",
          "currentAge" : 33,
          "birthCity" : "Borlange",
          "birthCountry" : "SWE",
          "nationality" : "SWE",
          "height" : "6' 4\"",
          "weight" : 215,
          "active" : true,
          "alternateCaptain" : true,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8477935" : {
          "id" : 8477935,
          "fullName" : "Sam Bennett",
          "link" : "/api/v1/people/8477935",
          "firstName" : "Sam",
          "lastName" : "Bennett",
          "primaryNumber" : "9",
          "birthDate" : "1996-06-20",
          "currentAge" : 27,
          "birthCity" : "Holland Landing",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 1\"",
          "weight" : 195,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8476925" : {
          "id" : 8476925,
          "fullName" : "Colton Sissons",
          "link" : "/api/v1/people/8476925",
          "firstName" : "Colton",
          "lastName" : "Sissons",
          "primaryNumber" : "10",
          "birthDate" : "1993-11-05",
          "currentAge" : 29,
          "birthCity" : "North Vancouver",
          "birthStateProvince" : "BC",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 1\"",
          "weight" : 200,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8477932" : {
          "id" : 8477932,
          "fullName" : "Aaron Ekblad",
          "link" : "/api/v1/people/8477932",
          "firstName" : "Aaron",
          "lastName" : "Ekblad",
          "primaryNumber" : "5",
          "birthDate" : "1996-02-07",
          "currentAge" : 27,
          "birthCity" : "Windsor",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 4\"",
          "weight" : 215,
          "active" : true,
          "alternateCaptain" : true,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8476887" : {
          "id" : 8476887,
          "fullName" : "Filip Forsberg",
          "link" : "/api/v1/people/8476887",
          "firstName" : "Filip",
          "lastName" : "Forsberg",
          "primaryNumber" : "9",
          "birthDate" : "1994-08-13",
          "currentAge" : 28,
          "birthCity" : "Ostervala",
          "birthCountry" : "SWE",
          "nationality" : "SWE",
          "height" : "6' 1\"",
          "weight" : 205,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "L",
            "name" : "Left Wing",
            "type" : "Forward",
            "abbreviation" : "LW"
          }
        },
        "ID8475798" : {
          "id" : 8475798,
          "fullName" : "Mikael Granlund",
          "link" : "/api/v1/people/8475798",
          "firstName" : "Mikael",
          "lastName" : "Granlund",
          "primaryNumber" : "64",
          "birthDate" : "1992-02-26",
          "currentAge" : 31,
          "birthCity" : "Oulu",
          "birthCountry" : "FIN",
          "nationality" : "FIN",
          "height" : "5' 10\"",
          "weight" : 185,
          "active" : true,
          "alternateCaptain" : true,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8478569" : {
          "id" : 8478569,
          "fullName" : "Noel Acciari",
          "link" : "/api/v1/people/8478569",
          "firstName" : "Noel",
          "lastName" : "Acciari",
          "primaryNumber" : "55",
          "birthDate" : "1991-12-01",
          "currentAge" : 31,
          "birthCity" : "Johnston",
          "birthStateProvince" : "RI",
          "birthCountry" : "USA",
          "nationality" : "USA",
          "height" : "5' 10\"",
          "weight" : 209,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8474600" : {
          "id" : 8474600,
          "fullName" : "Roman Josi",
          "link" : "/api/v1/people/8474600",
          "firstName" : "Roman",
          "lastName" : "Josi",
          "primaryNumber" : "59",
          "birthDate" : "1990-06-01",
          "currentAge" : 33,
          "birthCity" : "Bern",
          "birthCountry" : "CHE",
          "nationality" : "CHE",
          "height" : "6' 1\"",
          "weight" : 201,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : true,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8476988" : {
          "id" : 8476988,
          "fullName" : "Matt Benning",
          "link" : "/api/v1/people/8476988",
          "firstName" : "Matt",
          "lastName" : "Benning",
          "primaryNumber" : "5",
          "birthDate" : "1994-05-25",
          "currentAge" : 29,
          "birthCity" : "Edmonton",
          "birthStateProvince" : "AB",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 1\"",
          "weight" : 203,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8477933" : {
          "id" : 8477933,
          "fullName" : "Sam Reinhart",
          "link" : "/api/v1/people/8477933",
          "firstName" : "Sam",
          "lastName" : "Reinhart",
          "primaryNumber" : "13",
          "birthDate" : "1995-11-06",
          "currentAge" : 27,
          "birthCity" : "West Vancouver",
          "birthStateProvince" : "BC",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 2\"",
          "weight" : 193,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8475683" : {
          "id" : 8475683,
          "fullName" : "Sergei Bobrovsky",
          "link" : "/api/v1/people/8475683",
          "firstName" : "Sergei",
          "lastName" : "Bobrovsky",
          "primaryNumber" : "72",
          "birthDate" : "1988-09-20",
          "currentAge" : 34,
          "birthCity" : "Novokuznetsk",
          "birthCountry" : "RUS",
          "nationality" : "RUS",
          "height" : "6' 2\"",
          "weight" : 182,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "G",
            "name" : "Goalie",
            "type" : "Goalie",
            "abbreviation" : "G"
          }
        },
        "ID8478851" : {
          "id" : 8478851,
          "fullName" : "Alexandre Carrier",
          "link" : "/api/v1/people/8478851",
          "firstName" : "Alexandre",
          "lastName" : "Carrier",
          "primaryNumber" : "45",
          "birthDate" : "1996-10-08",
          "currentAge" : 26,
          "birthCity" : "Quebec City",
          "birthStateProvince" : "QC",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "5' 11\"",
          "weight" : 174,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : true,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8480009" : {
          "id" : 8480009,
          "fullName" : "Eeli Tolvanen",
          "link" : "/api/v1/people/8480009",
          "firstName" : "Eeli",
          "lastName" : "Tolvanen",
          "primaryNumber" : "28",
          "birthDate" : "1999-04-22",
          "currentAge" : 24,
          "birthCity" : "Vihti",
          "birthCountry" : "FIN",
          "nationality" : "FIN",
          "height" : "5' 10\"",
          "weight" : 191,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "R",
            "name" : "Right Wing",
            "type" : "Forward",
            "abbreviation" : "RW"
          }
        },
        "ID8477446" : {
          "id" : 8477446,
          "fullName" : "Michael McCarron",
          "link" : "/api/v1/people/8477446",
          "firstName" : "Michael",
          "lastName" : "McCarron",
          "primaryNumber" : "47",
          "birthDate" : "1995-03-07",
          "currentAge" : 28,
          "birthCity" : "Grosse Pointe",
          "birthStateProvince" : "MI",
          "birthCountry" : "USA",
          "nationality" : "USA",
          "height" : "6' 6\"",
          "weight" : 232,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "R",
            "name" : "Right Wing",
            "type" : "Forward",
            "abbreviation" : "RW"
          }
        },
        "ID8475168" : {
          "id" : 8475168,
          "fullName" : "Matt Duchene",
          "link" : "/api/v1/people/8475168",
          "firstName" : "Matt",
          "lastName" : "Duchene",
          "primaryNumber" : "95",
          "birthDate" : "1991-01-16",
          "currentAge" : 32,
          "birthCity" : "Haliburton",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "5' 11\"",
          "weight" : 195,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8478975" : {
          "id" : 8478975,
          "fullName" : "Mason Marchment",
          "link" : "/api/v1/people/8478975",
          "firstName" : "Mason",
          "lastName" : "Marchment",
          "primaryNumber" : "17",
          "birthDate" : "1995-06-18",
          "currentAge" : 28,
          "birthCity" : "Uxbridge",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 4\"",
          "weight" : 209,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "L",
            "name" : "Left Wing",
            "type" : "Forward",
            "abbreviation" : "LW"
          }
        },
        "ID8479644" : {
          "id" : 8479644,
          "fullName" : "Matt Luff",
          "link" : "/api/v1/people/8479644",
          "firstName" : "Matt",
          "lastName" : "Luff",
          "primaryNumber" : "24",
          "birthDate" : "1997-05-05",
          "currentAge" : 26,
          "birthCity" : "Oakville",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 2\"",
          "weight" : 196,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "R",
            "name" : "Right Wing",
            "type" : "Forward",
            "abbreviation" : "RW"
          }
        },
        "ID8476456" : {
          "id" : 8476456,
          "fullName" : "Jonathan Huberdeau",
          "link" : "/api/v1/people/8476456",
          "firstName" : "Jonathan",
          "lastName" : "Huberdeau",
          "primaryNumber" : "11",
          "birthDate" : "1993-06-04",
          "currentAge" : 30,
          "birthCity" : "Saint-Jerome",
          "birthStateProvince" : "QC",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 1\"",
          "weight" : 202,
          "active" : true,
          "alternateCaptain" : true,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "L",
            "name" : "Left Wing",
            "type" : "Forward",
            "abbreviation" : "LW"
          }
        },
        "ID8479523" : {
          "id" : 8479523,
          "fullName" : "Lucas Carlsson",
          "link" : "/api/v1/people/8479523",
          "firstName" : "Lucas",
          "lastName" : "Carlsson",
          "primaryNumber" : "32",
          "birthDate" : "1997-07-05",
          "currentAge" : 26,
          "birthCity" : "Gävle",
          "birthCountry" : "SWE",
          "nationality" : "SWE",
          "height" : "6' 0\"",
          "weight" : 189,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8477346" : {
          "id" : 8477346,
          "fullName" : "MacKenzie Weegar",
          "link" : "/api/v1/people/8477346",
          "firstName" : "MacKenzie",
          "lastName" : "Weegar",
          "primaryNumber" : "52",
          "birthDate" : "1994-01-07",
          "currentAge" : 29,
          "birthCity" : "Ottawa",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 0\"",
          "weight" : 200,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8479026" : {
          "id" : 8479026,
          "fullName" : "Philippe Myers",
          "link" : "/api/v1/people/8479026",
          "firstName" : "Philippe",
          "lastName" : "Myers",
          "primaryNumber" : "55",
          "birthDate" : "1997-01-25",
          "currentAge" : 26,
          "birthCity" : "Moncton",
          "birthStateProvince" : "NB",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 5\"",
          "weight" : 210,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8478055" : {
          "id" : 8478055,
          "fullName" : "Gustav Forsling",
          "link" : "/api/v1/people/8478055",
          "firstName" : "Gustav",
          "lastName" : "Forsling",
          "primaryNumber" : "42",
          "birthDate" : "1996-06-12",
          "currentAge" : 27,
          "birthCity" : "Linkoping",
          "birthCountry" : "SWE",
          "nationality" : "SWE",
          "height" : "6' 0\"",
          "weight" : 186,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8479661" : {
          "id" : 8479661,
          "fullName" : "Tanner Jeannot",
          "link" : "/api/v1/people/8479661",
          "firstName" : "Tanner",
          "lastName" : "Jeannot",
          "primaryNumber" : "84",
          "birthDate" : "1997-05-29",
          "currentAge" : 26,
          "birthCity" : "Estevan",
          "birthStateProvince" : "SK",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 2\"",
          "weight" : 208,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : true,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "L",
            "name" : "Left Wing",
            "type" : "Forward",
            "abbreviation" : "LW"
          }
        },
        "ID8475462" : {
          "id" : 8475462,
          "fullName" : "Radko Gudas",
          "link" : "/api/v1/people/8475462",
          "firstName" : "Radko",
          "lastName" : "Gudas",
          "primaryNumber" : "7",
          "birthDate" : "1990-06-05",
          "currentAge" : 33,
          "birthCity" : "Prague",
          "birthCountry" : "CZE",
          "nationality" : "CZE",
          "height" : "6' 0\"",
          "weight" : 208,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8479066" : {
          "id" : 8479066,
          "fullName" : "Ryan Lomberg",
          "link" : "/api/v1/people/8479066",
          "firstName" : "Ryan",
          "lastName" : "Lomberg",
          "primaryNumber" : "94",
          "birthDate" : "1994-12-09",
          "currentAge" : 28,
          "birthCity" : "Richmond Hill",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "5' 9\"",
          "weight" : 187,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "L",
            "name" : "Left Wing",
            "type" : "Forward",
            "abbreviation" : "LW"
          }
        },
        "ID8476393" : {
          "id" : 8476393,
          "fullName" : "Nick Cousins",
          "link" : "/api/v1/people/8476393",
          "firstName" : "Nick",
          "lastName" : "Cousins",
          "primaryNumber" : "21",
          "birthDate" : "1993-07-20",
          "currentAge" : 30,
          "birthCity" : "Belleville",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "5' 11\"",
          "weight" : 183,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "I",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8481577" : {
          "id" : 8481577,
          "fullName" : "Philip Tomasino",
          "link" : "/api/v1/people/8481577",
          "firstName" : "Philip",
          "lastName" : "Tomasino",
          "primaryNumber" : "26",
          "birthDate" : "2001-07-28",
          "currentAge" : 22,
          "birthCity" : "Mississauga",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 0\"",
          "weight" : 179,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : true,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8480185" : {
          "id" : 8480185,
          "fullName" : "Eetu Luostarinen",
          "link" : "/api/v1/people/8480185",
          "firstName" : "Eetu",
          "lastName" : "Luostarinen",
          "primaryNumber" : "27",
          "birthDate" : "1998-09-02",
          "currentAge" : 24,
          "birthCity" : "Siilinjarvi",
          "birthCountry" : "FIN",
          "nationality" : "FIN",
          "height" : "6' 3\"",
          "weight" : 190,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8477407" : {
          "id" : 8477407,
          "fullName" : "Anthony Duclair",
          "link" : "/api/v1/people/8477407",
          "firstName" : "Anthony",
          "lastName" : "Duclair",
          "primaryNumber" : "10",
          "birthDate" : "1995-08-26",
          "currentAge" : 27,
          "birthCity" : "Pointe-Claire",
          "birthStateProvince" : "QC",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "5' 11\"",
          "weight" : 197,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "L",
            "name" : "Left Wing",
            "type" : "Forward",
            "abbreviation" : "LW"
          }
        },
        "ID8477409" : {
          "id" : 8477409,
          "fullName" : "Carter Verhaeghe",
          "link" : "/api/v1/people/8477409",
          "firstName" : "Carter",
          "lastName" : "Verhaeghe",
          "primaryNumber" : "23",
          "birthDate" : "1995-08-14",
          "currentAge" : 27,
          "birthCity" : "Toronto",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 2\"",
          "weight" : 180,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8474697" : {
          "id" : 8474697,
          "fullName" : "Mark Borowiecki",
          "link" : "/api/v1/people/8474697",
          "firstName" : "Mark",
          "lastName" : "Borowiecki",
          "primaryNumber" : "90",
          "birthDate" : "1989-07-12",
          "currentAge" : 34,
          "birthCity" : "Ottawa",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 2\"",
          "weight" : 204,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8471887" : {
          "id" : 8471887,
          "fullName" : "Patric Hornqvist",
          "link" : "/api/v1/people/8471887",
          "firstName" : "Patric",
          "lastName" : "Hornqvist",
          "primaryNumber" : "70",
          "birthDate" : "1987-01-01",
          "currentAge" : 36,
          "birthCity" : "Sollentuna",
          "birthCountry" : "SWE",
          "nationality" : "SWE",
          "height" : "5' 11\"",
          "weight" : 189,
          "active" : true,
          "alternateCaptain" : true,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "R",
            "name" : "Right Wing",
            "type" : "Forward",
            "abbreviation" : "RW"
          }
        },
        "ID8477986" : {
          "id" : 8477986,
          "fullName" : "Brandon Montour",
          "link" : "/api/v1/people/8477986",
          "firstName" : "Brandon",
          "lastName" : "Montour",
          "primaryNumber" : "62",
          "birthDate" : "1994-04-11",
          "currentAge" : 29,
          "birthCity" : "Brantford",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 0\"",
          "weight" : 194,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8475793" : {
          "id" : 8475793,
          "fullName" : "Ryan Johansen",
          "link" : "/api/v1/people/8475793",
          "firstName" : "Ryan",
          "lastName" : "Johansen",
          "primaryNumber" : "92",
          "birthDate" : "1992-07-31",
          "currentAge" : 31,
          "birthCity" : "Vancouver",
          "birthStateProvince" : "BC",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 3\"",
          "weight" : 218,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8477433" : {
          "id" : 8477433,
          "fullName" : "Ben Harpur",
          "link" : "/api/v1/people/8477433",
          "firstName" : "Ben",
          "lastName" : "Harpur",
          "primaryNumber" : "17",
          "birthDate" : "1995-01-12",
          "currentAge" : 28,
          "birthCity" : "Hamilton",
          "birthStateProvince" : "ON",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 6\"",
          "weight" : 231,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8479316" : {
          "id" : 8479316,
          "fullName" : "Luke Kunin",
          "link" : "/api/v1/people/8479316",
          "firstName" : "Luke",
          "lastName" : "Kunin",
          "primaryNumber" : "11",
          "birthDate" : "1997-12-04",
          "currentAge" : 25,
          "birthCity" : "Chesterfield",
          "birthStateProvince" : "MO",
          "birthCountry" : "USA",
          "nationality" : "USA",
          "height" : "6' 0\"",
          "weight" : 197,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8479553" : {
          "id" : 8479553,
          "fullName" : "Maxim Mamin",
          "link" : "/api/v1/people/8479553",
          "firstName" : "Maxim",
          "lastName" : "Mamin",
          "primaryNumber" : "98",
          "birthDate" : "1995-01-13",
          "currentAge" : 28,
          "birthCity" : "Moscow",
          "birthCountry" : "RUS",
          "nationality" : "RUS",
          "height" : "6' 2\"",
          "weight" : 206,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8479355" : {
          "id" : 8479355,
          "fullName" : "Olli Juolevi",
          "link" : "/api/v1/people/8479355",
          "firstName" : "Olli",
          "lastName" : "Juolevi",
          "primaryNumber" : "4",
          "birthDate" : "1998-05-05",
          "currentAge" : 25,
          "birthCity" : "Helsinki",
          "birthCountry" : "FIN",
          "nationality" : "FIN",
          "height" : "6' 2\"",
          "weight" : 182,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : true,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8479496" : {
          "id" : 8479496,
          "fullName" : "David Rittich",
          "link" : "/api/v1/people/8479496",
          "firstName" : "David",
          "lastName" : "Rittich",
          "primaryNumber" : "33",
          "birthDate" : "1992-08-19",
          "currentAge" : 30,
          "birthCity" : "Jihlava",
          "birthCountry" : "CZE",
          "nationality" : "CZE",
          "height" : "6' 3\"",
          "weight" : 206,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "G",
            "name" : "Goalie",
            "type" : "Goalie",
            "abbreviation" : "G"
          }
        },
        "ID8478366" : {
          "id" : 8478366,
          "fullName" : "Frank Vatrano",
          "link" : "/api/v1/people/8478366",
          "firstName" : "Frank",
          "lastName" : "Vatrano",
          "primaryNumber" : "77",
          "birthDate" : "1994-03-14",
          "currentAge" : 29,
          "birthCity" : "East Longmeadow",
          "birthStateProvince" : "MA",
          "birthCountry" : "USA",
          "nationality" : "USA",
          "height" : "5' 11\"",
          "weight" : 197,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8479371" : {
          "id" : 8479371,
          "fullName" : "Dante Fabbro",
          "link" : "/api/v1/people/8479371",
          "firstName" : "Dante",
          "lastName" : "Fabbro",
          "primaryNumber" : "57",
          "birthDate" : "1998-06-20",
          "currentAge" : 25,
          "birthCity" : "Coquitlam",
          "birthStateProvince" : "BC",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 0\"",
          "weight" : 189,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "R",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          },
          "primaryPosition" : {
            "code" : "D",
            "name" : "Defenseman",
            "type" : "Defenseman",
            "abbreviation" : "D"
          }
        },
        "ID8477493" : {
          "id" : 8477493,
          "fullName" : "Aleksander Barkov",
          "link" : "/api/v1/people/8477493",
          "firstName" : "Aleksander",
          "lastName" : "Barkov",
          "primaryNumber" : "16",
          "birthDate" : "1995-09-02",
          "currentAge" : 27,
          "birthCity" : "Tampere",
          "birthCountry" : "FIN",
          "nationality" : "FIN",
          "height" : "6' 3\"",
          "weight" : 215,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : true,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        },
        "ID8482113" : {
          "id" : 8482113,
          "fullName" : "Anton Lundell",
          "link" : "/api/v1/people/8482113",
          "firstName" : "Anton",
          "lastName" : "Lundell",
          "primaryNumber" : "15",
          "birthDate" : "2001-10-03",
          "currentAge" : 21,
          "birthCity" : "Espoo",
          "birthCountry" : "FIN",
          "nationality" : "FIN",
          "height" : "6' 1\"",
          "weight" : 185,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : true,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          },
          "primaryPosition" : {
            "code" : "C",
            "name" : "Center",
            "type" : "Forward",
            "abbreviation" : "C"
          }
        }
      },
      "venue" : {
        "id" : 5027,
        "name" : "FLA Live Arena",
        "link" : "/api/v1/venues/5027"
      }
    },
    "liveData" : {
      "plays" : {
        "allPlays" : [ {
          "result" : {
            "event" : "Game Scheduled",
            "eventCode" : "FLA1",
            "eventTypeId" : "GAME_SCHEDULED",
            "description" : "Game Scheduled"
          },
          "about" : {
            "eventIdx" : 0,
            "eventId" : 1,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "00:00",
            "periodTimeRemaining" : "20:00",
            "dateTime" : "2022-02-22T23:15:03Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : { }
        }, {
          "result" : {
            "event" : "Period Ready",
            "eventCode" : "FLA5",
            "eventTypeId" : "PERIOD_READY",
            "description" : "Period Ready"
          },
          "about" : {
            "eventIdx" : 1,
            "eventId" : 5,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "00:00",
            "periodTimeRemaining" : "20:00",
            "dateTime" : "2022-02-23T00:08:59Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : { }
        }, {
          "result" : {
            "event" : "Period Start",
            "eventCode" : "FLA51",
            "eventTypeId" : "PERIOD_START",
            "description" : "Period Start"
          },
          "about" : {
            "eventIdx" : 2,
            "eventId" : 51,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "00:00",
            "periodTimeRemaining" : "20:00",
            "dateTime" : "2022-02-23T00:09:16Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA52",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 3,
            "eventId" : 52,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "00:00",
            "periodTimeRemaining" : "20:00",
            "dateTime" : "2022-02-23T00:09:16Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475462,
              "fullName" : "Radko Gudas",
              "link" : "/api/v1/people/8475462"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8474600,
              "fullName" : "Roman Josi",
              "link" : "/api/v1/people/8474600"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA8",
            "eventTypeId" : "HIT",
            "description" : "Radko Gudas hit Roman Josi"
          },
          "about" : {
            "eventIdx" : 5,
            "eventId" : 8,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "00:13",
            "periodTimeRemaining" : "19:47",
            "dateTime" : "2022-02-23T00:09:29Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 59.0,
            "y" : 39.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478508,
              "fullName" : "Yakov Trenin",
              "link" : "/api/v1/people/8478508"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA53",
            "eventTypeId" : "SHOT",
            "description" : "Yakov Trenin Slap Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 4,
            "eventId" : 53,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "00:13",
            "periodTimeRemaining" : "19:47",
            "dateTime" : "2022-02-23T00:09:29Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 54.0,
            "y" : 6.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477409,
              "fullName" : "Carter Verhaeghe",
              "link" : "/api/v1/people/8477409"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA9",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Carter Verhaeghe"
          },
          "about" : {
            "eventIdx" : 6,
            "eventId" : 9,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "00:45",
            "periodTimeRemaining" : "19:15",
            "dateTime" : "2022-02-23T00:10:01Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -32.0,
            "y" : -24.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA10",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 7,
            "eventId" : 10,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "00:50",
            "periodTimeRemaining" : "19:10",
            "dateTime" : "2022-02-23T00:10:06Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -61.0,
            "y" : -13.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475218,
              "fullName" : "Mattias Ekholm",
              "link" : "/api/v1/people/8475218"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA54",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Aleksander Barkov shot blocked shot by Mattias Ekholm"
          },
          "about" : {
            "eventIdx" : 8,
            "eventId" : 54,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "01:04",
            "periodTimeRemaining" : "18:56",
            "dateTime" : "2022-02-23T00:10:20Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -73.0,
            "y" : -12.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA55",
            "eventTypeId" : "SHOT",
            "description" : "Aaron Ekblad Slap Shot saved by David Rittich",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 9,
            "eventId" : 55,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "01:04",
            "periodTimeRemaining" : "18:56",
            "dateTime" : "2022-02-23T00:10:20Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -70.0,
            "y" : 27.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA11",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 10,
            "eventId" : 11,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "01:05",
            "periodTimeRemaining" : "18:55",
            "dateTime" : "2022-02-23T00:10:22Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA56",
            "eventTypeId" : "FACEOFF",
            "description" : "Aleksander Barkov faceoff won against Ryan Johansen"
          },
          "about" : {
            "eventIdx" : 11,
            "eventId" : 56,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "01:05",
            "periodTimeRemaining" : "18:55",
            "dateTime" : "2022-02-23T00:10:51Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA57",
            "eventTypeId" : "SHOT",
            "description" : "Aaron Ekblad Slap Shot saved by David Rittich",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 12,
            "eventId" : 57,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "01:14",
            "periodTimeRemaining" : "18:46",
            "dateTime" : "2022-02-23T00:11:00Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -33.0,
            "y" : 34.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA12",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Ryan Johansen"
          },
          "about" : {
            "eventIdx" : 13,
            "eventId" : 12,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "01:39",
            "periodTimeRemaining" : "18:21",
            "dateTime" : "2022-02-23T00:11:25Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 75.0,
            "y" : 37.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA13",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Ryan Johansen"
          },
          "about" : {
            "eventIdx" : 14,
            "eventId" : 13,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "01:44",
            "periodTimeRemaining" : "18:16",
            "dateTime" : "2022-02-23T00:11:30Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 84.0,
            "y" : 34.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA58",
            "eventTypeId" : "SHOT",
            "description" : "Sam Reinhart Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 15,
            "eventId" : 58,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "01:58",
            "periodTimeRemaining" : "18:02",
            "dateTime" : "2022-02-23T00:11:44Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -42.0,
            "y" : 19.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8475168,
              "fullName" : "Matt Duchene",
              "link" : "/api/v1/people/8475168"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA59",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Matt Duchene shot blocked shot by Anton Lundell"
          },
          "about" : {
            "eventIdx" : 16,
            "eventId" : 59,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "02:20",
            "periodTimeRemaining" : "17:40",
            "dateTime" : "2022-02-23T00:12:06Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 75.0,
            "y" : 4.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA60",
            "eventTypeId" : "SHOT",
            "description" : "Eeli Tolvanen Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 17,
            "eventId" : 60,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "02:41",
            "periodTimeRemaining" : "17:19",
            "dateTime" : "2022-02-23T00:12:27Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 64.0,
            "y" : -24.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479553,
              "fullName" : "Maxim Mamin",
              "link" : "/api/v1/people/8479553"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA61",
            "eventTypeId" : "SHOT",
            "description" : "Maxim Mamin Tip-In saved by David Rittich",
            "secondaryType" : "Tip-In"
          },
          "about" : {
            "eventIdx" : 18,
            "eventId" : 61,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "02:46",
            "periodTimeRemaining" : "17:14",
            "dateTime" : "2022-02-23T00:12:32Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -80.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA14",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 19,
            "eventId" : 14,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "02:47",
            "periodTimeRemaining" : "17:13",
            "dateTime" : "2022-02-23T00:12:34Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8471887,
              "fullName" : "Patric Hornqvist",
              "link" : "/api/v1/people/8471887"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA62",
            "eventTypeId" : "FACEOFF",
            "description" : "Michael McCarron faceoff won against Patric Hornqvist"
          },
          "about" : {
            "eventIdx" : 20,
            "eventId" : 62,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "02:47",
            "periodTimeRemaining" : "17:13",
            "dateTime" : "2022-02-23T00:13:07Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479066,
              "fullName" : "Ryan Lomberg",
              "link" : "/api/v1/people/8479066"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA15",
            "eventTypeId" : "HIT",
            "description" : "Ryan Lomberg hit Eeli Tolvanen"
          },
          "about" : {
            "eventIdx" : 21,
            "eventId" : 15,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "03:07",
            "periodTimeRemaining" : "16:53",
            "dateTime" : "2022-02-23T00:13:27Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -97.0,
            "y" : 24.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA16",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Michael McCarron"
          },
          "about" : {
            "eventIdx" : 22,
            "eventId" : 16,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "03:11",
            "periodTimeRemaining" : "16:49",
            "dateTime" : "2022-02-23T00:13:31Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 14.0,
            "y" : 40.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA17",
            "eventTypeId" : "STOP",
            "description" : "Offside"
          },
          "about" : {
            "eventIdx" : 23,
            "eventId" : 17,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "03:14",
            "periodTimeRemaining" : "16:46",
            "dateTime" : "2022-02-23T00:13:35Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA63",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Jonathan Huberdeau"
          },
          "about" : {
            "eventIdx" : 24,
            "eventId" : 63,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "03:14",
            "periodTimeRemaining" : "16:46",
            "dateTime" : "2022-02-23T00:14:08Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 20.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479661,
              "fullName" : "Tanner Jeannot",
              "link" : "/api/v1/people/8479661"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA18",
            "eventTypeId" : "HIT",
            "description" : "Tanner Jeannot hit MacKenzie Weegar"
          },
          "about" : {
            "eventIdx" : 25,
            "eventId" : 18,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "03:23",
            "periodTimeRemaining" : "16:37",
            "dateTime" : "2022-02-23T00:14:17Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 98.0,
            "y" : -14.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477407,
              "fullName" : "Anthony Duclair",
              "link" : "/api/v1/people/8477407"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA64",
            "eventTypeId" : "SHOT",
            "description" : "Anthony Duclair Backhand saved by David Rittich",
            "secondaryType" : "Backhand"
          },
          "about" : {
            "eventIdx" : 26,
            "eventId" : 64,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "03:38",
            "periodTimeRemaining" : "16:22",
            "dateTime" : "2022-02-23T00:14:32Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -65.0,
            "y" : 4.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA19",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 27,
            "eventId" : 19,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "03:47",
            "periodTimeRemaining" : "16:13",
            "dateTime" : "2022-02-23T00:14:40Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479316,
              "fullName" : "Luke Kunin",
              "link" : "/api/v1/people/8479316"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA65",
            "eventTypeId" : "FACEOFF",
            "description" : "Luke Kunin faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 28,
            "eventId" : 65,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "03:47",
            "periodTimeRemaining" : "16:13",
            "dateTime" : "2022-02-23T00:15:28Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA20",
            "eventTypeId" : "HIT",
            "description" : "Dante Fabbro hit Sam Reinhart"
          },
          "about" : {
            "eventIdx" : 29,
            "eventId" : 20,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "04:45",
            "periodTimeRemaining" : "15:15",
            "dateTime" : "2022-02-23T00:16:26Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -92.0,
            "y" : -30.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478055,
              "fullName" : "Gustav Forsling",
              "link" : "/api/v1/people/8478055"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA66",
            "eventTypeId" : "SHOT",
            "description" : "Gustav Forsling Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 30,
            "eventId" : 66,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "04:48",
            "periodTimeRemaining" : "15:12",
            "dateTime" : "2022-02-23T00:16:29Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -41.0,
            "y" : -29.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA67",
            "eventTypeId" : "SHOT",
            "description" : "Sam Reinhart Backhand saved by David Rittich",
            "secondaryType" : "Backhand"
          },
          "about" : {
            "eventIdx" : 31,
            "eventId" : 67,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "04:50",
            "periodTimeRemaining" : "15:10",
            "dateTime" : "2022-02-23T00:16:31Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -78.0,
            "y" : -4.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA21",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 32,
            "eventId" : 21,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "05:18",
            "periodTimeRemaining" : "14:42",
            "dateTime" : "2022-02-23T00:16:59Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : 55.0,
            "y" : -30.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477409,
              "fullName" : "Carter Verhaeghe",
              "link" : "/api/v1/people/8477409"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA68",
            "eventTypeId" : "SHOT",
            "description" : "Carter Verhaeghe Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 33,
            "eventId" : 68,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "05:28",
            "periodTimeRemaining" : "14:32",
            "dateTime" : "2022-02-23T00:17:09Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -53.0,
            "y" : 7.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA69",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Aleksander Barkov shot blocked shot by Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 34,
            "eventId" : 69,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "05:41",
            "periodTimeRemaining" : "14:19",
            "dateTime" : "2022-02-23T00:17:22Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -76.0,
            "y" : 18.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "PenaltyOn"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "DrewBy"
          } ],
          "result" : {
            "event" : "Penalty",
            "eventCode" : "FLA22",
            "eventTypeId" : "PENALTY",
            "description" : "Mikael Granlund Holding against Aleksander Barkov",
            "secondaryType" : "Holding",
            "penaltySeverity" : "Minor",
            "penaltyMinutes" : 2
          },
          "about" : {
            "eventIdx" : 35,
            "eventId" : 22,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "05:45",
            "periodTimeRemaining" : "14:15",
            "dateTime" : "2022-02-23T00:17:26Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -74.0,
            "y" : 18.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA71",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 36,
            "eventId" : 71,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "05:45",
            "periodTimeRemaining" : "14:15",
            "dateTime" : "2022-02-23T00:18:25Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA25",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Jonathan Huberdeau"
          },
          "about" : {
            "eventIdx" : 37,
            "eventId" : 25,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "06:22",
            "periodTimeRemaining" : "13:38",
            "dateTime" : "2022-02-23T00:19:02Z",
            "goals" : {
              "away" : 0,
              "home" : 0
            }
          },
          "coordinates" : {
            "x" : -35.0,
            "y" : -27.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Scorer",
            "seasonTotal" : 18
          }, {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Assist",
            "seasonTotal" : 54
          }, {
            "player" : {
              "id" : 8477407,
              "fullName" : "Anthony Duclair",
              "link" : "/api/v1/people/8477407"
            },
            "playerType" : "Assist",
            "seasonTotal" : 18
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Goal",
            "eventCode" : "FLA72",
            "eventTypeId" : "GOAL",
            "description" : "Sam Reinhart (18) Wrist Shot, assists: Jonathan Huberdeau (54), Anthony Duclair (18)",
            "secondaryType" : "Wrist Shot",
            "strength" : {
              "code" : "PPG",
              "name" : "Power Play"
            },
            "gameWinningGoal" : false,
            "emptyNet" : false
          },
          "about" : {
            "eventIdx" : 38,
            "eventId" : 72,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "06:45",
            "periodTimeRemaining" : "13:15",
            "dateTime" : "2022-02-23T00:19:25Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -81.0,
            "y" : -6.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA73",
            "eventTypeId" : "FACEOFF",
            "description" : "Eetu Luostarinen faceoff won against Michael McCarron"
          },
          "about" : {
            "eventIdx" : 39,
            "eventId" : 73,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "06:45",
            "periodTimeRemaining" : "13:15",
            "dateTime" : "2022-02-23T00:20:11Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA26",
            "eventTypeId" : "HIT",
            "description" : "Eetu Luostarinen hit Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 40,
            "eventId" : 26,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "06:58",
            "periodTimeRemaining" : "13:02",
            "dateTime" : "2022-02-23T00:20:24Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -97.0,
            "y" : -23.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479066,
              "fullName" : "Ryan Lomberg",
              "link" : "/api/v1/people/8479066"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA74",
            "eventTypeId" : "SHOT",
            "description" : "Ryan Lomberg Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 41,
            "eventId" : 74,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "07:01",
            "periodTimeRemaining" : "12:59",
            "dateTime" : "2022-02-23T00:20:27Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -84.0,
            "y" : 18.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479523,
              "fullName" : "Lucas Carlsson",
              "link" : "/api/v1/people/8479523"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA75",
            "eventTypeId" : "SHOT",
            "description" : "Lucas Carlsson Slap Shot saved by David Rittich",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 42,
            "eventId" : 75,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "07:13",
            "periodTimeRemaining" : "12:47",
            "dateTime" : "2022-02-23T00:20:39Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -35.0,
            "y" : 1.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA27",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 43,
            "eventId" : 27,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "07:14",
            "periodTimeRemaining" : "12:46",
            "dateTime" : "2022-02-23T00:20:40Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA76",
            "eventTypeId" : "FACEOFF",
            "description" : "Ryan Johansen faceoff won against Anton Lundell"
          },
          "about" : {
            "eventIdx" : 44,
            "eventId" : 76,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "07:14",
            "periodTimeRemaining" : "12:46",
            "dateTime" : "2022-02-23T00:23:07Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8478975,
              "fullName" : "Mason Marchment",
              "link" : "/api/v1/people/8478975"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA28",
            "eventTypeId" : "HIT",
            "description" : "Ryan Johansen hit Mason Marchment"
          },
          "about" : {
            "eventIdx" : 45,
            "eventId" : 28,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "07:27",
            "periodTimeRemaining" : "12:33",
            "dateTime" : "2022-02-23T00:23:20Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 61.0,
            "y" : -39.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475218,
              "fullName" : "Mattias Ekholm",
              "link" : "/api/v1/people/8475218"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA29",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Mattias Ekholm"
          },
          "about" : {
            "eventIdx" : 46,
            "eventId" : 29,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "07:39",
            "periodTimeRemaining" : "12:21",
            "dateTime" : "2022-02-23T00:23:32Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -34.0,
            "y" : 23.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479661,
              "fullName" : "Tanner Jeannot",
              "link" : "/api/v1/people/8479661"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8475462,
              "fullName" : "Radko Gudas",
              "link" : "/api/v1/people/8475462"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA30",
            "eventTypeId" : "HIT",
            "description" : "Tanner Jeannot hit Radko Gudas"
          },
          "about" : {
            "eventIdx" : 47,
            "eventId" : 30,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "09:08",
            "periodTimeRemaining" : "10:52",
            "dateTime" : "2022-02-23T00:25:01Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 94.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA31",
            "eventTypeId" : "HIT",
            "description" : "Colton Sissons hit Eetu Luostarinen"
          },
          "about" : {
            "eventIdx" : 48,
            "eventId" : 31,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "09:19",
            "periodTimeRemaining" : "10:41",
            "dateTime" : "2022-02-23T00:25:12Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 84.0,
            "y" : 35.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA32",
            "eventTypeId" : "STOP",
            "description" : "Offside"
          },
          "about" : {
            "eventIdx" : 49,
            "eventId" : 32,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "09:21",
            "periodTimeRemaining" : "10:39",
            "dateTime" : "2022-02-23T00:25:14Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479644,
              "fullName" : "Matt Luff",
              "link" : "/api/v1/people/8479644"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA77",
            "eventTypeId" : "FACEOFF",
            "description" : "Matt Luff faceoff won against Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 50,
            "eventId" : 77,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "09:21",
            "periodTimeRemaining" : "10:39",
            "dateTime" : "2022-02-23T00:25:45Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 20.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477986,
              "fullName" : "Brandon Montour",
              "link" : "/api/v1/people/8477986"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA33",
            "eventTypeId" : "HIT",
            "description" : "Michael McCarron hit Brandon Montour"
          },
          "about" : {
            "eventIdx" : 51,
            "eventId" : 33,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "09:36",
            "periodTimeRemaining" : "10:24",
            "dateTime" : "2022-02-23T00:26:00Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 63.0,
            "y" : 41.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479553,
              "fullName" : "Maxim Mamin",
              "link" : "/api/v1/people/8479553"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA34",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Maxim Mamin"
          },
          "about" : {
            "eventIdx" : 52,
            "eventId" : 34,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "09:56",
            "periodTimeRemaining" : "10:04",
            "dateTime" : "2022-02-23T00:26:20Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -83.0,
            "y" : 35.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA35",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 53,
            "eventId" : 35,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "10:19",
            "periodTimeRemaining" : "09:41",
            "dateTime" : "2022-02-23T00:26:44Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA78",
            "eventTypeId" : "FACEOFF",
            "description" : "Ryan Johansen faceoff won against Sam Reinhart"
          },
          "about" : {
            "eventIdx" : 54,
            "eventId" : 78,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "10:19",
            "periodTimeRemaining" : "09:41",
            "dateTime" : "2022-02-23T00:27:19Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA79",
            "eventTypeId" : "SHOT",
            "description" : "Ryan Johansen Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 55,
            "eventId" : 79,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "10:36",
            "periodTimeRemaining" : "09:24",
            "dateTime" : "2022-02-23T00:27:36Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 65.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476988,
              "fullName" : "Matt Benning",
              "link" : "/api/v1/people/8476988"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477409,
              "fullName" : "Carter Verhaeghe",
              "link" : "/api/v1/people/8477409"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA36",
            "eventTypeId" : "HIT",
            "description" : "Matt Benning hit Carter Verhaeghe"
          },
          "about" : {
            "eventIdx" : 56,
            "eventId" : 36,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "10:48",
            "periodTimeRemaining" : "09:12",
            "dateTime" : "2022-02-23T00:27:48Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -46.0,
            "y" : -39.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475462,
              "fullName" : "Radko Gudas",
              "link" : "/api/v1/people/8475462"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8476887,
              "fullName" : "Filip Forsberg",
              "link" : "/api/v1/people/8476887"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA81",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Filip Forsberg shot blocked shot by Radko Gudas"
          },
          "about" : {
            "eventIdx" : 57,
            "eventId" : 81,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "11:37",
            "periodTimeRemaining" : "08:23",
            "dateTime" : "2022-02-23T00:28:37Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 73.0,
            "y" : 16.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA37",
            "eventTypeId" : "HIT",
            "description" : "Mikael Granlund hit Sam Bennett"
          },
          "about" : {
            "eventIdx" : 58,
            "eventId" : 37,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "11:43",
            "periodTimeRemaining" : "08:17",
            "dateTime" : "2022-02-23T00:28:43Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 85.0,
            "y" : 37.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475462,
              "fullName" : "Radko Gudas",
              "link" : "/api/v1/people/8475462"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8474600,
              "fullName" : "Roman Josi",
              "link" : "/api/v1/people/8474600"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA82",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Roman Josi shot blocked shot by Radko Gudas"
          },
          "about" : {
            "eventIdx" : 59,
            "eventId" : 82,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "11:53",
            "periodTimeRemaining" : "08:07",
            "dateTime" : "2022-02-23T00:28:53Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 67.0,
            "y" : 10.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475462,
              "fullName" : "Radko Gudas",
              "link" : "/api/v1/people/8475462"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8479026,
              "fullName" : "Philippe Myers",
              "link" : "/api/v1/people/8479026"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA83",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Philippe Myers shot blocked shot by Radko Gudas"
          },
          "about" : {
            "eventIdx" : 60,
            "eventId" : 83,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:00",
            "periodTimeRemaining" : "08:00",
            "dateTime" : "2022-02-23T00:29:00Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 66.0,
            "y" : 15.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475168,
              "fullName" : "Matt Duchene",
              "link" : "/api/v1/people/8475168"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA41",
            "eventTypeId" : "SHOT",
            "description" : "Matt Duchene Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 61,
            "eventId" : 41,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:04",
            "periodTimeRemaining" : "07:56",
            "dateTime" : "2022-02-23T00:29:04Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 71.0,
            "y" : -18.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475168,
              "fullName" : "Matt Duchene",
              "link" : "/api/v1/people/8475168"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA84",
            "eventTypeId" : "SHOT",
            "description" : "Matt Duchene Backhand saved by Sergei Bobrovsky",
            "secondaryType" : "Backhand"
          },
          "about" : {
            "eventIdx" : 62,
            "eventId" : 84,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:04",
            "periodTimeRemaining" : "07:56",
            "dateTime" : "2022-02-23T00:29:04Z",
            "goals" : {
              "away" : 0,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 63.0,
            "y" : 4.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476887,
              "fullName" : "Filip Forsberg",
              "link" : "/api/v1/people/8476887"
            },
            "playerType" : "Scorer",
            "seasonTotal" : 26
          }, {
            "player" : {
              "id" : 8475168,
              "fullName" : "Matt Duchene",
              "link" : "/api/v1/people/8475168"
            },
            "playerType" : "Assist",
            "seasonTotal" : 22
          }, {
            "player" : {
              "id" : 8478851,
              "fullName" : "Alexandre Carrier",
              "link" : "/api/v1/people/8478851"
            },
            "playerType" : "Assist",
            "seasonTotal" : 18
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Goal",
            "eventCode" : "FLA85",
            "eventTypeId" : "GOAL",
            "description" : "Filip Forsberg (26) Backhand, assists: Matt Duchene (22), Alexandre Carrier (18)",
            "secondaryType" : "Backhand",
            "strength" : {
              "code" : "EVEN",
              "name" : "Even"
            },
            "gameWinningGoal" : false,
            "emptyNet" : false
          },
          "about" : {
            "eventIdx" : 63,
            "eventId" : 85,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:06",
            "periodTimeRemaining" : "07:54",
            "dateTime" : "2022-02-23T00:29:06Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 87.0,
            "y" : -3.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA86",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Eetu Luostarinen"
          },
          "about" : {
            "eventIdx" : 64,
            "eventId" : 86,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:06",
            "periodTimeRemaining" : "07:54",
            "dateTime" : "2022-02-23T00:29:52Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8479066,
              "fullName" : "Ryan Lomberg",
              "link" : "/api/v1/people/8479066"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA40",
            "eventTypeId" : "HIT",
            "description" : "Colton Sissons hit Ryan Lomberg"
          },
          "about" : {
            "eventIdx" : 65,
            "eventId" : 40,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:22",
            "periodTimeRemaining" : "07:38",
            "dateTime" : "2022-02-23T00:30:08Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -39.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478851,
              "fullName" : "Alexandre Carrier",
              "link" : "/api/v1/people/8478851"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8471887,
              "fullName" : "Patric Hornqvist",
              "link" : "/api/v1/people/8471887"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA87",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Patric Hornqvist shot blocked shot by Alexandre Carrier"
          },
          "about" : {
            "eventIdx" : 66,
            "eventId" : 87,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:23",
            "periodTimeRemaining" : "07:37",
            "dateTime" : "2022-02-23T00:30:09Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -71.0,
            "y" : -19.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479066,
              "fullName" : "Ryan Lomberg",
              "link" : "/api/v1/people/8479066"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA89",
            "eventTypeId" : "SHOT",
            "description" : "Ryan Lomberg Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 67,
            "eventId" : 89,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:28",
            "periodTimeRemaining" : "07:32",
            "dateTime" : "2022-02-23T00:30:14Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -73.0,
            "y" : 6.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8471887,
              "fullName" : "Patric Hornqvist",
              "link" : "/api/v1/people/8471887"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8478851,
              "fullName" : "Alexandre Carrier",
              "link" : "/api/v1/people/8478851"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA38",
            "eventTypeId" : "HIT",
            "description" : "Patric Hornqvist hit Alexandre Carrier"
          },
          "about" : {
            "eventIdx" : 68,
            "eventId" : 38,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:31",
            "periodTimeRemaining" : "07:29",
            "dateTime" : "2022-02-23T00:30:17Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -89.0,
            "y" : -33.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479066,
              "fullName" : "Ryan Lomberg",
              "link" : "/api/v1/people/8479066"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA90",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Ryan Lomberg Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 69,
            "eventId" : 90,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:32",
            "periodTimeRemaining" : "07:28",
            "dateTime" : "2022-02-23T00:30:18Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -80.0,
            "y" : 6.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA39",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 71,
            "eventId" : 39,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:33",
            "periodTimeRemaining" : "07:27",
            "dateTime" : "2022-02-23T00:30:19Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA88",
            "eventTypeId" : "SHOT",
            "description" : "Eetu Luostarinen Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 70,
            "eventId" : 88,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:33",
            "periodTimeRemaining" : "07:27",
            "dateTime" : "2022-02-23T00:30:19Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -70.0,
            "y" : 13.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA91",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Eetu Luostarinen"
          },
          "about" : {
            "eventIdx" : 72,
            "eventId" : 91,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:33",
            "periodTimeRemaining" : "07:27",
            "dateTime" : "2022-02-23T00:33:00Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -20.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA42",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 74,
            "eventId" : 42,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:40",
            "periodTimeRemaining" : "07:20",
            "dateTime" : "2022-02-23T00:33:06Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA92",
            "eventTypeId" : "SHOT",
            "description" : "Dante Fabbro Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 73,
            "eventId" : 92,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:40",
            "periodTimeRemaining" : "07:20",
            "dateTime" : "2022-02-23T00:33:06Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -15.0,
            "y" : -4.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA93",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Eetu Luostarinen"
          },
          "about" : {
            "eventIdx" : 75,
            "eventId" : 93,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "12:40",
            "periodTimeRemaining" : "07:20",
            "dateTime" : "2022-02-23T00:33:36Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479066,
              "fullName" : "Ryan Lomberg",
              "link" : "/api/v1/people/8479066"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA95",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Dante Fabbro shot blocked shot by Ryan Lomberg"
          },
          "about" : {
            "eventIdx" : 76,
            "eventId" : 95,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "13:08",
            "periodTimeRemaining" : "06:52",
            "dateTime" : "2022-02-23T00:34:04Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 70.0,
            "y" : 11.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA43",
            "eventTypeId" : "STOP",
            "description" : "Puck in Netting"
          },
          "about" : {
            "eventIdx" : 77,
            "eventId" : 43,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "13:10",
            "periodTimeRemaining" : "06:50",
            "dateTime" : "2022-02-23T00:34:05Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA96",
            "eventTypeId" : "FACEOFF",
            "description" : "Aleksander Barkov faceoff won against Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 78,
            "eventId" : 96,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "13:10",
            "periodTimeRemaining" : "06:50",
            "dateTime" : "2022-02-23T00:34:37Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "PenaltyOn"
          }, {
            "player" : {
              "id" : 8475218,
              "fullName" : "Mattias Ekholm",
              "link" : "/api/v1/people/8475218"
            },
            "playerType" : "DrewBy"
          } ],
          "result" : {
            "event" : "Penalty",
            "eventCode" : "FLA44",
            "eventTypeId" : "PENALTY",
            "description" : "Aleksander Barkov Interference against Mattias Ekholm",
            "secondaryType" : "Interference",
            "penaltySeverity" : "Minor",
            "penaltyMinutes" : 2
          },
          "about" : {
            "eventIdx" : 79,
            "eventId" : 44,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "13:24",
            "periodTimeRemaining" : "06:36",
            "dateTime" : "2022-02-23T00:34:52Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -21.0,
            "y" : -38.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA97",
            "eventTypeId" : "FACEOFF",
            "description" : "Ryan Johansen faceoff won against Eetu Luostarinen"
          },
          "about" : {
            "eventIdx" : 80,
            "eventId" : 97,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "13:24",
            "periodTimeRemaining" : "06:36",
            "dateTime" : "2022-02-23T00:35:35Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA98",
            "eventTypeId" : "SHOT",
            "description" : "Ryan Johansen Slap Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 81,
            "eventId" : 98,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "13:31",
            "periodTimeRemaining" : "06:29",
            "dateTime" : "2022-02-23T00:35:42Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -12.0,
            "y" : -32.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8474600,
              "fullName" : "Roman Josi",
              "link" : "/api/v1/people/8474600"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA99",
            "eventTypeId" : "SHOT",
            "description" : "Roman Josi Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 82,
            "eventId" : 99,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "13:54",
            "periodTimeRemaining" : "06:06",
            "dateTime" : "2022-02-23T00:36:05Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -8.0,
            "y" : -18.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475168,
              "fullName" : "Matt Duchene",
              "link" : "/api/v1/people/8475168"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA100",
            "eventTypeId" : "SHOT",
            "description" : "Matt Duchene Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 83,
            "eventId" : 100,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "14:10",
            "periodTimeRemaining" : "05:50",
            "dateTime" : "2022-02-23T00:36:21Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 61.0,
            "y" : -28.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA48",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 84,
            "eventId" : 48,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "14:12",
            "periodTimeRemaining" : "05:48",
            "dateTime" : "2022-02-23T00:36:23Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA251",
            "eventTypeId" : "FACEOFF",
            "description" : "Ryan Johansen faceoff won against Anton Lundell"
          },
          "about" : {
            "eventIdx" : 85,
            "eventId" : 251,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "14:12",
            "periodTimeRemaining" : "05:48",
            "dateTime" : "2022-02-23T00:36:51Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA49",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Anton Lundell"
          },
          "about" : {
            "eventIdx" : 86,
            "eventId" : 49,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "14:18",
            "periodTimeRemaining" : "05:42",
            "dateTime" : "2022-02-23T00:36:57Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 17.0,
            "y" : -18.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8474600,
              "fullName" : "Roman Josi",
              "link" : "/api/v1/people/8474600"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA252",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Anton Lundell shot blocked shot by Roman Josi"
          },
          "about" : {
            "eventIdx" : 87,
            "eventId" : 252,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "14:24",
            "periodTimeRemaining" : "05:36",
            "dateTime" : "2022-02-23T00:37:03Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -66.0,
            "y" : -12.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA50",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 88,
            "eventId" : 50,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "14:41",
            "periodTimeRemaining" : "05:19",
            "dateTime" : "2022-02-23T00:37:21Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA253",
            "eventTypeId" : "FACEOFF",
            "description" : "Ryan Johansen faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 89,
            "eventId" : 253,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "14:41",
            "periodTimeRemaining" : "05:19",
            "dateTime" : "2022-02-23T00:37:47Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8481577,
              "fullName" : "Philip Tomasino",
              "link" : "/api/v1/people/8481577"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA254",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Philip Tomasino shot blocked shot by MacKenzie Weegar"
          },
          "about" : {
            "eventIdx" : 90,
            "eventId" : 254,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "15:26",
            "periodTimeRemaining" : "04:34",
            "dateTime" : "2022-02-23T00:38:32Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 79.0,
            "y" : 13.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8475462,
              "fullName" : "Radko Gudas",
              "link" : "/api/v1/people/8475462"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA201",
            "eventTypeId" : "HIT",
            "description" : "Colton Sissons hit Radko Gudas"
          },
          "about" : {
            "eventIdx" : 91,
            "eventId" : 201,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "15:46",
            "periodTimeRemaining" : "04:14",
            "dateTime" : "2022-02-23T00:38:52Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 96.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478055,
              "fullName" : "Gustav Forsling",
              "link" : "/api/v1/people/8478055"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA255",
            "eventTypeId" : "SHOT",
            "description" : "Gustav Forsling Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 92,
            "eventId" : 255,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "16:08",
            "periodTimeRemaining" : "03:52",
            "dateTime" : "2022-02-23T00:39:14Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -49.0,
            "y" : -28.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA202",
            "eventTypeId" : "HIT",
            "description" : "Sam Bennett hit Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 93,
            "eventId" : 202,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "16:10",
            "periodTimeRemaining" : "03:50",
            "dateTime" : "2022-02-23T00:39:16Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -94.0,
            "y" : -29.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8478508,
              "fullName" : "Yakov Trenin",
              "link" : "/api/v1/people/8478508"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA203",
            "eventTypeId" : "HIT",
            "description" : "Sam Bennett hit Yakov Trenin"
          },
          "about" : {
            "eventIdx" : 94,
            "eventId" : 203,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "16:34",
            "periodTimeRemaining" : "03:26",
            "dateTime" : "2022-02-23T00:39:40Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -65.0,
            "y" : 38.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479066,
              "fullName" : "Ryan Lomberg",
              "link" : "/api/v1/people/8479066"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA204",
            "eventTypeId" : "HIT",
            "description" : "Ryan Lomberg hit Eeli Tolvanen"
          },
          "about" : {
            "eventIdx" : 95,
            "eventId" : 204,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "16:57",
            "periodTimeRemaining" : "03:03",
            "dateTime" : "2022-02-23T00:40:03Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 15.0,
            "y" : -39.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477986,
              "fullName" : "Brandon Montour",
              "link" : "/api/v1/people/8477986"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8479644,
              "fullName" : "Matt Luff",
              "link" : "/api/v1/people/8479644"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA205",
            "eventTypeId" : "HIT",
            "description" : "Brandon Montour hit Matt Luff"
          },
          "about" : {
            "eventIdx" : 96,
            "eventId" : 205,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "17:01",
            "periodTimeRemaining" : "02:59",
            "dateTime" : "2022-02-23T00:40:07Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 86.0,
            "y" : 36.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA256",
            "eventTypeId" : "SHOT",
            "description" : "Eeli Tolvanen Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 97,
            "eventId" : 256,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "17:16",
            "periodTimeRemaining" : "02:44",
            "dateTime" : "2022-02-23T00:40:22Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 44.0,
            "y" : -21.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA257",
            "eventTypeId" : "SHOT",
            "description" : "Eeli Tolvanen Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 98,
            "eventId" : 257,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "17:22",
            "periodTimeRemaining" : "02:38",
            "dateTime" : "2022-02-23T00:40:28Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 40.0,
            "y" : 26.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA206",
            "eventTypeId" : "STOP",
            "description" : "Offside"
          },
          "about" : {
            "eventIdx" : 99,
            "eventId" : 206,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "17:42",
            "periodTimeRemaining" : "02:18",
            "dateTime" : "2022-02-23T00:40:49Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA258",
            "eventTypeId" : "FACEOFF",
            "description" : "Aleksander Barkov faceoff won against Ryan Johansen"
          },
          "about" : {
            "eventIdx" : 100,
            "eventId" : 258,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "17:42",
            "periodTimeRemaining" : "02:18",
            "dateTime" : "2022-02-23T00:43:19Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -20.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA207",
            "eventTypeId" : "STOP",
            "description" : "Offside"
          },
          "about" : {
            "eventIdx" : 101,
            "eventId" : 207,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "18:05",
            "periodTimeRemaining" : "01:55",
            "dateTime" : "2022-02-23T00:43:42Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA259",
            "eventTypeId" : "FACEOFF",
            "description" : "Ryan Johansen faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 102,
            "eventId" : 259,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "18:05",
            "periodTimeRemaining" : "01:55",
            "dateTime" : "2022-02-23T00:44:09Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 20.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8481577,
              "fullName" : "Philip Tomasino",
              "link" : "/api/v1/people/8481577"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA260",
            "eventTypeId" : "SHOT",
            "description" : "Philip Tomasino Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 103,
            "eventId" : 260,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "18:29",
            "periodTimeRemaining" : "01:31",
            "dateTime" : "2022-02-23T00:44:33Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 73.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA208",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Jonathan Huberdeau"
          },
          "about" : {
            "eventIdx" : 104,
            "eventId" : 208,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "18:40",
            "periodTimeRemaining" : "01:20",
            "dateTime" : "2022-02-23T00:44:44Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -77.0,
            "y" : -26.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476887,
              "fullName" : "Filip Forsberg",
              "link" : "/api/v1/people/8476887"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA261",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "MacKenzie Weegar shot blocked shot by Filip Forsberg"
          },
          "about" : {
            "eventIdx" : 105,
            "eventId" : 261,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "19:08",
            "periodTimeRemaining" : "00:52",
            "dateTime" : "2022-02-23T00:45:12Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -50.0,
            "y" : -4.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8474600,
              "fullName" : "Roman Josi",
              "link" : "/api/v1/people/8474600"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA209",
            "eventTypeId" : "HIT",
            "description" : "MacKenzie Weegar hit Roman Josi"
          },
          "about" : {
            "eventIdx" : 106,
            "eventId" : 209,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "19:11",
            "periodTimeRemaining" : "00:49",
            "dateTime" : "2022-02-23T00:45:15Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 40.0,
            "y" : -40.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476887,
              "fullName" : "Filip Forsberg",
              "link" : "/api/v1/people/8476887"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA210",
            "eventTypeId" : "HIT",
            "description" : "Filip Forsberg hit Sam Reinhart"
          },
          "about" : {
            "eventIdx" : 107,
            "eventId" : 210,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "19:22",
            "periodTimeRemaining" : "00:38",
            "dateTime" : "2022-02-23T00:45:26Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -53.0,
            "y" : 40.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA211",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Aaron Ekblad"
          },
          "about" : {
            "eventIdx" : 108,
            "eventId" : 211,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "19:37",
            "periodTimeRemaining" : "00:23",
            "dateTime" : "2022-02-23T00:45:41Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 73.0,
            "y" : 24.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA212",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Sam Reinhart"
          },
          "about" : {
            "eventIdx" : 109,
            "eventId" : 212,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "19:40",
            "periodTimeRemaining" : "00:20",
            "dateTime" : "2022-02-23T00:45:44Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 6.0,
            "y" : 41.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8471887,
              "fullName" : "Patric Hornqvist",
              "link" : "/api/v1/people/8471887"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA213",
            "eventTypeId" : "HIT",
            "description" : "Colton Sissons hit Patric Hornqvist"
          },
          "about" : {
            "eventIdx" : 110,
            "eventId" : 213,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "19:56",
            "periodTimeRemaining" : "00:04",
            "dateTime" : "2022-02-23T00:46:00Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -73.0,
            "y" : 3.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479026,
              "fullName" : "Philippe Myers",
              "link" : "/api/v1/people/8479026"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA262",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Eetu Luostarinen shot blocked shot by Philippe Myers"
          },
          "about" : {
            "eventIdx" : 111,
            "eventId" : 262,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "19:57",
            "periodTimeRemaining" : "00:03",
            "dateTime" : "2022-02-23T00:46:01Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -75.0,
            "y" : 3.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Period End",
            "eventCode" : "FLA214",
            "eventTypeId" : "PERIOD_END",
            "description" : "End of 1st Period"
          },
          "about" : {
            "eventIdx" : 112,
            "eventId" : 214,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "20:00",
            "periodTimeRemaining" : "00:00",
            "dateTime" : "2022-02-23T00:46:05Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "result" : {
            "event" : "Period Official",
            "eventCode" : "FLA217",
            "eventTypeId" : "PERIOD_OFFICIAL",
            "description" : "Period Official"
          },
          "about" : {
            "eventIdx" : 113,
            "eventId" : 217,
            "period" : 1,
            "periodType" : "REGULAR",
            "ordinalNum" : "1st",
            "periodTime" : "20:00",
            "periodTimeRemaining" : "00:00",
            "dateTime" : "2022-02-23T00:46:22Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "result" : {
            "event" : "Period Ready",
            "eventCode" : "FLA218",
            "eventTypeId" : "PERIOD_READY",
            "description" : "Period Ready"
          },
          "about" : {
            "eventIdx" : 114,
            "eventId" : 218,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "00:00",
            "periodTimeRemaining" : "20:00",
            "dateTime" : "2022-02-23T01:04:23Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "result" : {
            "event" : "Period Start",
            "eventCode" : "FLA219",
            "eventTypeId" : "PERIOD_START",
            "description" : "Period Start"
          },
          "about" : {
            "eventIdx" : 115,
            "eventId" : 219,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "00:00",
            "periodTimeRemaining" : "20:00",
            "dateTime" : "2022-02-23T01:04:49Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA263",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 116,
            "eventId" : 263,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "00:00",
            "periodTimeRemaining" : "20:00",
            "dateTime" : "2022-02-23T01:04:49Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA220",
            "eventTypeId" : "STOP",
            "description" : "Referee or Linesman"
          },
          "about" : {
            "eventIdx" : 117,
            "eventId" : 220,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "00:14",
            "periodTimeRemaining" : "19:46",
            "dateTime" : "2022-02-23T01:05:04Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA264",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 118,
            "eventId" : 264,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "00:14",
            "periodTimeRemaining" : "19:46",
            "dateTime" : "2022-02-23T01:05:33Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 20.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479661,
              "fullName" : "Tanner Jeannot",
              "link" : "/api/v1/people/8479661"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA221",
            "eventTypeId" : "HIT",
            "description" : "Tanner Jeannot hit Jonathan Huberdeau"
          },
          "about" : {
            "eventIdx" : 119,
            "eventId" : 221,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "00:37",
            "periodTimeRemaining" : "19:23",
            "dateTime" : "2022-02-23T01:05:56Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -44.0,
            "y" : 40.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA222",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 120,
            "eventId" : 222,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "01:07",
            "periodTimeRemaining" : "18:53",
            "dateTime" : "2022-02-23T01:06:26Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : -6.0,
            "y" : -29.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA265",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Aaron Ekblad Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 121,
            "eventId" : 265,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "01:32",
            "periodTimeRemaining" : "18:28",
            "dateTime" : "2022-02-23T01:06:51Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 36.0,
            "y" : -23.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA266",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Anton Lundell shot blocked shot by Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 122,
            "eventId" : 266,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "01:45",
            "periodTimeRemaining" : "18:15",
            "dateTime" : "2022-02-23T01:07:04Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 48.0,
            "y" : 4.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA223",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 123,
            "eventId" : 223,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "01:49",
            "periodTimeRemaining" : "18:11",
            "dateTime" : "2022-02-23T01:07:08Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA267",
            "eventTypeId" : "FACEOFF",
            "description" : "Sam Reinhart faceoff won against Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 124,
            "eventId" : 267,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "01:49",
            "periodTimeRemaining" : "18:11",
            "dateTime" : "2022-02-23T01:07:37Z",
            "goals" : {
              "away" : 1,
              "home" : 1
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475462,
              "fullName" : "Radko Gudas",
              "link" : "/api/v1/people/8475462"
            },
            "playerType" : "Scorer",
            "seasonTotal" : 1
          }, {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Assist",
            "seasonTotal" : 31
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Goal",
            "eventCode" : "FLA268",
            "eventTypeId" : "GOAL",
            "description" : "Radko Gudas (1) Wrist Shot, assists: Sam Reinhart (31)",
            "secondaryType" : "Wrist Shot",
            "strength" : {
              "code" : "EVEN",
              "name" : "Even"
            },
            "gameWinningGoal" : false,
            "emptyNet" : false
          },
          "about" : {
            "eventIdx" : 125,
            "eventId" : 268,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "01:54",
            "periodTimeRemaining" : "18:06",
            "dateTime" : "2022-02-23T01:07:41Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 36.0,
            "y" : 4.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA269",
            "eventTypeId" : "FACEOFF",
            "description" : "Anton Lundell faceoff won against Ryan Johansen"
          },
          "about" : {
            "eventIdx" : 126,
            "eventId" : 269,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "01:54",
            "periodTimeRemaining" : "18:06",
            "dateTime" : "2022-02-23T01:08:23Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479026,
              "fullName" : "Philippe Myers",
              "link" : "/api/v1/people/8479026"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8475462,
              "fullName" : "Radko Gudas",
              "link" : "/api/v1/people/8475462"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA224",
            "eventTypeId" : "HIT",
            "description" : "Philippe Myers hit Radko Gudas"
          },
          "about" : {
            "eventIdx" : 127,
            "eventId" : 224,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "02:01",
            "periodTimeRemaining" : "17:59",
            "dateTime" : "2022-02-23T01:08:30Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -30.0,
            "y" : 38.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479316,
              "fullName" : "Luke Kunin",
              "link" : "/api/v1/people/8479316"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8478055,
              "fullName" : "Gustav Forsling",
              "link" : "/api/v1/people/8478055"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA225",
            "eventTypeId" : "HIT",
            "description" : "Luke Kunin hit Gustav Forsling"
          },
          "about" : {
            "eventIdx" : 128,
            "eventId" : 225,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "02:03",
            "periodTimeRemaining" : "17:57",
            "dateTime" : "2022-02-23T01:08:32Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -87.0,
            "y" : 31.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA226",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 129,
            "eventId" : 226,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "02:05",
            "periodTimeRemaining" : "17:55",
            "dateTime" : "2022-02-23T01:08:35Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA270",
            "eventTypeId" : "FACEOFF",
            "description" : "Sam Reinhart faceoff won against Ryan Johansen"
          },
          "about" : {
            "eventIdx" : 130,
            "eventId" : 270,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "02:05",
            "periodTimeRemaining" : "17:55",
            "dateTime" : "2022-02-23T01:09:04Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA273",
            "eventTypeId" : "SHOT",
            "description" : "Aaron Ekblad Slap Shot saved by David Rittich",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 131,
            "eventId" : 273,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "02:40",
            "periodTimeRemaining" : "17:20",
            "dateTime" : "2022-02-23T01:09:39Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 41.0,
            "y" : -25.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8481577,
              "fullName" : "Philip Tomasino",
              "link" : "/api/v1/people/8481577"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA274",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Eetu Luostarinen shot blocked shot by Philip Tomasino"
          },
          "about" : {
            "eventIdx" : 132,
            "eventId" : 274,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "02:57",
            "periodTimeRemaining" : "17:03",
            "dateTime" : "2022-02-23T01:09:56Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 60.0,
            "y" : 13.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA275",
            "eventTypeId" : "SHOT",
            "description" : "Eetu Luostarinen Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 133,
            "eventId" : 275,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "03:06",
            "periodTimeRemaining" : "16:54",
            "dateTime" : "2022-02-23T01:10:05Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 56.0,
            "y" : 23.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479644,
              "fullName" : "Matt Luff",
              "link" : "/api/v1/people/8479644"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA276",
            "eventTypeId" : "SHOT",
            "description" : "Matt Luff Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 134,
            "eventId" : 276,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "03:30",
            "periodTimeRemaining" : "16:30",
            "dateTime" : "2022-02-23T01:10:29Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -18.0,
            "y" : 36.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA227",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 135,
            "eventId" : 227,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "03:44",
            "periodTimeRemaining" : "16:16",
            "dateTime" : "2022-02-23T01:10:43Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA277",
            "eventTypeId" : "FACEOFF",
            "description" : "Sam Bennett faceoff won against Michael McCarron"
          },
          "about" : {
            "eventIdx" : 136,
            "eventId" : 277,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "03:44",
            "periodTimeRemaining" : "16:16",
            "dateTime" : "2022-02-23T01:11:10Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8475218,
              "fullName" : "Mattias Ekholm",
              "link" : "/api/v1/people/8475218"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA228",
            "eventTypeId" : "HIT",
            "description" : "Sam Bennett hit Mattias Ekholm"
          },
          "about" : {
            "eventIdx" : 137,
            "eventId" : 228,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "04:05",
            "periodTimeRemaining" : "15:55",
            "dateTime" : "2022-02-23T01:11:31Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 76.0,
            "y" : -34.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8478055,
              "fullName" : "Gustav Forsling",
              "link" : "/api/v1/people/8478055"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA278",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Gustav Forsling shot blocked shot by Michael McCarron"
          },
          "about" : {
            "eventIdx" : 138,
            "eventId" : 278,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "04:14",
            "periodTimeRemaining" : "15:46",
            "dateTime" : "2022-02-23T01:11:40Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 71.0,
            "y" : 11.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA229",
            "eventTypeId" : "HIT",
            "description" : "Michael McCarron hit Sam Bennett"
          },
          "about" : {
            "eventIdx" : 140,
            "eventId" : 229,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "04:29",
            "periodTimeRemaining" : "15:31",
            "dateTime" : "2022-02-23T01:11:55Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 65.0,
            "y" : -39.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA231",
            "eventTypeId" : "SHOT",
            "description" : "Sam Bennett Tip-In saved by David Rittich",
            "secondaryType" : "Tip-In"
          },
          "about" : {
            "eventIdx" : 139,
            "eventId" : 231,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "04:29",
            "periodTimeRemaining" : "15:31",
            "dateTime" : "2022-02-23T01:11:55Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 82.0,
            "y" : 8.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA279",
            "eventTypeId" : "SHOT",
            "description" : "Jonathan Huberdeau Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 141,
            "eventId" : 279,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "04:35",
            "periodTimeRemaining" : "15:25",
            "dateTime" : "2022-02-23T01:12:01Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : 5.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479523,
              "fullName" : "Lucas Carlsson",
              "link" : "/api/v1/people/8479523"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA280",
            "eventTypeId" : "SHOT",
            "description" : "Lucas Carlsson Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 142,
            "eventId" : 280,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "04:42",
            "periodTimeRemaining" : "15:18",
            "dateTime" : "2022-02-23T01:12:08Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 66.0,
            "y" : 7.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA281",
            "eventTypeId" : "SHOT",
            "description" : "Sam Bennett Tip-In saved by David Rittich",
            "secondaryType" : "Tip-In"
          },
          "about" : {
            "eventIdx" : 143,
            "eventId" : 281,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "04:46",
            "periodTimeRemaining" : "15:14",
            "dateTime" : "2022-02-23T01:12:12Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 85.0,
            "y" : -7.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479644,
              "fullName" : "Matt Luff",
              "link" : "/api/v1/people/8479644"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA282",
            "eventTypeId" : "SHOT",
            "description" : "Matt Luff Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 144,
            "eventId" : 282,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "04:51",
            "periodTimeRemaining" : "15:09",
            "dateTime" : "2022-02-23T01:12:17Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -79.0,
            "y" : 4.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA283",
            "eventTypeId" : "SHOT",
            "description" : "Dante Fabbro Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 145,
            "eventId" : 283,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "04:58",
            "periodTimeRemaining" : "15:02",
            "dateTime" : "2022-02-23T01:12:24Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -77.0,
            "y" : 26.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479661,
              "fullName" : "Tanner Jeannot",
              "link" : "/api/v1/people/8479661"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA230",
            "eventTypeId" : "HIT",
            "description" : "Tanner Jeannot hit Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 146,
            "eventId" : 230,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "05:06",
            "periodTimeRemaining" : "14:54",
            "dateTime" : "2022-02-23T01:12:32Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -48.0,
            "y" : 39.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA284",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Colton Sissons Wide of Net Sergei Bobrovsky"
          },
          "about" : {
            "eventIdx" : 147,
            "eventId" : 284,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "05:06",
            "periodTimeRemaining" : "14:54",
            "dateTime" : "2022-02-23T01:12:32Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -60.0,
            "y" : -13.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479523,
              "fullName" : "Lucas Carlsson",
              "link" : "/api/v1/people/8479523"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA285",
            "eventTypeId" : "SHOT",
            "description" : "Lucas Carlsson Slap Shot saved by David Rittich",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 148,
            "eventId" : 285,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "05:11",
            "periodTimeRemaining" : "14:49",
            "dateTime" : "2022-02-23T01:12:37Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 43.0,
            "y" : 25.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479661,
              "fullName" : "Tanner Jeannot",
              "link" : "/api/v1/people/8479661"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA286",
            "eventTypeId" : "SHOT",
            "description" : "Tanner Jeannot Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 149,
            "eventId" : 286,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "05:24",
            "periodTimeRemaining" : "14:36",
            "dateTime" : "2022-02-23T01:12:50Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -79.0,
            "y" : 8.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478508,
              "fullName" : "Yakov Trenin",
              "link" : "/api/v1/people/8478508"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA287",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Yakov Trenin Wide of Net Sergei Bobrovsky"
          },
          "about" : {
            "eventIdx" : 150,
            "eventId" : 287,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "05:33",
            "periodTimeRemaining" : "14:27",
            "dateTime" : "2022-02-23T01:12:59Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -76.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA288",
            "eventTypeId" : "SHOT",
            "description" : "MacKenzie Weegar Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 151,
            "eventId" : 288,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "05:42",
            "periodTimeRemaining" : "14:18",
            "dateTime" : "2022-02-23T01:13:08Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 32.0,
            "y" : -1.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA232",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 152,
            "eventId" : 232,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "05:43",
            "periodTimeRemaining" : "14:17",
            "dateTime" : "2022-02-23T01:13:08Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA289",
            "eventTypeId" : "FACEOFF",
            "description" : "Sam Reinhart faceoff won against Ryan Johansen"
          },
          "about" : {
            "eventIdx" : 153,
            "eventId" : 289,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "05:43",
            "periodTimeRemaining" : "14:17",
            "dateTime" : "2022-02-23T01:14:08Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA290",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Sam Reinhart Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 154,
            "eventId" : 290,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "05:51",
            "periodTimeRemaining" : "14:09",
            "dateTime" : "2022-02-23T01:14:16Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 82.0,
            "y" : -5.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478975,
              "fullName" : "Mason Marchment",
              "link" : "/api/v1/people/8478975"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8478851,
              "fullName" : "Alexandre Carrier",
              "link" : "/api/v1/people/8478851"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA233",
            "eventTypeId" : "HIT",
            "description" : "Mason Marchment hit Alexandre Carrier"
          },
          "about" : {
            "eventIdx" : 155,
            "eventId" : 233,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "05:52",
            "periodTimeRemaining" : "14:08",
            "dateTime" : "2022-02-23T01:14:17Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 55.0,
            "y" : 39.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478975,
              "fullName" : "Mason Marchment",
              "link" : "/api/v1/people/8478975"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA234",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Mason Marchment"
          },
          "about" : {
            "eventIdx" : 156,
            "eventId" : 234,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "05:58",
            "periodTimeRemaining" : "14:02",
            "dateTime" : "2022-02-23T01:14:23Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 52.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479026,
              "fullName" : "Philippe Myers",
              "link" : "/api/v1/people/8479026"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8478975,
              "fullName" : "Mason Marchment",
              "link" : "/api/v1/people/8478975"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA235",
            "eventTypeId" : "HIT",
            "description" : "Philippe Myers hit Mason Marchment"
          },
          "about" : {
            "eventIdx" : 157,
            "eventId" : 235,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "06:04",
            "periodTimeRemaining" : "13:56",
            "dateTime" : "2022-02-23T01:14:29Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 97.0,
            "y" : -1.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475462,
              "fullName" : "Radko Gudas",
              "link" : "/api/v1/people/8475462"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA291",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Radko Gudas Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 158,
            "eventId" : 291,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "06:11",
            "periodTimeRemaining" : "13:49",
            "dateTime" : "2022-02-23T01:14:36Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 44.0,
            "y" : -31.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479316,
              "fullName" : "Luke Kunin",
              "link" : "/api/v1/people/8479316"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA237",
            "eventTypeId" : "HIT",
            "description" : "Luke Kunin hit Sam Reinhart"
          },
          "about" : {
            "eventIdx" : 159,
            "eventId" : 237,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "06:14",
            "periodTimeRemaining" : "13:46",
            "dateTime" : "2022-02-23T01:14:39Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 76.0,
            "y" : -21.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA236",
            "eventTypeId" : "STOP",
            "description" : "Hand Pass"
          },
          "about" : {
            "eventIdx" : 160,
            "eventId" : 236,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "06:18",
            "periodTimeRemaining" : "13:42",
            "dateTime" : "2022-02-23T01:14:44Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA292",
            "eventTypeId" : "FACEOFF",
            "description" : "Aleksander Barkov faceoff won against Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 161,
            "eventId" : 292,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "06:18",
            "periodTimeRemaining" : "13:42",
            "dateTime" : "2022-02-23T01:17:34Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 20.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA293",
            "eventTypeId" : "SHOT",
            "description" : "Aaron Ekblad Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 162,
            "eventId" : 293,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "06:39",
            "periodTimeRemaining" : "13:21",
            "dateTime" : "2022-02-23T01:17:55Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 80.0,
            "y" : -26.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA295",
            "eventTypeId" : "SHOT",
            "description" : "Dante Fabbro Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 163,
            "eventId" : 295,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "07:29",
            "periodTimeRemaining" : "12:31",
            "dateTime" : "2022-02-23T01:18:45Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -59.0,
            "y" : 24.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA294",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Eeli Tolvanen Wide of Net Sergei Bobrovsky"
          },
          "about" : {
            "eventIdx" : 164,
            "eventId" : 294,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "07:30",
            "periodTimeRemaining" : "12:30",
            "dateTime" : "2022-02-23T01:18:46Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -59.0,
            "y" : -21.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA296",
            "eventTypeId" : "SHOT",
            "description" : "Michael McCarron Backhand saved by Sergei Bobrovsky",
            "secondaryType" : "Backhand"
          },
          "about" : {
            "eventIdx" : 165,
            "eventId" : 296,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "07:31",
            "periodTimeRemaining" : "12:29",
            "dateTime" : "2022-02-23T01:18:47Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -73.0,
            "y" : 3.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA238",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 166,
            "eventId" : 238,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "07:32",
            "periodTimeRemaining" : "12:28",
            "dateTime" : "2022-02-23T01:18:48Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA243",
            "eventTypeId" : "FACEOFF",
            "description" : "Eetu Luostarinen faceoff won against Michael McCarron"
          },
          "about" : {
            "eventIdx" : 167,
            "eventId" : 243,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "07:32",
            "periodTimeRemaining" : "12:28",
            "dateTime" : "2022-02-23T01:19:19Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA298",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Eeli Tolvanen Wide of Net Sergei Bobrovsky"
          },
          "about" : {
            "eventIdx" : 168,
            "eventId" : 298,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "07:40",
            "periodTimeRemaining" : "12:20",
            "dateTime" : "2022-02-23T01:19:27Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -64.0,
            "y" : 27.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8471887,
              "fullName" : "Patric Hornqvist",
              "link" : "/api/v1/people/8471887"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA451",
            "eventTypeId" : "SHOT",
            "description" : "Patric Hornqvist Slap Shot saved by David Rittich",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 169,
            "eventId" : 451,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "08:27",
            "periodTimeRemaining" : "11:33",
            "dateTime" : "2022-02-23T01:20:14Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 49.0,
            "y" : 20.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475462,
              "fullName" : "Radko Gudas",
              "link" : "/api/v1/people/8475462"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8479661,
              "fullName" : "Tanner Jeannot",
              "link" : "/api/v1/people/8479661"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA239",
            "eventTypeId" : "HIT",
            "description" : "Radko Gudas hit Tanner Jeannot"
          },
          "about" : {
            "eventIdx" : 170,
            "eventId" : 239,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "08:43",
            "periodTimeRemaining" : "11:17",
            "dateTime" : "2022-02-23T01:20:30Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : -81.0,
            "y" : 37.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA453",
            "eventTypeId" : "SHOT",
            "description" : "Jonathan Huberdeau Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 171,
            "eventId" : 453,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "08:52",
            "periodTimeRemaining" : "11:08",
            "dateTime" : "2022-02-23T01:20:39Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 53.0,
            "y" : -2.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA454",
            "eventTypeId" : "SHOT",
            "description" : "Sam Bennett Deflected saved by David Rittich",
            "secondaryType" : "Deflected"
          },
          "about" : {
            "eventIdx" : 172,
            "eventId" : 454,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "09:15",
            "periodTimeRemaining" : "10:45",
            "dateTime" : "2022-02-23T01:21:02Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 60.0,
            "y" : -3.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA241",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Aaron Ekblad"
          },
          "about" : {
            "eventIdx" : 173,
            "eventId" : 241,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "09:38",
            "periodTimeRemaining" : "10:22",
            "dateTime" : "2022-02-23T01:21:25Z",
            "goals" : {
              "away" : 1,
              "home" : 2
            }
          },
          "coordinates" : {
            "x" : 7.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Scorer",
            "seasonTotal" : 14
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Goal",
            "eventCode" : "FLA455",
            "eventTypeId" : "GOAL",
            "description" : "Aaron Ekblad (14) Snap Shot, assists: none",
            "secondaryType" : "Snap Shot",
            "strength" : {
              "code" : "EVEN",
              "name" : "Even"
            },
            "gameWinningGoal" : false,
            "emptyNet" : false
          },
          "about" : {
            "eventIdx" : 174,
            "eventId" : 455,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "09:42",
            "periodTimeRemaining" : "10:18",
            "dateTime" : "2022-02-23T01:21:29Z",
            "goals" : {
              "away" : 1,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -25.0,
            "y" : -19.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA456",
            "eventTypeId" : "FACEOFF",
            "description" : "Mikael Granlund faceoff won against Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 175,
            "eventId" : 456,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "09:42",
            "periodTimeRemaining" : "10:18",
            "dateTime" : "2022-02-23T01:22:18Z",
            "goals" : {
              "away" : 1,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA242",
            "eventTypeId" : "STOP",
            "description" : "Offside"
          },
          "about" : {
            "eventIdx" : 176,
            "eventId" : 242,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "09:51",
            "periodTimeRemaining" : "10:09",
            "dateTime" : "2022-02-23T01:22:26Z",
            "goals" : {
              "away" : 1,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA457",
            "eventTypeId" : "FACEOFF",
            "description" : "Aleksander Barkov faceoff won against Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 177,
            "eventId" : 457,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "09:51",
            "periodTimeRemaining" : "10:09",
            "dateTime" : "2022-02-23T01:22:45Z",
            "goals" : {
              "away" : 1,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -20.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA458",
            "eventTypeId" : "SHOT",
            "description" : "Aleksander Barkov Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 178,
            "eventId" : 458,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "10:16",
            "periodTimeRemaining" : "09:44",
            "dateTime" : "2022-02-23T01:23:10Z",
            "goals" : {
              "away" : 1,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 92.0,
            "y" : 17.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478055,
              "fullName" : "Gustav Forsling",
              "link" : "/api/v1/people/8478055"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA459",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Gustav Forsling Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 179,
            "eventId" : 459,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "10:24",
            "periodTimeRemaining" : "09:36",
            "dateTime" : "2022-02-23T01:23:18Z",
            "goals" : {
              "away" : 1,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 50.0,
            "y" : 27.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA244",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 180,
            "eventId" : 244,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "10:36",
            "periodTimeRemaining" : "09:24",
            "dateTime" : "2022-02-23T01:23:30Z",
            "goals" : {
              "away" : 1,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 53.0,
            "y" : 5.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8474600,
              "fullName" : "Roman Josi",
              "link" : "/api/v1/people/8474600"
            },
            "playerType" : "Scorer",
            "seasonTotal" : 14
          }, {
            "player" : {
              "id" : 8475168,
              "fullName" : "Matt Duchene",
              "link" : "/api/v1/people/8475168"
            },
            "playerType" : "Assist",
            "seasonTotal" : 23
          }, {
            "player" : {
              "id" : 8476887,
              "fullName" : "Filip Forsberg",
              "link" : "/api/v1/people/8476887"
            },
            "playerType" : "Assist",
            "seasonTotal" : 17
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Goal",
            "eventCode" : "FLA460",
            "eventTypeId" : "GOAL",
            "description" : "Roman Josi (14) Slap Shot, assists: Matt Duchene (23), Filip Forsberg (17)",
            "secondaryType" : "Slap Shot",
            "strength" : {
              "code" : "EVEN",
              "name" : "Even"
            },
            "gameWinningGoal" : false,
            "emptyNet" : false
          },
          "about" : {
            "eventIdx" : 181,
            "eventId" : 460,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "10:44",
            "periodTimeRemaining" : "09:16",
            "dateTime" : "2022-02-23T01:23:38Z",
            "goals" : {
              "away" : 2,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -54.0,
            "y" : 33.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA461",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Eetu Luostarinen"
          },
          "about" : {
            "eventIdx" : 182,
            "eventId" : 461,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "10:44",
            "periodTimeRemaining" : "09:16",
            "dateTime" : "2022-02-23T01:24:18Z",
            "goals" : {
              "away" : 2,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA245",
            "eventTypeId" : "HIT",
            "description" : "Colton Sissons hit Eetu Luostarinen"
          },
          "about" : {
            "eventIdx" : 183,
            "eventId" : 245,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "10:54",
            "periodTimeRemaining" : "09:06",
            "dateTime" : "2022-02-23T01:24:28Z",
            "goals" : {
              "away" : 2,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -86.0,
            "y" : -35.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8474600,
              "fullName" : "Roman Josi",
              "link" : "/api/v1/people/8474600"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA462",
            "eventTypeId" : "SHOT",
            "description" : "Roman Josi Slap Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 184,
            "eventId" : 462,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "11:05",
            "periodTimeRemaining" : "08:55",
            "dateTime" : "2022-02-23T01:24:39Z",
            "goals" : {
              "away" : 2,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -59.0,
            "y" : -25.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8474600,
              "fullName" : "Roman Josi",
              "link" : "/api/v1/people/8474600"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA246",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Roman Josi"
          },
          "about" : {
            "eventIdx" : 185,
            "eventId" : 246,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "11:16",
            "periodTimeRemaining" : "08:44",
            "dateTime" : "2022-02-23T01:24:50Z",
            "goals" : {
              "away" : 2,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -36.0,
            "y" : -23.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478508,
              "fullName" : "Yakov Trenin",
              "link" : "/api/v1/people/8478508"
            },
            "playerType" : "Scorer",
            "seasonTotal" : 12
          }, {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Assist",
            "seasonTotal" : 12
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Goal",
            "eventCode" : "FLA463",
            "eventTypeId" : "GOAL",
            "description" : "Yakov Trenin (12) Backhand, assists: Dante Fabbro (12)",
            "secondaryType" : "Backhand",
            "strength" : {
              "code" : "EVEN",
              "name" : "Even"
            },
            "gameWinningGoal" : false,
            "emptyNet" : false
          },
          "about" : {
            "eventIdx" : 186,
            "eventId" : 463,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "11:21",
            "periodTimeRemaining" : "08:39",
            "dateTime" : "2022-02-23T01:24:54Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -80.0,
            "y" : 6.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA464",
            "eventTypeId" : "FACEOFF",
            "description" : "Sam Bennett faceoff won against Michael McCarron"
          },
          "about" : {
            "eventIdx" : 187,
            "eventId" : 464,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "11:21",
            "periodTimeRemaining" : "08:39",
            "dateTime" : "2022-02-23T01:25:41Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA247",
            "eventTypeId" : "HIT",
            "description" : "Eeli Tolvanen hit Sam Bennett"
          },
          "about" : {
            "eventIdx" : 188,
            "eventId" : 247,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "11:30",
            "periodTimeRemaining" : "08:30",
            "dateTime" : "2022-02-23T01:25:50Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 5.0,
            "y" : -41.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477407,
              "fullName" : "Anthony Duclair",
              "link" : "/api/v1/people/8477407"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA465",
            "eventTypeId" : "SHOT",
            "description" : "Anthony Duclair Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 189,
            "eventId" : 465,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "11:52",
            "periodTimeRemaining" : "08:08",
            "dateTime" : "2022-02-23T01:26:12Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 82.0,
            "y" : -18.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA248",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 190,
            "eventId" : 248,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "11:53",
            "periodTimeRemaining" : "08:07",
            "dateTime" : "2022-02-23T01:26:12Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA466",
            "eventTypeId" : "FACEOFF",
            "description" : "Ryan Johansen faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 191,
            "eventId" : 466,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "11:53",
            "periodTimeRemaining" : "08:07",
            "dateTime" : "2022-02-23T01:28:41Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA249",
            "eventTypeId" : "STOP",
            "description" : "Offside"
          },
          "about" : {
            "eventIdx" : 192,
            "eventId" : 249,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "12:08",
            "periodTimeRemaining" : "07:52",
            "dateTime" : "2022-02-23T01:28:56Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA467",
            "eventTypeId" : "FACEOFF",
            "description" : "Mikael Granlund faceoff won against Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 193,
            "eventId" : 467,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "12:08",
            "periodTimeRemaining" : "07:52",
            "dateTime" : "2022-02-23T01:29:27Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 20.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8475168,
              "fullName" : "Matt Duchene",
              "link" : "/api/v1/people/8475168"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA250",
            "eventTypeId" : "HIT",
            "description" : "Aaron Ekblad hit Matt Duchene"
          },
          "about" : {
            "eventIdx" : 194,
            "eventId" : 250,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "12:20",
            "periodTimeRemaining" : "07:40",
            "dateTime" : "2022-02-23T01:29:39Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -80.0,
            "y" : 1.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475218,
              "fullName" : "Mattias Ekholm",
              "link" : "/api/v1/people/8475218"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA468",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Aaron Ekblad shot blocked shot by Mattias Ekholm"
          },
          "about" : {
            "eventIdx" : 195,
            "eventId" : 468,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "12:44",
            "periodTimeRemaining" : "07:16",
            "dateTime" : "2022-02-23T01:30:03Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 70.0,
            "y" : -1.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8476887,
              "fullName" : "Filip Forsberg",
              "link" : "/api/v1/people/8476887"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA401",
            "eventTypeId" : "HIT",
            "description" : "Aleksander Barkov hit Filip Forsberg"
          },
          "about" : {
            "eventIdx" : 196,
            "eventId" : 401,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "12:47",
            "periodTimeRemaining" : "07:13",
            "dateTime" : "2022-02-23T01:30:06Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 50.0,
            "y" : 37.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA402",
            "eventTypeId" : "HIT",
            "description" : "Sam Reinhart hit Colton Sissons"
          },
          "about" : {
            "eventIdx" : 197,
            "eventId" : 402,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "13:28",
            "periodTimeRemaining" : "06:32",
            "dateTime" : "2022-02-23T01:30:47Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -64.0,
            "y" : 35.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479661,
              "fullName" : "Tanner Jeannot",
              "link" : "/api/v1/people/8479661"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA403",
            "eventTypeId" : "HIT",
            "description" : "Tanner Jeannot hit Anton Lundell"
          },
          "about" : {
            "eventIdx" : 198,
            "eventId" : 403,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "13:31",
            "periodTimeRemaining" : "06:29",
            "dateTime" : "2022-02-23T01:30:50Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -53.0,
            "y" : 41.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA469",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Colton Sissons"
          },
          "about" : {
            "eventIdx" : 199,
            "eventId" : 469,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "13:33",
            "periodTimeRemaining" : "06:27",
            "dateTime" : "2022-02-23T01:30:52Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 7.0,
            "y" : 39.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8474600,
              "fullName" : "Roman Josi",
              "link" : "/api/v1/people/8474600"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA470",
            "eventTypeId" : "SHOT",
            "description" : "Roman Josi Slap Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 200,
            "eventId" : 470,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "13:37",
            "periodTimeRemaining" : "06:23",
            "dateTime" : "2022-02-23T01:30:56Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -43.0,
            "y" : -23.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA404",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 201,
            "eventId" : 404,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "13:38",
            "periodTimeRemaining" : "06:22",
            "dateTime" : "2022-02-23T01:30:58Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA471",
            "eventTypeId" : "FACEOFF",
            "description" : "Eetu Luostarinen faceoff won against Ryan Johansen"
          },
          "about" : {
            "eventIdx" : 202,
            "eventId" : 471,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "13:38",
            "periodTimeRemaining" : "06:22",
            "dateTime" : "2022-02-23T01:31:43Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479316,
              "fullName" : "Luke Kunin",
              "link" : "/api/v1/people/8479316"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8479066,
              "fullName" : "Ryan Lomberg",
              "link" : "/api/v1/people/8479066"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA472",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Ryan Lomberg shot blocked shot by Luke Kunin"
          },
          "about" : {
            "eventIdx" : 203,
            "eventId" : 472,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:05",
            "periodTimeRemaining" : "05:55",
            "dateTime" : "2022-02-23T01:32:10Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : 15.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8474600,
              "fullName" : "Roman Josi",
              "link" : "/api/v1/people/8474600"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA405",
            "eventTypeId" : "HIT",
            "description" : "Eetu Luostarinen hit Roman Josi"
          },
          "about" : {
            "eventIdx" : 204,
            "eventId" : 405,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:08",
            "periodTimeRemaining" : "05:52",
            "dateTime" : "2022-02-23T01:32:13Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 40.0,
            "y" : -40.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA406",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 205,
            "eventId" : 406,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:10",
            "periodTimeRemaining" : "05:50",
            "dateTime" : "2022-02-23T01:32:15Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA473",
            "eventTypeId" : "FACEOFF",
            "description" : "Sam Bennett faceoff won against Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 206,
            "eventId" : 473,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:10",
            "periodTimeRemaining" : "05:50",
            "dateTime" : "2022-02-23T01:33:31Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA407",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 207,
            "eventId" : 407,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:16",
            "periodTimeRemaining" : "05:44",
            "dateTime" : "2022-02-23T01:33:37Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA474",
            "eventTypeId" : "FACEOFF",
            "description" : "Mikael Granlund faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 208,
            "eventId" : 474,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:16",
            "periodTimeRemaining" : "05:44",
            "dateTime" : "2022-02-23T01:34:02Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475168,
              "fullName" : "Matt Duchene",
              "link" : "/api/v1/people/8475168"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA408",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Matt Duchene"
          },
          "about" : {
            "eventIdx" : 209,
            "eventId" : 408,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:25",
            "periodTimeRemaining" : "05:35",
            "dateTime" : "2022-02-23T01:34:11Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -95.0,
            "y" : 8.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA409",
            "eventTypeId" : "HIT",
            "description" : "Mikael Granlund hit MacKenzie Weegar"
          },
          "about" : {
            "eventIdx" : 210,
            "eventId" : 409,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:29",
            "periodTimeRemaining" : "05:31",
            "dateTime" : "2022-02-23T01:34:15Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -98.0,
            "y" : 15.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "PenaltyOn"
          }, {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "DrewBy"
          } ],
          "result" : {
            "event" : "Penalty",
            "eventCode" : "FLA410",
            "eventTypeId" : "PENALTY",
            "description" : "MacKenzie Weegar Roughing against Mikael Granlund",
            "secondaryType" : "Roughing",
            "penaltySeverity" : "Minor",
            "penaltyMinutes" : 2
          },
          "about" : {
            "eventIdx" : 211,
            "eventId" : 410,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:30",
            "periodTimeRemaining" : "05:30",
            "dateTime" : "2022-02-23T01:34:16Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -77.0,
            "y" : 38.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA413",
            "eventTypeId" : "STOP",
            "description" : "TV timeout"
          },
          "about" : {
            "eventIdx" : 212,
            "eventId" : 413,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:30",
            "periodTimeRemaining" : "05:30",
            "dateTime" : "2022-02-23T01:34:16Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA477",
            "eventTypeId" : "FACEOFF",
            "description" : "Aleksander Barkov faceoff won against Ryan Johansen"
          },
          "about" : {
            "eventIdx" : 213,
            "eventId" : 477,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:30",
            "periodTimeRemaining" : "05:30",
            "dateTime" : "2022-02-23T01:36:46Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA414",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 214,
            "eventId" : 414,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:41",
            "periodTimeRemaining" : "05:19",
            "dateTime" : "2022-02-23T01:36:57Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -43.0,
            "y" : -5.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA478",
            "eventTypeId" : "SHOT",
            "description" : "Aleksander Barkov Backhand saved by David Rittich",
            "secondaryType" : "Backhand"
          },
          "about" : {
            "eventIdx" : 215,
            "eventId" : 478,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "14:41",
            "periodTimeRemaining" : "05:19",
            "dateTime" : "2022-02-23T01:36:57Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 82.0,
            "y" : -7.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA415",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 217,
            "eventId" : 415,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "15:06",
            "periodTimeRemaining" : "04:54",
            "dateTime" : "2022-02-23T01:37:22Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA479",
            "eventTypeId" : "SHOT",
            "description" : "Ryan Johansen Tip-In saved by Sergei Bobrovsky",
            "secondaryType" : "Tip-In"
          },
          "about" : {
            "eventIdx" : 216,
            "eventId" : 479,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "15:06",
            "periodTimeRemaining" : "04:54",
            "dateTime" : "2022-02-23T01:37:22Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -81.0,
            "y" : -5.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA480",
            "eventTypeId" : "FACEOFF",
            "description" : "Eetu Luostarinen faceoff won against Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 218,
            "eventId" : 480,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "15:06",
            "periodTimeRemaining" : "04:54",
            "dateTime" : "2022-02-23T01:37:57Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA481",
            "eventTypeId" : "SHOT",
            "description" : "Mikael Granlund Tip-In saved by Sergei Bobrovsky",
            "secondaryType" : "Tip-In"
          },
          "about" : {
            "eventIdx" : 219,
            "eventId" : 481,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "15:48",
            "periodTimeRemaining" : "04:12",
            "dateTime" : "2022-02-23T01:38:39Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -79.0,
            "y" : 1.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8481577,
              "fullName" : "Philip Tomasino",
              "link" : "/api/v1/people/8481577"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA416",
            "eventTypeId" : "HIT",
            "description" : "Aaron Ekblad hit Philip Tomasino"
          },
          "about" : {
            "eventIdx" : 220,
            "eventId" : 416,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "16:34",
            "periodTimeRemaining" : "03:26",
            "dateTime" : "2022-02-23T01:39:25Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -64.0,
            "y" : -40.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8481577,
              "fullName" : "Philip Tomasino",
              "link" : "/api/v1/people/8481577"
            },
            "playerType" : "PenaltyOn"
          } ],
          "result" : {
            "event" : "Penalty",
            "eventCode" : "FLA418",
            "eventTypeId" : "PENALTY",
            "description" : "Too many men/ice served by Philip Tomasino",
            "secondaryType" : "Too many men on the ice",
            "penaltySeverity" : "Bench Minor",
            "penaltyMinutes" : 2
          },
          "about" : {
            "eventIdx" : 221,
            "eventId" : 418,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "16:46",
            "periodTimeRemaining" : "03:14",
            "dateTime" : "2022-02-23T01:39:37Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -14.0,
            "y" : 39.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA482",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Sam Reinhart"
          },
          "about" : {
            "eventIdx" : 222,
            "eventId" : 482,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "16:46",
            "periodTimeRemaining" : "03:14",
            "dateTime" : "2022-02-23T01:40:46Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA421",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 224,
            "eventId" : 421,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "17:11",
            "periodTimeRemaining" : "02:49",
            "dateTime" : "2022-02-23T01:41:11Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA483",
            "eventTypeId" : "SHOT",
            "description" : "Sam Reinhart Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 223,
            "eventId" : 483,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "17:11",
            "periodTimeRemaining" : "02:49",
            "dateTime" : "2022-02-23T01:41:11Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 77.0,
            "y" : 1.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA484",
            "eventTypeId" : "FACEOFF",
            "description" : "Michael McCarron faceoff won against Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 225,
            "eventId" : 484,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "17:11",
            "periodTimeRemaining" : "02:49",
            "dateTime" : "2022-02-23T01:41:38Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA485",
            "eventTypeId" : "SHOT",
            "description" : "Sam Reinhart Tip-In saved by David Rittich",
            "secondaryType" : "Tip-In"
          },
          "about" : {
            "eventIdx" : 226,
            "eventId" : 485,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "17:37",
            "periodTimeRemaining" : "02:23",
            "dateTime" : "2022-02-23T01:42:04Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 79.0,
            "y" : -2.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA486",
            "eventTypeId" : "SHOT",
            "description" : "Aleksander Barkov Tip-In saved by David Rittich",
            "secondaryType" : "Tip-In"
          },
          "about" : {
            "eventIdx" : 227,
            "eventId" : 486,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "17:38",
            "periodTimeRemaining" : "02:22",
            "dateTime" : "2022-02-23T01:42:05Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 77.0,
            "y" : 2.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA422",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 228,
            "eventId" : 422,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "17:40",
            "periodTimeRemaining" : "02:20",
            "dateTime" : "2022-02-23T01:42:08Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA487",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Sam Reinhart"
          },
          "about" : {
            "eventIdx" : 229,
            "eventId" : 487,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "17:40",
            "periodTimeRemaining" : "02:20",
            "dateTime" : "2022-02-23T01:42:57Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA488",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Aleksander Barkov Over Net David Rittich"
          },
          "about" : {
            "eventIdx" : 230,
            "eventId" : 488,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "18:04",
            "periodTimeRemaining" : "01:56",
            "dateTime" : "2022-02-23T01:43:21Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 64.0,
            "y" : -17.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA423",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Jonathan Huberdeau"
          },
          "about" : {
            "eventIdx" : 231,
            "eventId" : 423,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "18:11",
            "periodTimeRemaining" : "01:49",
            "dateTime" : "2022-02-23T01:43:28Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 81.0,
            "y" : 21.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8471887,
              "fullName" : "Patric Hornqvist",
              "link" : "/api/v1/people/8471887"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA424",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Patric Hornqvist"
          },
          "about" : {
            "eventIdx" : 232,
            "eventId" : 424,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "18:56",
            "periodTimeRemaining" : "01:04",
            "dateTime" : "2022-02-23T01:44:13Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -44.0,
            "y" : -20.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8471887,
              "fullName" : "Patric Hornqvist",
              "link" : "/api/v1/people/8471887"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA425",
            "eventTypeId" : "HIT",
            "description" : "Michael McCarron hit Patric Hornqvist"
          },
          "about" : {
            "eventIdx" : 233,
            "eventId" : 425,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "18:57",
            "periodTimeRemaining" : "01:03",
            "dateTime" : "2022-02-23T01:44:14Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -44.0,
            "y" : -7.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475168,
              "fullName" : "Matt Duchene",
              "link" : "/api/v1/people/8475168"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA426",
            "eventTypeId" : "HIT",
            "description" : "Matt Duchene hit Sam Bennett"
          },
          "about" : {
            "eventIdx" : 234,
            "eventId" : 426,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "19:10",
            "periodTimeRemaining" : "00:50",
            "dateTime" : "2022-02-23T01:44:27Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 60.0,
            "y" : 2.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA489",
            "eventTypeId" : "SHOT",
            "description" : "Mikael Granlund Tip-In saved by Sergei Bobrovsky",
            "secondaryType" : "Tip-In"
          },
          "about" : {
            "eventIdx" : 235,
            "eventId" : 489,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "19:20",
            "periodTimeRemaining" : "00:40",
            "dateTime" : "2022-02-23T01:44:37Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -35.0,
            "y" : -10.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA427",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 236,
            "eventId" : 427,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "19:25",
            "periodTimeRemaining" : "00:35",
            "dateTime" : "2022-02-23T01:44:43Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA490",
            "eventTypeId" : "FACEOFF",
            "description" : "Eetu Luostarinen faceoff won against Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 237,
            "eventId" : 490,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "19:25",
            "periodTimeRemaining" : "00:35",
            "dateTime" : "2022-02-23T01:45:14Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478055,
              "fullName" : "Gustav Forsling",
              "link" : "/api/v1/people/8478055"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA491",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Gustav Forsling Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 238,
            "eventId" : 491,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "19:36",
            "periodTimeRemaining" : "00:24",
            "dateTime" : "2022-02-23T01:45:24Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 75.0,
            "y" : 33.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475218,
              "fullName" : "Mattias Ekholm",
              "link" : "/api/v1/people/8475218"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA428",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Mattias Ekholm"
          },
          "about" : {
            "eventIdx" : 239,
            "eventId" : 428,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "19:49",
            "periodTimeRemaining" : "00:11",
            "dateTime" : "2022-02-23T01:45:37Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 62.0,
            "y" : 2.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475462,
              "fullName" : "Radko Gudas",
              "link" : "/api/v1/people/8475462"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA492",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Radko Gudas Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 240,
            "eventId" : 492,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "19:59",
            "periodTimeRemaining" : "00:01",
            "dateTime" : "2022-02-23T01:45:47Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -10.0,
            "y" : -32.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Period End",
            "eventCode" : "FLA429",
            "eventTypeId" : "PERIOD_END",
            "description" : "End of 2nd Period"
          },
          "about" : {
            "eventIdx" : 241,
            "eventId" : 429,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "20:00",
            "periodTimeRemaining" : "00:00",
            "dateTime" : "2022-02-23T01:45:48Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "result" : {
            "event" : "Period Official",
            "eventCode" : "FLA432",
            "eventTypeId" : "PERIOD_OFFICIAL",
            "description" : "Period Official"
          },
          "about" : {
            "eventIdx" : 242,
            "eventId" : 432,
            "period" : 2,
            "periodType" : "REGULAR",
            "ordinalNum" : "2nd",
            "periodTime" : "20:00",
            "periodTimeRemaining" : "00:00",
            "dateTime" : "2022-02-23T02:03:18Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "result" : {
            "event" : "Period Ready",
            "eventCode" : "FLA433",
            "eventTypeId" : "PERIOD_READY",
            "description" : "Period Ready"
          },
          "about" : {
            "eventIdx" : 243,
            "eventId" : 433,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "00:00",
            "periodTimeRemaining" : "20:00",
            "dateTime" : "2022-02-23T02:03:20Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "result" : {
            "event" : "Period Start",
            "eventCode" : "FLA493",
            "eventTypeId" : "PERIOD_START",
            "description" : "Period Start"
          },
          "about" : {
            "eventIdx" : 244,
            "eventId" : 493,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "00:00",
            "periodTimeRemaining" : "20:00",
            "dateTime" : "2022-02-23T02:04:47Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA494",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 245,
            "eventId" : 494,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "00:00",
            "periodTimeRemaining" : "20:00",
            "dateTime" : "2022-02-23T02:04:47Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA434",
            "eventTypeId" : "HIT",
            "description" : "Jonathan Huberdeau hit Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 246,
            "eventId" : 434,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "00:06",
            "periodTimeRemaining" : "19:54",
            "dateTime" : "2022-02-23T02:04:53Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 12.0,
            "y" : -42.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA495",
            "eventTypeId" : "SHOT",
            "description" : "Sam Bennett Tip-In saved by David Rittich",
            "secondaryType" : "Tip-In"
          },
          "about" : {
            "eventIdx" : 247,
            "eventId" : 495,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "00:23",
            "periodTimeRemaining" : "19:37",
            "dateTime" : "2022-02-23T02:05:11Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -81.0,
            "y" : -2.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA435",
            "eventTypeId" : "STOP",
            "description" : "Offside"
          },
          "about" : {
            "eventIdx" : 248,
            "eventId" : 435,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "00:27",
            "periodTimeRemaining" : "19:33",
            "dateTime" : "2022-02-23T02:05:15Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA496",
            "eventTypeId" : "FACEOFF",
            "description" : "Aleksander Barkov faceoff won against Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 249,
            "eventId" : 496,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "00:27",
            "periodTimeRemaining" : "19:33",
            "dateTime" : "2022-02-23T02:05:37Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 20.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476887,
              "fullName" : "Filip Forsberg",
              "link" : "/api/v1/people/8476887"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA497",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Filip Forsberg Wide of Net Sergei Bobrovsky"
          },
          "about" : {
            "eventIdx" : 250,
            "eventId" : 497,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "00:45",
            "periodTimeRemaining" : "19:15",
            "dateTime" : "2022-02-23T02:05:55Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 90.0,
            "y" : 16.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476887,
              "fullName" : "Filip Forsberg",
              "link" : "/api/v1/people/8476887"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA436",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Filip Forsberg"
          },
          "about" : {
            "eventIdx" : 251,
            "eventId" : 436,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "00:49",
            "periodTimeRemaining" : "19:11",
            "dateTime" : "2022-02-23T02:05:59Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -43.0,
            "y" : 28.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8476887,
              "fullName" : "Filip Forsberg",
              "link" : "/api/v1/people/8476887"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA437",
            "eventTypeId" : "HIT",
            "description" : "MacKenzie Weegar hit Filip Forsberg"
          },
          "about" : {
            "eventIdx" : 252,
            "eventId" : 437,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "00:54",
            "periodTimeRemaining" : "19:06",
            "dateTime" : "2022-02-23T02:06:04Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 35.0,
            "y" : 38.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8478851,
              "fullName" : "Alexandre Carrier",
              "link" : "/api/v1/people/8478851"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA438",
            "eventTypeId" : "HIT",
            "description" : "Sam Reinhart hit Alexandre Carrier"
          },
          "about" : {
            "eventIdx" : 253,
            "eventId" : 438,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "01:11",
            "periodTimeRemaining" : "18:49",
            "dateTime" : "2022-02-23T02:06:21Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -13.0,
            "y" : 4.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8471887,
              "fullName" : "Patric Hornqvist",
              "link" : "/api/v1/people/8471887"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA498",
            "eventTypeId" : "SHOT",
            "description" : "Patric Hornqvist Backhand saved by David Rittich",
            "secondaryType" : "Backhand"
          },
          "about" : {
            "eventIdx" : 254,
            "eventId" : 498,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "01:46",
            "periodTimeRemaining" : "18:14",
            "dateTime" : "2022-02-23T02:06:56Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -81.0,
            "y" : -7.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479523,
              "fullName" : "Lucas Carlsson",
              "link" : "/api/v1/people/8479523"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA499",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Michael McCarron shot blocked shot by Lucas Carlsson"
          },
          "about" : {
            "eventIdx" : 255,
            "eventId" : 499,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "02:08",
            "periodTimeRemaining" : "17:52",
            "dateTime" : "2022-02-23T02:07:18Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 47.0,
            "y" : -5.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA439",
            "eventTypeId" : "STOP",
            "description" : "Puck in Netting"
          },
          "about" : {
            "eventIdx" : 256,
            "eventId" : 439,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "02:09",
            "periodTimeRemaining" : "17:51",
            "dateTime" : "2022-02-23T02:07:19Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA500",
            "eventTypeId" : "FACEOFF",
            "description" : "Michael McCarron faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 257,
            "eventId" : 500,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "02:09",
            "periodTimeRemaining" : "17:51",
            "dateTime" : "2022-02-23T02:07:49Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8479523,
              "fullName" : "Lucas Carlsson",
              "link" : "/api/v1/people/8479523"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA440",
            "eventTypeId" : "HIT",
            "description" : "Michael McCarron hit Lucas Carlsson"
          },
          "about" : {
            "eventIdx" : 258,
            "eventId" : 440,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "02:19",
            "periodTimeRemaining" : "17:41",
            "dateTime" : "2022-02-23T02:07:59Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 82.0,
            "y" : -36.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA441",
            "eventTypeId" : "HIT",
            "description" : "Eeli Tolvanen hit Sam Bennett"
          },
          "about" : {
            "eventIdx" : 259,
            "eventId" : 441,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "02:23",
            "periodTimeRemaining" : "17:37",
            "dateTime" : "2022-02-23T02:08:03Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 94.0,
            "y" : -24.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA442",
            "eventTypeId" : "HIT",
            "description" : "Sam Bennett hit Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 260,
            "eventId" : 442,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "02:37",
            "periodTimeRemaining" : "17:23",
            "dateTime" : "2022-02-23T02:08:17Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -99.0,
            "y" : 4.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8476988,
              "fullName" : "Matt Benning",
              "link" : "/api/v1/people/8476988"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA443",
            "eventTypeId" : "HIT",
            "description" : "Sam Bennett hit Matt Benning"
          },
          "about" : {
            "eventIdx" : 261,
            "eventId" : 443,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "02:49",
            "periodTimeRemaining" : "17:11",
            "dateTime" : "2022-02-23T02:08:29Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -98.0,
            "y" : -6.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475218,
              "fullName" : "Mattias Ekholm",
              "link" : "/api/v1/people/8475218"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8479553,
              "fullName" : "Maxim Mamin",
              "link" : "/api/v1/people/8479553"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA444",
            "eventTypeId" : "HIT",
            "description" : "Mattias Ekholm hit Maxim Mamin"
          },
          "about" : {
            "eventIdx" : 262,
            "eventId" : 444,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "03:20",
            "periodTimeRemaining" : "16:40",
            "dateTime" : "2022-02-23T02:09:00Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 12.0,
            "y" : 33.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479026,
              "fullName" : "Philippe Myers",
              "link" : "/api/v1/people/8479026"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477409,
              "fullName" : "Carter Verhaeghe",
              "link" : "/api/v1/people/8477409"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA445",
            "eventTypeId" : "HIT",
            "description" : "Philippe Myers hit Carter Verhaeghe"
          },
          "about" : {
            "eventIdx" : 263,
            "eventId" : 445,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "03:50",
            "periodTimeRemaining" : "16:10",
            "dateTime" : "2022-02-23T02:09:30Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -71.0,
            "y" : -39.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA446",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Anton Lundell"
          },
          "about" : {
            "eventIdx" : 264,
            "eventId" : 446,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "04:08",
            "periodTimeRemaining" : "15:52",
            "dateTime" : "2022-02-23T02:09:48Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 8.0,
            "y" : -37.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8477986,
              "fullName" : "Brandon Montour",
              "link" : "/api/v1/people/8477986"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA602",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Brandon Montour shot blocked shot by Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 265,
            "eventId" : 602,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "04:24",
            "periodTimeRemaining" : "15:36",
            "dateTime" : "2022-02-23T02:10:04Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -68.0,
            "y" : 7.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA447",
            "eventTypeId" : "STOP",
            "description" : "High Stick"
          },
          "about" : {
            "eventIdx" : 266,
            "eventId" : 447,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "04:33",
            "periodTimeRemaining" : "15:27",
            "dateTime" : "2022-02-23T02:10:14Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA603",
            "eventTypeId" : "FACEOFF",
            "description" : "Ryan Johansen faceoff won against Eetu Luostarinen"
          },
          "about" : {
            "eventIdx" : 267,
            "eventId" : 603,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "04:33",
            "periodTimeRemaining" : "15:27",
            "dateTime" : "2022-02-23T02:10:47Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -20.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8479316,
              "fullName" : "Luke Kunin",
              "link" : "/api/v1/people/8479316"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA448",
            "eventTypeId" : "HIT",
            "description" : "MacKenzie Weegar hit Luke Kunin"
          },
          "about" : {
            "eventIdx" : 268,
            "eventId" : 448,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "05:02",
            "periodTimeRemaining" : "14:58",
            "dateTime" : "2022-02-23T02:11:16Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -35.0,
            "y" : -38.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480185,
              "fullName" : "Eetu Luostarinen",
              "link" : "/api/v1/people/8480185"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA604",
            "eventTypeId" : "SHOT",
            "description" : "Eetu Luostarinen Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 269,
            "eventId" : 604,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "05:07",
            "periodTimeRemaining" : "14:53",
            "dateTime" : "2022-02-23T02:11:21Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 6.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479644,
              "fullName" : "Matt Luff",
              "link" : "/api/v1/people/8479644"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8478055,
              "fullName" : "Gustav Forsling",
              "link" : "/api/v1/people/8478055"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA449",
            "eventTypeId" : "HIT",
            "description" : "Matt Luff hit Gustav Forsling"
          },
          "about" : {
            "eventIdx" : 270,
            "eventId" : 449,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "05:30",
            "periodTimeRemaining" : "14:30",
            "dateTime" : "2022-02-23T02:11:44Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 93.0,
            "y" : -20.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA605",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Eeli Tolvanen shot blocked shot by Aaron Ekblad"
          },
          "about" : {
            "eventIdx" : 271,
            "eventId" : 605,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "05:43",
            "periodTimeRemaining" : "14:17",
            "dateTime" : "2022-02-23T02:11:57Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 53.0,
            "y" : -9.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479644,
              "fullName" : "Matt Luff",
              "link" : "/api/v1/people/8479644"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA606",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Matt Luff Wide of Net Sergei Bobrovsky"
          },
          "about" : {
            "eventIdx" : 272,
            "eventId" : 606,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "05:55",
            "periodTimeRemaining" : "14:05",
            "dateTime" : "2022-02-23T02:12:09Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 19.0,
            "y" : 11.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA450",
            "eventTypeId" : "HIT",
            "description" : "Eeli Tolvanen hit Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 273,
            "eventId" : 450,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "06:00",
            "periodTimeRemaining" : "14:00",
            "dateTime" : "2022-02-23T02:12:14Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 92.0,
            "y" : 33.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475218,
              "fullName" : "Mattias Ekholm",
              "link" : "/api/v1/people/8475218"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA651",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Mattias Ekholm"
          },
          "about" : {
            "eventIdx" : 274,
            "eventId" : 651,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "06:48",
            "periodTimeRemaining" : "13:12",
            "dateTime" : "2022-02-23T02:13:02Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -86.0,
            "y" : 9.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478851,
              "fullName" : "Alexandre Carrier",
              "link" : "/api/v1/people/8478851"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA652",
            "eventTypeId" : "HIT",
            "description" : "Alexandre Carrier hit Sam Reinhart"
          },
          "about" : {
            "eventIdx" : 275,
            "eventId" : 652,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "06:54",
            "periodTimeRemaining" : "13:06",
            "dateTime" : "2022-02-23T02:13:08Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -92.0,
            "y" : 24.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA655",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Sam Reinhart"
          },
          "about" : {
            "eventIdx" : 276,
            "eventId" : 655,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "06:55",
            "periodTimeRemaining" : "13:05",
            "dateTime" : "2022-02-23T02:13:09Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -81.0,
            "y" : -1.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA653",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 277,
            "eventId" : 653,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "07:00",
            "periodTimeRemaining" : "13:00",
            "dateTime" : "2022-02-23T02:13:14Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA607",
            "eventTypeId" : "FACEOFF",
            "description" : "Mikael Granlund faceoff won against Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 278,
            "eventId" : 607,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "07:00",
            "periodTimeRemaining" : "13:00",
            "dateTime" : "2022-02-23T02:13:41Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA608",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Aleksander Barkov shot blocked shot by Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 279,
            "eventId" : 608,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "07:20",
            "periodTimeRemaining" : "12:40",
            "dateTime" : "2022-02-23T02:14:01Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -57.0,
            "y" : -15.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA609",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Aaron Ekblad shot blocked shot by Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 280,
            "eventId" : 609,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "07:35",
            "periodTimeRemaining" : "12:25",
            "dateTime" : "2022-02-23T02:14:16Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -65.0,
            "y" : -7.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA654",
            "eventTypeId" : "STOP",
            "description" : "Puck Frozen"
          },
          "about" : {
            "eventIdx" : 281,
            "eventId" : 654,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "07:35",
            "periodTimeRemaining" : "12:25",
            "dateTime" : "2022-02-23T02:14:16Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA610",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 282,
            "eventId" : 610,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "07:35",
            "periodTimeRemaining" : "12:25",
            "dateTime" : "2022-02-23T02:16:49Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA656",
            "eventTypeId" : "HIT",
            "description" : "Sam Bennett hit Colton Sissons"
          },
          "about" : {
            "eventIdx" : 283,
            "eventId" : 656,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "07:44",
            "periodTimeRemaining" : "12:16",
            "dateTime" : "2022-02-23T02:16:58Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : 4.0,
            "y" : -39.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475218,
              "fullName" : "Mattias Ekholm",
              "link" : "/api/v1/people/8475218"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA611",
            "eventTypeId" : "SHOT",
            "description" : "Mattias Ekholm Wrist Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 284,
            "eventId" : 611,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "07:57",
            "periodTimeRemaining" : "12:03",
            "dateTime" : "2022-02-23T02:17:11Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -62.0,
            "y" : -15.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA612",
            "eventTypeId" : "SHOT",
            "description" : "Sam Bennett Slap Shot saved by David Rittich",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 285,
            "eventId" : 612,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "08:07",
            "periodTimeRemaining" : "11:53",
            "dateTime" : "2022-02-23T02:17:21Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -51.0,
            "y" : -23.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA613",
            "eventTypeId" : "SHOT",
            "description" : "Jonathan Huberdeau Backhand saved by David Rittich",
            "secondaryType" : "Backhand"
          },
          "about" : {
            "eventIdx" : 286,
            "eventId" : 613,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "08:11",
            "periodTimeRemaining" : "11:49",
            "dateTime" : "2022-02-23T02:17:25Z",
            "goals" : {
              "away" : 3,
              "home" : 3
            }
          },
          "coordinates" : {
            "x" : -74.0,
            "y" : 9.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Scorer",
            "seasonTotal" : 22
          }, {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Assist",
            "seasonTotal" : 55
          }, {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "Assist",
            "seasonTotal" : 26
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Goal",
            "eventCode" : "FLA614",
            "eventTypeId" : "GOAL",
            "description" : "Sam Bennett (22) Backhand, assists: Jonathan Huberdeau (55), MacKenzie Weegar (26)",
            "secondaryType" : "Backhand",
            "strength" : {
              "code" : "EVEN",
              "name" : "Even"
            },
            "gameWinningGoal" : false,
            "emptyNet" : false
          },
          "about" : {
            "eventIdx" : 287,
            "eventId" : 614,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "08:11",
            "periodTimeRemaining" : "11:49",
            "dateTime" : "2022-02-23T02:17:25Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -83.0,
            "y" : -5.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA615",
            "eventTypeId" : "FACEOFF",
            "description" : "Anton Lundell faceoff won against Ryan Johansen"
          },
          "about" : {
            "eventIdx" : 288,
            "eventId" : 615,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "08:11",
            "periodTimeRemaining" : "11:49",
            "dateTime" : "2022-02-23T02:19:27Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479316,
              "fullName" : "Luke Kunin",
              "link" : "/api/v1/people/8479316"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA616",
            "eventTypeId" : "SHOT",
            "description" : "Luke Kunin Backhand saved by Sergei Bobrovsky",
            "secondaryType" : "Backhand"
          },
          "about" : {
            "eventIdx" : 289,
            "eventId" : 616,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "08:25",
            "periodTimeRemaining" : "11:35",
            "dateTime" : "2022-02-23T02:19:42Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 76.0,
            "y" : 1.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Official Challenge",
            "eventCode" : "FLA657",
            "eventTypeId" : "CHALLENGE",
            "description" : "Coach's Challenge"
          },
          "about" : {
            "eventIdx" : 291,
            "eventId" : 657,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "08:25",
            "periodTimeRemaining" : "11:35",
            "dateTime" : "2022-02-23T02:19:42Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : { },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA658",
            "eventTypeId" : "STOP",
            "description" : "Challenge Home: goalie interference"
          },
          "about" : {
            "eventIdx" : 290,
            "eventId" : 658,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "08:25",
            "periodTimeRemaining" : "11:35",
            "dateTime" : "2022-02-23T02:19:42Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA618",
            "eventTypeId" : "FACEOFF",
            "description" : "Aleksander Barkov faceoff won against Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 292,
            "eventId" : 618,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "08:25",
            "periodTimeRemaining" : "11:35",
            "dateTime" : "2022-02-23T02:23:23Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 20.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA619",
            "eventTypeId" : "SHOT",
            "description" : "MacKenzie Weegar Slap Shot saved by David Rittich",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 294,
            "eventId" : 619,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "08:37",
            "periodTimeRemaining" : "11:23",
            "dateTime" : "2022-02-23T02:23:35Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -51.0,
            "y" : -15.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477409,
              "fullName" : "Carter Verhaeghe",
              "link" : "/api/v1/people/8477409"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA622",
            "eventTypeId" : "SHOT",
            "description" : "Carter Verhaeghe Slap Shot saved by David Rittich",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 293,
            "eventId" : 622,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "08:37",
            "periodTimeRemaining" : "11:23",
            "dateTime" : "2022-02-23T02:23:35Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 19.0,
            "y" : 7.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477986,
              "fullName" : "Brandon Montour",
              "link" : "/api/v1/people/8477986"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA620",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Brandon Montour Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 295,
            "eventId" : 620,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "09:13",
            "periodTimeRemaining" : "10:47",
            "dateTime" : "2022-02-23T02:24:11Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -39.0,
            "y" : 25.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA659",
            "eventTypeId" : "STOP",
            "description" : "Puck in Netting"
          },
          "about" : {
            "eventIdx" : 296,
            "eventId" : 659,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "09:13",
            "periodTimeRemaining" : "10:47",
            "dateTime" : "2022-02-23T02:24:11Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA621",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 297,
            "eventId" : 621,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "09:13",
            "periodTimeRemaining" : "10:47",
            "dateTime" : "2022-02-23T02:24:42Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478851,
              "fullName" : "Alexandre Carrier",
              "link" : "/api/v1/people/8478851"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA623",
            "eventTypeId" : "SHOT",
            "description" : "Alexandre Carrier Slap Shot saved by Sergei Bobrovsky",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 298,
            "eventId" : 623,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "09:50",
            "periodTimeRemaining" : "10:10",
            "dateTime" : "2022-02-23T02:25:19Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 40.0,
            "y" : 31.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478851,
              "fullName" : "Alexandre Carrier",
              "link" : "/api/v1/people/8478851"
            },
            "playerType" : "PenaltyOn"
          }, {
            "player" : {
              "id" : 8477407,
              "fullName" : "Anthony Duclair",
              "link" : "/api/v1/people/8477407"
            },
            "playerType" : "DrewBy"
          } ],
          "result" : {
            "event" : "Penalty",
            "eventCode" : "FLA660",
            "eventTypeId" : "PENALTY",
            "description" : "Alexandre Carrier Cross checking against Anthony Duclair",
            "secondaryType" : "Cross checking",
            "penaltySeverity" : "Minor",
            "penaltyMinutes" : 2
          },
          "about" : {
            "eventIdx" : 299,
            "eventId" : 660,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "09:51",
            "periodTimeRemaining" : "10:09",
            "dateTime" : "2022-02-23T02:25:21Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 22.0,
            "y" : 38.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA624",
            "eventTypeId" : "FACEOFF",
            "description" : "Sam Reinhart faceoff won against Michael McCarron"
          },
          "about" : {
            "eventIdx" : 300,
            "eventId" : 624,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "09:51",
            "periodTimeRemaining" : "10:09",
            "dateTime" : "2022-02-23T02:26:15Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA663",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Aaron Ekblad"
          },
          "about" : {
            "eventIdx" : 301,
            "eventId" : 663,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "10:09",
            "periodTimeRemaining" : "09:51",
            "dateTime" : "2022-02-23T02:26:33Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -31.0,
            "y" : -17.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA625",
            "eventTypeId" : "SHOT",
            "description" : "Jonathan Huberdeau Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 302,
            "eventId" : 625,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "10:13",
            "periodTimeRemaining" : "09:47",
            "dateTime" : "2022-02-23T02:26:37Z",
            "goals" : {
              "away" : 3,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -42.0,
            "y" : -12.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479661,
              "fullName" : "Tanner Jeannot",
              "link" : "/api/v1/people/8479661"
            },
            "playerType" : "Scorer",
            "seasonTotal" : 16
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Goal",
            "eventCode" : "FLA626",
            "eventTypeId" : "GOAL",
            "description" : "Tanner Jeannot (16) Backhand, assists: none",
            "secondaryType" : "Backhand",
            "strength" : {
              "code" : "SHG",
              "name" : "Short Handed"
            },
            "gameWinningGoal" : false,
            "emptyNet" : false
          },
          "about" : {
            "eventIdx" : 303,
            "eventId" : 626,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "10:41",
            "periodTimeRemaining" : "09:19",
            "dateTime" : "2022-02-23T02:27:04Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 81.0,
            "y" : -7.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA627",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Anton Lundell"
          },
          "about" : {
            "eventIdx" : 304,
            "eventId" : 627,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "10:41",
            "periodTimeRemaining" : "09:19",
            "dateTime" : "2022-02-23T02:27:46Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8477986,
              "fullName" : "Brandon Montour",
              "link" : "/api/v1/people/8477986"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA628",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Brandon Montour shot blocked shot by Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 305,
            "eventId" : 628,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "11:31",
            "periodTimeRemaining" : "08:29",
            "dateTime" : "2022-02-23T02:28:36Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -74.0,
            "y" : -6.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479553,
              "fullName" : "Maxim Mamin",
              "link" : "/api/v1/people/8479553"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8479026,
              "fullName" : "Philippe Myers",
              "link" : "/api/v1/people/8479026"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA629",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Philippe Myers shot blocked shot by Maxim Mamin"
          },
          "about" : {
            "eventIdx" : 306,
            "eventId" : 629,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "12:01",
            "periodTimeRemaining" : "07:59",
            "dateTime" : "2022-02-23T02:29:06Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 46.0,
            "y" : -23.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479553,
              "fullName" : "Maxim Mamin",
              "link" : "/api/v1/people/8479553"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA630",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Maxim Mamin Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 307,
            "eventId" : 630,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "12:14",
            "periodTimeRemaining" : "07:46",
            "dateTime" : "2022-02-23T02:29:19Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -72.0,
            "y" : 1.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477409,
              "fullName" : "Carter Verhaeghe",
              "link" : "/api/v1/people/8477409"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA631",
            "eventTypeId" : "SHOT",
            "description" : "Carter Verhaeghe Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 308,
            "eventId" : 631,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "12:17",
            "periodTimeRemaining" : "07:43",
            "dateTime" : "2022-02-23T02:29:22Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -82.0,
            "y" : -12.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477407,
              "fullName" : "Anthony Duclair",
              "link" : "/api/v1/people/8477407"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA632",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Anthony Duclair Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 309,
            "eventId" : 632,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "12:41",
            "periodTimeRemaining" : "07:19",
            "dateTime" : "2022-02-23T02:29:46Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -82.0,
            "y" : -12.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477407,
              "fullName" : "Anthony Duclair",
              "link" : "/api/v1/people/8477407"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA664",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Anthony Duclair"
          },
          "about" : {
            "eventIdx" : 310,
            "eventId" : 664,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "12:42",
            "periodTimeRemaining" : "07:18",
            "dateTime" : "2022-02-23T02:29:47Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -79.0,
            "y" : -5.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8481577,
              "fullName" : "Philip Tomasino",
              "link" : "/api/v1/people/8481577"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA665",
            "eventTypeId" : "HIT",
            "description" : "Philip Tomasino hit Jonathan Huberdeau"
          },
          "about" : {
            "eventIdx" : 311,
            "eventId" : 665,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "12:54",
            "periodTimeRemaining" : "07:06",
            "dateTime" : "2022-02-23T02:29:59Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -82.0,
            "y" : -36.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478055,
              "fullName" : "Gustav Forsling",
              "link" : "/api/v1/people/8478055"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA666",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Gustav Forsling"
          },
          "about" : {
            "eventIdx" : 312,
            "eventId" : 666,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "13:30",
            "periodTimeRemaining" : "06:30",
            "dateTime" : "2022-02-23T02:30:35Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 56.0,
            "y" : -2.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA633",
            "eventTypeId" : "SHOT",
            "description" : "Aaron Ekblad Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 313,
            "eventId" : 633,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "13:35",
            "periodTimeRemaining" : "06:25",
            "dateTime" : "2022-02-23T02:30:40Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -49.0,
            "y" : 2.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA667",
            "eventTypeId" : "STOP",
            "description" : "Goalie Stopped"
          },
          "about" : {
            "eventIdx" : 314,
            "eventId" : 667,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "13:35",
            "periodTimeRemaining" : "06:25",
            "dateTime" : "2022-02-23T02:30:40Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA634",
            "eventTypeId" : "FACEOFF",
            "description" : "Michael McCarron faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 315,
            "eventId" : 634,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "13:35",
            "periodTimeRemaining" : "06:25",
            "dateTime" : "2022-02-23T02:33:18Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA668",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Aaron Ekblad"
          },
          "about" : {
            "eventIdx" : 316,
            "eventId" : 668,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "13:48",
            "periodTimeRemaining" : "06:12",
            "dateTime" : "2022-02-23T02:33:31Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 24.0,
            "y" : 34.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA669",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 317,
            "eventId" : 669,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "13:49",
            "periodTimeRemaining" : "06:11",
            "dateTime" : "2022-02-23T02:33:32Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA635",
            "eventTypeId" : "FACEOFF",
            "description" : "Michael McCarron faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 318,
            "eventId" : 635,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "13:49",
            "periodTimeRemaining" : "06:11",
            "dateTime" : "2022-02-23T02:33:55Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477446,
              "fullName" : "Michael McCarron",
              "link" : "/api/v1/people/8477446"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Giveaway",
            "eventCode" : "FLA670",
            "eventTypeId" : "GIVEAWAY",
            "description" : "Giveaway by Michael McCarron"
          },
          "about" : {
            "eventIdx" : 319,
            "eventId" : 670,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "14:01",
            "periodTimeRemaining" : "05:59",
            "dateTime" : "2022-02-23T02:34:07Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 48.0,
            "y" : 24.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "PenaltyOn"
          }, {
            "player" : {
              "id" : 8480009,
              "fullName" : "Eeli Tolvanen",
              "link" : "/api/v1/people/8480009"
            },
            "playerType" : "DrewBy"
          } ],
          "result" : {
            "event" : "Penalty",
            "eventCode" : "FLA673",
            "eventTypeId" : "PENALTY",
            "description" : "Sam Bennett Cross checking against Eeli Tolvanen",
            "secondaryType" : "Cross checking",
            "penaltySeverity" : "Minor",
            "penaltyMinutes" : 2
          },
          "about" : {
            "eventIdx" : 320,
            "eventId" : 673,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "14:12",
            "periodTimeRemaining" : "05:48",
            "dateTime" : "2022-02-23T02:34:18Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -95.0,
            "y" : -27.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA636",
            "eventTypeId" : "FACEOFF",
            "description" : "Ryan Johansen faceoff won against Aleksander Barkov"
          },
          "about" : {
            "eventIdx" : 321,
            "eventId" : 636,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "14:12",
            "periodTimeRemaining" : "05:48",
            "dateTime" : "2022-02-23T02:34:57Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA637",
            "eventTypeId" : "SHOT",
            "description" : "Ryan Johansen Tip-In saved by Sergei Bobrovsky",
            "secondaryType" : "Tip-In"
          },
          "about" : {
            "eventIdx" : 322,
            "eventId" : 637,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "14:28",
            "periodTimeRemaining" : "05:32",
            "dateTime" : "2022-02-23T02:35:13Z",
            "goals" : {
              "away" : 4,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 68.0,
            "y" : 1.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Scorer",
            "seasonTotal" : 8
          }, {
            "player" : {
              "id" : 8476887,
              "fullName" : "Filip Forsberg",
              "link" : "/api/v1/people/8476887"
            },
            "playerType" : "Assist",
            "seasonTotal" : 18
          }, {
            "player" : {
              "id" : 8474600,
              "fullName" : "Roman Josi",
              "link" : "/api/v1/people/8474600"
            },
            "playerType" : "Assist",
            "seasonTotal" : 39
          }, {
            "player" : {
              "id" : 8475683,
              "fullName" : "Sergei Bobrovsky",
              "link" : "/api/v1/people/8475683"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Goal",
            "eventCode" : "FLA639",
            "eventTypeId" : "GOAL",
            "description" : "Mikael Granlund (8) Wrist Shot, assists: Filip Forsberg (18), Roman Josi (39)",
            "secondaryType" : "Wrist Shot",
            "strength" : {
              "code" : "PPG",
              "name" : "Power Play"
            },
            "gameWinningGoal" : true,
            "emptyNet" : false
          },
          "about" : {
            "eventIdx" : 323,
            "eventId" : 639,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "14:29",
            "periodTimeRemaining" : "05:31",
            "dateTime" : "2022-02-23T02:35:14Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 78.0,
            "y" : 2.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476925,
              "fullName" : "Colton Sissons",
              "link" : "/api/v1/people/8476925"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA640",
            "eventTypeId" : "FACEOFF",
            "description" : "Colton Sissons faceoff won against Jonathan Huberdeau"
          },
          "about" : {
            "eventIdx" : 324,
            "eventId" : 640,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "14:29",
            "periodTimeRemaining" : "05:31",
            "dateTime" : "2022-02-23T02:36:01Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8478508,
              "fullName" : "Yakov Trenin",
              "link" : "/api/v1/people/8478508"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA676",
            "eventTypeId" : "HIT",
            "description" : "Jonathan Huberdeau hit Yakov Trenin"
          },
          "about" : {
            "eventIdx" : 325,
            "eventId" : 676,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "14:44",
            "periodTimeRemaining" : "05:16",
            "dateTime" : "2022-02-23T02:36:16Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 65.0,
            "y" : 42.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477409,
              "fullName" : "Carter Verhaeghe",
              "link" : "/api/v1/people/8477409"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA641",
            "eventTypeId" : "SHOT",
            "description" : "Carter Verhaeghe Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 326,
            "eventId" : 641,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "15:09",
            "periodTimeRemaining" : "04:51",
            "dateTime" : "2022-02-23T02:36:41Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -52.0,
            "y" : -14.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA677",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 327,
            "eventId" : 677,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "15:39",
            "periodTimeRemaining" : "04:21",
            "dateTime" : "2022-02-23T02:37:11Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 13.0,
            "y" : -36.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8476988,
              "fullName" : "Matt Benning",
              "link" : "/api/v1/people/8476988"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8478975,
              "fullName" : "Mason Marchment",
              "link" : "/api/v1/people/8478975"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA642",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Mason Marchment shot blocked shot by Matt Benning"
          },
          "about" : {
            "eventIdx" : 328,
            "eventId" : 642,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "15:55",
            "periodTimeRemaining" : "04:05",
            "dateTime" : "2022-02-23T02:37:27Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -77.0,
            "y" : -11.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477986,
              "fullName" : "Brandon Montour",
              "link" : "/api/v1/people/8477986"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA643",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Brandon Montour Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 329,
            "eventId" : 643,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "16:05",
            "periodTimeRemaining" : "03:55",
            "dateTime" : "2022-02-23T02:37:37Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -46.0,
            "y" : 25.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA678",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 330,
            "eventId" : 678,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "16:08",
            "periodTimeRemaining" : "03:52",
            "dateTime" : "2022-02-23T02:37:40Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -85.0,
            "y" : -25.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA679",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 331,
            "eventId" : 679,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "16:20",
            "periodTimeRemaining" : "03:40",
            "dateTime" : "2022-02-23T02:37:53Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA645",
            "eventTypeId" : "FACEOFF",
            "description" : "Aleksander Barkov faceoff won against Mikael Granlund"
          },
          "about" : {
            "eventIdx" : 332,
            "eventId" : 645,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "16:20",
            "periodTimeRemaining" : "03:40",
            "dateTime" : "2022-02-23T02:38:19Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA680",
            "eventTypeId" : "STOP",
            "description" : "Offside"
          },
          "about" : {
            "eventIdx" : 333,
            "eventId" : 680,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "16:31",
            "periodTimeRemaining" : "03:29",
            "dateTime" : "2022-02-23T02:38:30Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477493,
              "fullName" : "Aleksander Barkov",
              "link" : "/api/v1/people/8477493"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8475793,
              "fullName" : "Ryan Johansen",
              "link" : "/api/v1/people/8475793"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA647",
            "eventTypeId" : "FACEOFF",
            "description" : "Aleksander Barkov faceoff won against Ryan Johansen"
          },
          "about" : {
            "eventIdx" : 334,
            "eventId" : 647,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "16:31",
            "periodTimeRemaining" : "03:29",
            "dateTime" : "2022-02-23T02:40:49Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -20.0,
            "y" : 22.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8478851,
              "fullName" : "Alexandre Carrier",
              "link" : "/api/v1/people/8478851"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA648",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Sam Reinhart shot blocked shot by Alexandre Carrier"
          },
          "about" : {
            "eventIdx" : 335,
            "eventId" : 648,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "17:01",
            "periodTimeRemaining" : "02:59",
            "dateTime" : "2022-02-23T02:41:19Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -82.0,
            "y" : -11.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA649",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "MacKenzie Weegar Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 336,
            "eventId" : 649,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "17:20",
            "periodTimeRemaining" : "02:40",
            "dateTime" : "2022-02-23T02:41:38Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -30.0,
            "y" : 12.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477932,
              "fullName" : "Aaron Ekblad",
              "link" : "/api/v1/people/8477932"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Unknown"
          } ],
          "result" : {
            "event" : "Missed Shot",
            "eventCode" : "FLA650",
            "eventTypeId" : "MISSED_SHOT",
            "description" : "Aaron Ekblad Wide of Net David Rittich"
          },
          "about" : {
            "eventIdx" : 337,
            "eventId" : 650,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "17:27",
            "periodTimeRemaining" : "02:33",
            "dateTime" : "2022-02-23T02:41:45Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -43.0,
            "y" : -26.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA681",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by Sam Reinhart"
          },
          "about" : {
            "eventIdx" : 338,
            "eventId" : 681,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "17:49",
            "periodTimeRemaining" : "02:11",
            "dateTime" : "2022-02-23T02:42:07Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -67.0,
            "y" : -12.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477346,
              "fullName" : "MacKenzie Weegar",
              "link" : "/api/v1/people/8477346"
            },
            "playerType" : "PlayerID"
          } ],
          "result" : {
            "event" : "Takeaway",
            "eventCode" : "FLA682",
            "eventTypeId" : "TAKEAWAY",
            "description" : "Takeaway by MacKenzie Weegar"
          },
          "about" : {
            "eventIdx" : 339,
            "eventId" : 682,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "18:12",
            "periodTimeRemaining" : "01:48",
            "dateTime" : "2022-02-23T02:42:30Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 46.0,
            "y" : -1.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479661,
              "fullName" : "Tanner Jeannot",
              "link" : "/api/v1/people/8479661"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8476456,
              "fullName" : "Jonathan Huberdeau",
              "link" : "/api/v1/people/8476456"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA683",
            "eventTypeId" : "HIT",
            "description" : "Tanner Jeannot hit Jonathan Huberdeau"
          },
          "about" : {
            "eventIdx" : 340,
            "eventId" : 683,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "18:23",
            "periodTimeRemaining" : "01:37",
            "dateTime" : "2022-02-23T02:42:41Z",
            "goals" : {
              "away" : 5,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -37.0,
            "y" : -17.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479661,
              "fullName" : "Tanner Jeannot",
              "link" : "/api/v1/people/8479661"
            },
            "playerType" : "Scorer",
            "seasonTotal" : 17
          } ],
          "result" : {
            "event" : "Goal",
            "eventCode" : "FLA851",
            "eventTypeId" : "GOAL",
            "description" : "Tanner Jeannot (17) Slap Shot, assists: none",
            "secondaryType" : "Slap Shot",
            "strength" : {
              "code" : "EVEN",
              "name" : "Even"
            },
            "gameWinningGoal" : false,
            "emptyNet" : true
          },
          "about" : {
            "eventIdx" : 341,
            "eventId" : 851,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "18:28",
            "periodTimeRemaining" : "01:32",
            "dateTime" : "2022-02-23T02:42:45Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 16.0,
            "y" : -25.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA852",
            "eventTypeId" : "FACEOFF",
            "description" : "Mikael Granlund faceoff won against Sam Bennett"
          },
          "about" : {
            "eventIdx" : 342,
            "eventId" : 852,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "18:28",
            "periodTimeRemaining" : "01:32",
            "dateTime" : "2022-02-23T02:43:50Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : 0.0,
            "y" : 0.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA853",
            "eventTypeId" : "SHOT",
            "description" : "Sam Bennett Wrist Shot saved by David Rittich",
            "secondaryType" : "Wrist Shot"
          },
          "about" : {
            "eventIdx" : 343,
            "eventId" : 853,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "19:06",
            "periodTimeRemaining" : "00:54",
            "dateTime" : "2022-02-23T02:44:28Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -33.0,
            "y" : -33.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8477935,
              "fullName" : "Sam Bennett",
              "link" : "/api/v1/people/8477935"
            },
            "playerType" : "Hitter"
          }, {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Hittee"
          } ],
          "result" : {
            "event" : "Hit",
            "eventCode" : "FLA684",
            "eventTypeId" : "HIT",
            "description" : "Sam Bennett hit Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 344,
            "eventId" : 684,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "19:09",
            "periodTimeRemaining" : "00:51",
            "dateTime" : "2022-02-23T02:44:31Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -99.0,
            "y" : -2.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Stoppage",
            "eventCode" : "FLA685",
            "eventTypeId" : "STOP",
            "description" : "Icing"
          },
          "about" : {
            "eventIdx" : 345,
            "eventId" : 685,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "19:12",
            "periodTimeRemaining" : "00:48",
            "dateTime" : "2022-02-23T02:44:35Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : { }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8475798,
              "fullName" : "Mikael Granlund",
              "link" : "/api/v1/people/8475798"
            },
            "playerType" : "Winner"
          }, {
            "player" : {
              "id" : 8482113,
              "fullName" : "Anton Lundell",
              "link" : "/api/v1/people/8482113"
            },
            "playerType" : "Loser"
          } ],
          "result" : {
            "event" : "Faceoff",
            "eventCode" : "FLA854",
            "eventTypeId" : "FACEOFF",
            "description" : "Mikael Granlund faceoff won against Anton Lundell"
          },
          "about" : {
            "eventIdx" : 346,
            "eventId" : 854,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "19:12",
            "periodTimeRemaining" : "00:48",
            "dateTime" : "2022-02-23T02:45:08Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -69.0,
            "y" : -22.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8479371,
              "fullName" : "Dante Fabbro",
              "link" : "/api/v1/people/8479371"
            },
            "playerType" : "Blocker"
          }, {
            "player" : {
              "id" : 8477933,
              "fullName" : "Sam Reinhart",
              "link" : "/api/v1/people/8477933"
            },
            "playerType" : "Shooter"
          } ],
          "result" : {
            "event" : "Blocked Shot",
            "eventCode" : "FLA855",
            "eventTypeId" : "BLOCKED_SHOT",
            "description" : "Sam Reinhart shot blocked shot by Dante Fabbro"
          },
          "about" : {
            "eventIdx" : 347,
            "eventId" : 855,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "19:30",
            "periodTimeRemaining" : "00:30",
            "dateTime" : "2022-02-23T02:45:26Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -75.0,
            "y" : 12.0
          },
          "team" : {
            "id" : 18,
            "name" : "Nashville Predators",
            "link" : "/api/v1/teams/18",
            "triCode" : "NSH"
          }
        }, {
          "players" : [ {
            "player" : {
              "id" : 8471887,
              "fullName" : "Patric Hornqvist",
              "link" : "/api/v1/people/8471887"
            },
            "playerType" : "Shooter"
          }, {
            "player" : {
              "id" : 8479496,
              "fullName" : "David Rittich",
              "link" : "/api/v1/people/8479496"
            },
            "playerType" : "Goalie"
          } ],
          "result" : {
            "event" : "Shot",
            "eventCode" : "FLA856",
            "eventTypeId" : "SHOT",
            "description" : "Patric Hornqvist Slap Shot saved by David Rittich",
            "secondaryType" : "Slap Shot"
          },
          "about" : {
            "eventIdx" : 348,
            "eventId" : 856,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "19:47",
            "periodTimeRemaining" : "00:13",
            "dateTime" : "2022-02-23T02:45:43Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : {
            "x" : -40.0,
            "y" : -8.0
          },
          "team" : {
            "id" : 13,
            "name" : "Florida Panthers",
            "link" : "/api/v1/teams/13",
            "triCode" : "FLA"
          }
        }, {
          "result" : {
            "event" : "Period End",
            "eventCode" : "FLA686",
            "eventTypeId" : "PERIOD_END",
            "description" : "End of 3rd Period"
          },
          "about" : {
            "eventIdx" : 349,
            "eventId" : 686,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "20:00",
            "periodTimeRemaining" : "00:00",
            "dateTime" : "2022-02-23T02:45:56Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : { }
        }, {
          "result" : {
            "event" : "Period Official",
            "eventCode" : "FLA689",
            "eventTypeId" : "PERIOD_OFFICIAL",
            "description" : "Period Official"
          },
          "about" : {
            "eventIdx" : 350,
            "eventId" : 689,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "20:00",
            "periodTimeRemaining" : "00:00",
            "dateTime" : "2022-02-23T02:46:32Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : { }
        }, {
          "result" : {
            "event" : "Game End",
            "eventCode" : "FLA690",
            "eventTypeId" : "GAME_END",
            "description" : "Game End"
          },
          "about" : {
            "eventIdx" : 351,
            "eventId" : 690,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "20:00",
            "periodTimeRemaining" : "00:00",
            "dateTime" : "2022-02-23T02:46:33Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : { }
        }, {
          "result" : {
            "event" : "Game Official",
            "eventCode" : "FLA951",
            "eventTypeId" : "GAME_OFFICIAL",
            "description" : "Game Official"
          },
          "about" : {
            "eventIdx" : 352,
            "eventId" : 951,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "20:00",
            "periodTimeRemaining" : "00:00",
            "dateTime" : "2022-02-23T12:30:13Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : { }
        } ],
        "scoringPlays" : [ 38, 63, 125, 174, 181, 186, 287, 303, 323, 341 ],
        "penaltyPlays" : [ 35, 79, 211, 221, 299, 320 ],
        "playsByPeriod" : [ {
          "startIndex" : 0,
          "plays" : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113 ],
          "endIndex" : 112
        }, {
          "startIndex" : 114,
          "plays" : [ 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242 ],
          "endIndex" : 241
        }, {
          "startIndex" : 243,
          "plays" : [ 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352 ],
          "endIndex" : 352
        } ],
        "currentPlay" : {
          "result" : {
            "event" : "Game Official",
            "eventCode" : "FLA951",
            "eventTypeId" : "GAME_OFFICIAL",
            "description" : "Game Official"
          },
          "about" : {
            "eventIdx" : 352,
            "eventId" : 951,
            "period" : 3,
            "periodType" : "REGULAR",
            "ordinalNum" : "3rd",
            "periodTime" : "20:00",
            "periodTimeRemaining" : "00:00",
            "dateTime" : "2022-02-23T12:30:13Z",
            "goals" : {
              "away" : 6,
              "home" : 4
            }
          },
          "coordinates" : { }
        }
      },
      "linescore" : {
        "currentPeriod" : 3,
        "currentPeriodOrdinal" : "3rd",
        "currentPeriodTimeRemaining" : "Final",
        "periods" : [ {
          "periodType" : "REGULAR",
          "startTime" : "2022-02-23T00:09:16Z",
          "endTime" : "2022-02-23T00:46:05Z",
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "goals" : 1,
            "shotsOnGoal" : 14,
            "rinkSide" : "right"
          },
          "away" : {
            "goals" : 1,
            "shotsOnGoal" : 13,
            "rinkSide" : "left"
          }
        }, {
          "periodType" : "REGULAR",
          "startTime" : "2022-02-23T01:04:49Z",
          "endTime" : "2022-02-23T01:45:48Z",
          "num" : 2,
          "ordinalNum" : "2nd",
          "home" : {
            "goals" : 2,
            "shotsOnGoal" : 20,
            "rinkSide" : "left"
          },
          "away" : {
            "goals" : 2,
            "shotsOnGoal" : 13,
            "rinkSide" : "right"
          }
        }, {
          "periodType" : "REGULAR",
          "startTime" : "2022-02-23T02:04:47Z",
          "endTime" : "2022-02-23T02:45:56Z",
          "num" : 3,
          "ordinalNum" : "3rd",
          "home" : {
            "goals" : 1,
            "shotsOnGoal" : 14,
            "rinkSide" : "right"
          },
          "away" : {
            "goals" : 3,
            "shotsOnGoal" : 7,
            "rinkSide" : "left"
          }
        } ],
        "shootoutInfo" : {
          "away" : {
            "scores" : 0,
            "attempts" : 0
          },
          "home" : {
            "scores" : 0,
            "attempts" : 0
          }
        },
        "teams" : {
          "home" : {
            "team" : {
              "id" : 13,
              "name" : "Florida Panthers",
              "link" : "/api/v1/teams/13",
              "abbreviation" : "FLA",
              "triCode" : "FLA"
            },
            "goals" : 4,
            "shotsOnGoal" : 48,
            "goaliePulled" : false,
            "numSkaters" : 5,
            "powerPlay" : false
          },
          "away" : {
            "team" : {
              "id" : 18,
              "name" : "Nashville Predators",
              "link" : "/api/v1/teams/18",
              "abbreviation" : "NSH",
              "triCode" : "NSH"
            },
            "goals" : 6,
            "shotsOnGoal" : 33,
            "goaliePulled" : false,
            "numSkaters" : 5,
            "powerPlay" : false
          }
        },
        "powerPlayStrength" : "Even",
        "hasShootout" : false,
        "intermissionInfo" : {
          "intermissionTimeRemaining" : 0,
          "intermissionTimeElapsed" : 0,
          "inIntermission" : false
        },
        "powerPlayInfo" : {
          "situationTimeRemaining" : 0,
          "situationTimeElapsed" : 0,
          "inSituation" : false
        }
      },
      "boxscore" : {
        "teams" : {
          "away" : {
            "team" : {
              "id" : 18,
              "name" : "Nashville Predators",
              "link" : "/api/v1/teams/18",
              "abbreviation" : "NSH",
              "triCode" : "NSH"
            },
            "teamStats" : {
              "teamSkaterStats" : {
                "goals" : 6,
                "pim" : 6,
                "shots" : 33,
                "powerPlayPercentage" : "33.3",
                "powerPlayGoals" : 1.0,
                "powerPlayOpportunities" : 3.0,
                "faceOffWinPercentage" : "61.3",
                "blocked" : 18,
                "takeaways" : 9,
                "giveaways" : 6,
                "hits" : 34
              }
            },
            "players" : {
              "ID8478508" : {
                "person" : {
                  "id" : 8478508,
                  "fullName" : "Yakov Trenin",
                  "link" : "/api/v1/people/8478508",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "13",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "15:07",
                    "assists" : 0,
                    "goals" : 1,
                    "shots" : 2,
                    "hits" : 0,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : 1,
                    "evenTimeOnIce" : "13:11",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "1:56"
                  }
                }
              },
              "ID8475218" : {
                "person" : {
                  "id" : 8475218,
                  "fullName" : "Mattias Ekholm",
                  "link" : "/api/v1/people/8475218",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "14",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "20:55",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 1,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 2,
                    "giveaways" : 1,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 2,
                    "plusMinus" : 0,
                    "evenTimeOnIce" : "16:41",
                    "powerPlayTimeOnIce" : "1:15",
                    "shortHandedTimeOnIce" : "2:59"
                  }
                }
              },
              "ID8476925" : {
                "person" : {
                  "id" : 8476925,
                  "fullName" : "Colton Sissons",
                  "link" : "/api/v1/people/8476925",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "10",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "15:03",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 0,
                    "hits" : 5,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffPct" : 100.0,
                    "faceOffWins" : 16,
                    "faceoffTaken" : 16,
                    "takeaways" : 1,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : 2,
                    "evenTimeOnIce" : "12:34",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "2:29"
                  }
                }
              },
              "ID8474697" : {
                "person" : {
                  "id" : 8474697,
                  "fullName" : "Mark Borowiecki",
                  "link" : "/api/v1/people/8474697",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "90",
                "position" : {
                  "code" : "N/A",
                  "name" : "Unknown",
                  "type" : "Unknown",
                  "abbreviation" : "N/A"
                },
                "stats" : { }
              },
              "ID8476887" : {
                "person" : {
                  "id" : 8476887,
                  "fullName" : "Filip Forsberg",
                  "link" : "/api/v1/people/8476887",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "9",
                "position" : {
                  "code" : "L",
                  "name" : "Left Wing",
                  "type" : "Forward",
                  "abbreviation" : "LW"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "19:14",
                    "assists" : 2,
                    "goals" : 1,
                    "shots" : 1,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 1,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 1,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : 1,
                    "evenTimeOnIce" : "16:12",
                    "powerPlayTimeOnIce" : "3:02",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8475798" : {
                "person" : {
                  "id" : 8475798,
                  "fullName" : "Mikael Granlund",
                  "link" : "/api/v1/people/8475798",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "64",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "22:10",
                    "assists" : 0,
                    "goals" : 1,
                    "shots" : 3,
                    "hits" : 2,
                    "powerPlayGoals" : 1,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 2,
                    "faceOffPct" : 37.5,
                    "faceOffWins" : 6,
                    "faceoffTaken" : 16,
                    "takeaways" : 2,
                    "giveaways" : 1,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : 0,
                    "evenTimeOnIce" : "18:10",
                    "powerPlayTimeOnIce" : "3:18",
                    "shortHandedTimeOnIce" : "0:42"
                  }
                }
              },
              "ID8474600" : {
                "person" : {
                  "id" : 8474600,
                  "fullName" : "Roman Josi",
                  "link" : "/api/v1/people/8474600",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "59",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "24:46",
                    "assists" : 1,
                    "goals" : 1,
                    "shots" : 4,
                    "hits" : 0,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 1,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 1,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : 1,
                    "evenTimeOnIce" : "20:17",
                    "powerPlayTimeOnIce" : "3:02",
                    "shortHandedTimeOnIce" : "1:27"
                  }
                }
              },
              "ID8476988" : {
                "person" : {
                  "id" : 8476988,
                  "fullName" : "Matt Benning",
                  "link" : "/api/v1/people/8476988",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "5",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "18:55",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 0,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : -1,
                    "evenTimeOnIce" : "17:04",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "1:51"
                  }
                }
              },
              "ID8475793" : {
                "person" : {
                  "id" : 8475793,
                  "fullName" : "Ryan Johansen",
                  "link" : "/api/v1/people/8475793",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "92",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "14:17",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 4,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffPct" : 50.0,
                    "faceOffWins" : 9,
                    "faceoffTaken" : 18,
                    "takeaways" : 1,
                    "giveaways" : 1,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : -1,
                    "evenTimeOnIce" : "11:15",
                    "powerPlayTimeOnIce" : "3:02",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8477433" : {
                "person" : {
                  "id" : 8477433,
                  "fullName" : "Ben Harpur",
                  "link" : "/api/v1/people/8477433",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "17",
                "position" : {
                  "code" : "N/A",
                  "name" : "Unknown",
                  "type" : "Unknown",
                  "abbreviation" : "N/A"
                },
                "stats" : { }
              },
              "ID8479316" : {
                "person" : {
                  "id" : 8479316,
                  "fullName" : "Luke Kunin",
                  "link" : "/api/v1/people/8479316",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "11",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "14:13",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 1,
                    "hits" : 2,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffPct" : 100.0,
                    "faceOffWins" : 1,
                    "faceoffTaken" : 1,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : -1,
                    "evenTimeOnIce" : "12:58",
                    "powerPlayTimeOnIce" : "1:15",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8478851" : {
                "person" : {
                  "id" : 8478851,
                  "fullName" : "Alexandre Carrier",
                  "link" : "/api/v1/people/8478851",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "45",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "18:48",
                    "assists" : 1,
                    "goals" : 0,
                    "shots" : 1,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 2,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 2,
                    "plusMinus" : 1,
                    "evenTimeOnIce" : "15:55",
                    "powerPlayTimeOnIce" : "1:28",
                    "shortHandedTimeOnIce" : "1:25"
                  }
                }
              },
              "ID8480009" : {
                "person" : {
                  "id" : 8480009,
                  "fullName" : "Eeli Tolvanen",
                  "link" : "/api/v1/people/8480009",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "28",
                "position" : {
                  "code" : "R",
                  "name" : "Right Wing",
                  "type" : "Forward",
                  "abbreviation" : "RW"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "10:03",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 3,
                    "hits" : 3,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : 0,
                    "evenTimeOnIce" : "8:48",
                    "powerPlayTimeOnIce" : "1:15",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8477446" : {
                "person" : {
                  "id" : 8477446,
                  "fullName" : "Michael McCarron",
                  "link" : "/api/v1/people/8477446",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "47",
                "position" : {
                  "code" : "R",
                  "name" : "Right Wing",
                  "type" : "Forward",
                  "abbreviation" : "RW"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "11:11",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 1,
                    "hits" : 4,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffPct" : 50.0,
                    "faceOffWins" : 5,
                    "faceoffTaken" : 10,
                    "takeaways" : 1,
                    "giveaways" : 1,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : 1,
                    "evenTimeOnIce" : "8:40",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "2:31"
                  }
                }
              },
              "ID8475168" : {
                "person" : {
                  "id" : 8475168,
                  "fullName" : "Matt Duchene",
                  "link" : "/api/v1/people/8475168",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "95",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "18:11",
                    "assists" : 2,
                    "goals" : 0,
                    "shots" : 3,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 1,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : 1,
                    "evenTimeOnIce" : "15:22",
                    "powerPlayTimeOnIce" : "2:49",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8479644" : {
                "person" : {
                  "id" : 8479644,
                  "fullName" : "Matt Luff",
                  "link" : "/api/v1/people/8479644",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "24",
                "position" : {
                  "code" : "R",
                  "name" : "Right Wing",
                  "type" : "Forward",
                  "abbreviation" : "RW"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "9:34",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 2,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffPct" : 100.0,
                    "faceOffWins" : 1,
                    "faceoffTaken" : 1,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : 0,
                    "evenTimeOnIce" : "9:34",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8479026" : {
                "person" : {
                  "id" : 8479026,
                  "fullName" : "Philippe Myers",
                  "link" : "/api/v1/people/8479026",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "55",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "14:25",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 0,
                    "hits" : 3,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : 1,
                    "evenTimeOnIce" : "13:36",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "0:49"
                  }
                }
              },
              "ID8479661" : {
                "person" : {
                  "id" : 8479661,
                  "fullName" : "Tanner Jeannot",
                  "link" : "/api/v1/people/8479661",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "84",
                "position" : {
                  "code" : "L",
                  "name" : "Left Wing",
                  "type" : "Forward",
                  "abbreviation" : "LW"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "15:35",
                    "assists" : 0,
                    "goals" : 2,
                    "shots" : 3,
                    "hits" : 6,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 1,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : 2,
                    "evenTimeOnIce" : "13:13",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "2:22"
                  }
                }
              },
              "ID8479496" : {
                "person" : {
                  "id" : 8479496,
                  "fullName" : "David Rittich",
                  "link" : "/api/v1/people/8479496",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "33",
                "position" : {
                  "code" : "G",
                  "name" : "Goalie",
                  "type" : "Goalie",
                  "abbreviation" : "G"
                },
                "stats" : {
                  "goalieStats" : {
                    "timeOnIce" : "60:00",
                    "assists" : 0,
                    "goals" : 0,
                    "pim" : 0,
                    "shots" : 48,
                    "saves" : 44,
                    "powerPlaySaves" : 4,
                    "shortHandedSaves" : 1,
                    "evenSaves" : 39,
                    "shortHandedShotsAgainst" : 1,
                    "evenShotsAgainst" : 42,
                    "powerPlayShotsAgainst" : 5,
                    "decision" : "W",
                    "savePercentage" : 91.66666666666666,
                    "shortHandedSavePercentage" : 100.0,
                    "evenStrengthSavePercentage" : 92.85714285714286,
                    "powerPlaySavePercentage" : 80.0
                  }
                }
              },
              "ID8479371" : {
                "person" : {
                  "id" : 8479371,
                  "fullName" : "Dante Fabbro",
                  "link" : "/api/v1/people/8479371",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "57",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "19:29",
                    "assists" : 1,
                    "goals" : 0,
                    "shots" : 3,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 1,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 6,
                    "plusMinus" : 2,
                    "evenTimeOnIce" : "18:00",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "1:29"
                  }
                }
              },
              "ID8476393" : {
                "person" : {
                  "id" : 8476393,
                  "fullName" : "Nick Cousins",
                  "link" : "/api/v1/people/8476393",
                  "shootsCatches" : "L",
                  "rosterStatus" : "I"
                },
                "jerseyNumber" : "21",
                "position" : {
                  "code" : "N/A",
                  "name" : "Unknown",
                  "type" : "Unknown",
                  "abbreviation" : "N/A"
                },
                "stats" : { }
              },
              "ID8481577" : {
                "person" : {
                  "id" : 8481577,
                  "fullName" : "Philip Tomasino",
                  "link" : "/api/v1/people/8481577",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "26",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "13:06",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 1,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : -1,
                    "evenTimeOnIce" : "12:07",
                    "powerPlayTimeOnIce" : "0:59",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              }
            },
            "goalies" : [ 8479496 ],
            "skaters" : [ 8476988, 8476887, 8476925, 8479316, 8478508, 8475218, 8479644, 8481577, 8480009, 8478851, 8477446, 8479026, 8479371, 8474600, 8475798, 8479661, 8475793, 8475168, 8477433, 8476393, 8474697 ],
            "onIce" : [ 8474600, 8475168, 8475798, 8476887, 8479371, 8479496 ],
            "onIcePlus" : [ {
              "playerId" : 8474600,
              "shiftDuration" : 58,
              "stamina" : 66
            }, {
              "playerId" : 8475168,
              "shiftDuration" : 92,
              "stamina" : 33
            }, {
              "playerId" : 8475798,
              "shiftDuration" : 92,
              "stamina" : 33
            }, {
              "playerId" : 8476887,
              "shiftDuration" : 92,
              "stamina" : 33
            }, {
              "playerId" : 8479371,
              "shiftDuration" : 58,
              "stamina" : 66
            }, {
              "playerId" : 8479496,
              "shiftDuration" : 559,
              "stamina" : 33
            } ],
            "scratches" : [ 8477433, 8476393, 8474697 ],
            "penaltyBox" : [ ],
            "coaches" : [ {
              "person" : {
                "fullName" : "John Hynes",
                "link" : "/api/v1/people/null"
              },
              "position" : {
                "code" : "HC",
                "name" : "Head Coach",
                "type" : "Head Coach",
                "abbreviation" : "Head Coach"
              }
            } ]
          },
          "home" : {
            "team" : {
              "id" : 13,
              "name" : "Florida Panthers",
              "link" : "/api/v1/teams/13",
              "abbreviation" : "FLA",
              "triCode" : "FLA"
            },
            "teamStats" : {
              "teamSkaterStats" : {
                "goals" : 4,
                "pim" : 6,
                "shots" : 48,
                "powerPlayPercentage" : "33.3",
                "powerPlayGoals" : 1.0,
                "powerPlayOpportunities" : 3.0,
                "faceOffWinPercentage" : "38.7",
                "blocked" : 9,
                "takeaways" : 10,
                "giveaways" : 12,
                "hits" : 26
              }
            },
            "players" : {
              "ID8480185" : {
                "person" : {
                  "id" : 8480185,
                  "fullName" : "Eetu Luostarinen",
                  "link" : "/api/v1/people/8480185",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "27",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "11:40",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 3,
                    "hits" : 2,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffPct" : 45.45,
                    "faceOffWins" : 5,
                    "faceoffTaken" : 11,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : -1,
                    "evenTimeOnIce" : "9:33",
                    "powerPlayTimeOnIce" : "0:14",
                    "shortHandedTimeOnIce" : "1:53"
                  }
                }
              },
              "ID8477935" : {
                "person" : {
                  "id" : 8477935,
                  "fullName" : "Sam Bennett",
                  "link" : "/api/v1/people/8477935",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "9",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "16:22",
                    "assists" : 0,
                    "goals" : 1,
                    "shots" : 7,
                    "hits" : 7,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 2,
                    "faceOffPct" : 16.67,
                    "faceOffWins" : 3,
                    "faceoffTaken" : 18,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : 0,
                    "evenTimeOnIce" : "14:29",
                    "powerPlayTimeOnIce" : "1:29",
                    "shortHandedTimeOnIce" : "0:24"
                  }
                }
              },
              "ID8477407" : {
                "person" : {
                  "id" : 8477407,
                  "fullName" : "Anthony Duclair",
                  "link" : "/api/v1/people/8477407",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "10",
                "position" : {
                  "code" : "L",
                  "name" : "Left Wing",
                  "type" : "Forward",
                  "abbreviation" : "LW"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "17:15",
                    "assists" : 1,
                    "goals" : 0,
                    "shots" : 2,
                    "hits" : 0,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 1,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 1,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : -1,
                    "evenTimeOnIce" : "13:58",
                    "powerPlayTimeOnIce" : "3:17",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8477409" : {
                "person" : {
                  "id" : 8477409,
                  "fullName" : "Carter Verhaeghe",
                  "link" : "/api/v1/people/8477409",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "23",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "16:06",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 4,
                    "hits" : 0,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 1,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : -1,
                    "evenTimeOnIce" : "15:33",
                    "powerPlayTimeOnIce" : "0:14",
                    "shortHandedTimeOnIce" : "0:19"
                  }
                }
              },
              "ID8477932" : {
                "person" : {
                  "id" : 8477932,
                  "fullName" : "Aaron Ekblad",
                  "link" : "/api/v1/people/8477932",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "5",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "27:41",
                    "assists" : 0,
                    "goals" : 1,
                    "shots" : 6,
                    "hits" : 2,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 2,
                    "giveaways" : 2,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : 0,
                    "evenTimeOnIce" : "21:18",
                    "powerPlayTimeOnIce" : "3:36",
                    "shortHandedTimeOnIce" : "2:47"
                  }
                }
              },
              "ID8471887" : {
                "person" : {
                  "id" : 8471887,
                  "fullName" : "Patric Hornqvist",
                  "link" : "/api/v1/people/8471887",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "70",
                "position" : {
                  "code" : "R",
                  "name" : "Right Wing",
                  "type" : "Forward",
                  "abbreviation" : "RW"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "11:56",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 3,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffPct" : 0.0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 1,
                    "takeaways" : 1,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : -3,
                    "evenTimeOnIce" : "10:27",
                    "powerPlayTimeOnIce" : "1:29",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8477986" : {
                "person" : {
                  "id" : 8477986,
                  "fullName" : "Brandon Montour",
                  "link" : "/api/v1/people/8477986",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "62",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "17:17",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 0,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : -2,
                    "evenTimeOnIce" : "15:13",
                    "powerPlayTimeOnIce" : "1:24",
                    "shortHandedTimeOnIce" : "0:40"
                  }
                }
              },
              "ID8478569" : {
                "person" : {
                  "id" : 8478569,
                  "fullName" : "Noel Acciari",
                  "link" : "/api/v1/people/8478569",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "55",
                "position" : {
                  "code" : "N/A",
                  "name" : "Unknown",
                  "type" : "Unknown",
                  "abbreviation" : "N/A"
                },
                "stats" : { }
              },
              "ID8477933" : {
                "person" : {
                  "id" : 8477933,
                  "fullName" : "Sam Reinhart",
                  "link" : "/api/v1/people/8477933",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "13",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "17:59",
                    "assists" : 1,
                    "goals" : 1,
                    "shots" : 5,
                    "hits" : 2,
                    "powerPlayGoals" : 1,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffPct" : 57.14,
                    "faceOffWins" : 4,
                    "faceoffTaken" : 7,
                    "takeaways" : 1,
                    "giveaways" : 2,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : 0,
                    "evenTimeOnIce" : "14:42",
                    "powerPlayTimeOnIce" : "3:17",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8475683" : {
                "person" : {
                  "id" : 8475683,
                  "fullName" : "Sergei Bobrovsky",
                  "link" : "/api/v1/people/8475683",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "72",
                "position" : {
                  "code" : "G",
                  "name" : "Goalie",
                  "type" : "Goalie",
                  "abbreviation" : "G"
                },
                "stats" : {
                  "goalieStats" : {
                    "timeOnIce" : "57:00",
                    "assists" : 0,
                    "goals" : 0,
                    "pim" : 0,
                    "shots" : 32,
                    "saves" : 27,
                    "powerPlaySaves" : 6,
                    "shortHandedSaves" : 0,
                    "evenSaves" : 21,
                    "shortHandedShotsAgainst" : 1,
                    "evenShotsAgainst" : 24,
                    "powerPlayShotsAgainst" : 7,
                    "decision" : "L",
                    "savePercentage" : 84.375,
                    "shortHandedSavePercentage" : 0.0,
                    "evenStrengthSavePercentage" : 87.5,
                    "powerPlaySavePercentage" : 85.71428571428571
                  }
                }
              },
              "ID8478975" : {
                "person" : {
                  "id" : 8478975,
                  "fullName" : "Mason Marchment",
                  "link" : "/api/v1/people/8478975",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "17",
                "position" : {
                  "code" : "L",
                  "name" : "Left Wing",
                  "type" : "Forward",
                  "abbreviation" : "LW"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "14:04",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 0,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 1,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : 2,
                    "evenTimeOnIce" : "12:35",
                    "powerPlayTimeOnIce" : "1:29",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8476456" : {
                "person" : {
                  "id" : 8476456,
                  "fullName" : "Jonathan Huberdeau",
                  "link" : "/api/v1/people/8476456",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "11",
                "position" : {
                  "code" : "L",
                  "name" : "Left Wing",
                  "type" : "Forward",
                  "abbreviation" : "LW"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "20:36",
                    "assists" : 2,
                    "goals" : 0,
                    "shots" : 4,
                    "hits" : 2,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 1,
                    "penaltyMinutes" : 0,
                    "faceOffPct" : 0.0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 2,
                    "takeaways" : 0,
                    "giveaways" : 3,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : -2,
                    "evenTimeOnIce" : "15:14",
                    "powerPlayTimeOnIce" : "3:17",
                    "shortHandedTimeOnIce" : "2:05"
                  }
                }
              },
              "ID8479523" : {
                "person" : {
                  "id" : 8479523,
                  "fullName" : "Lucas Carlsson",
                  "link" : "/api/v1/people/8479523",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "32",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "9:26",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 3,
                    "hits" : 0,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : -2,
                    "evenTimeOnIce" : "9:26",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8477346" : {
                "person" : {
                  "id" : 8477346,
                  "fullName" : "MacKenzie Weegar",
                  "link" : "/api/v1/people/8477346",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "52",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "23:54",
                    "assists" : 1,
                    "goals" : 0,
                    "shots" : 2,
                    "hits" : 3,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 2,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 1,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : 1,
                    "evenTimeOnIce" : "22:06",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "1:48"
                  }
                }
              },
              "ID8479553" : {
                "person" : {
                  "id" : 8479553,
                  "fullName" : "Maxim Mamin",
                  "link" : "/api/v1/people/8479553",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "98",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "12:27",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 1,
                    "hits" : 0,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 1,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : 0,
                    "evenTimeOnIce" : "12:13",
                    "powerPlayTimeOnIce" : "0:14",
                    "shortHandedTimeOnIce" : "0:00"
                  }
                }
              },
              "ID8479355" : {
                "person" : {
                  "id" : 8479355,
                  "fullName" : "Olli Juolevi",
                  "link" : "/api/v1/people/8479355",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "4",
                "position" : {
                  "code" : "N/A",
                  "name" : "Unknown",
                  "type" : "Unknown",
                  "abbreviation" : "N/A"
                },
                "stats" : { }
              },
              "ID8478055" : {
                "person" : {
                  "id" : 8478055,
                  "fullName" : "Gustav Forsling",
                  "link" : "/api/v1/people/8478055",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "42",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "21:17",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 2,
                    "hits" : 0,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 1,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : 0,
                    "evenTimeOnIce" : "18:57",
                    "powerPlayTimeOnIce" : "0:14",
                    "shortHandedTimeOnIce" : "2:06"
                  }
                }
              },
              "ID8478366" : {
                "person" : {
                  "id" : 8478366,
                  "fullName" : "Frank Vatrano",
                  "link" : "/api/v1/people/8478366",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "77",
                "position" : {
                  "code" : "N/A",
                  "name" : "Unknown",
                  "type" : "Unknown",
                  "abbreviation" : "N/A"
                },
                "stats" : { }
              },
              "ID8475462" : {
                "person" : {
                  "id" : 8475462,
                  "fullName" : "Radko Gudas",
                  "link" : "/api/v1/people/8475462",
                  "shootsCatches" : "R",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "7",
                "position" : {
                  "code" : "D",
                  "name" : "Defenseman",
                  "type" : "Defenseman",
                  "abbreviation" : "D"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "15:35",
                    "assists" : 0,
                    "goals" : 1,
                    "shots" : 1,
                    "hits" : 2,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 3,
                    "plusMinus" : 0,
                    "evenTimeOnIce" : "14:22",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "1:13"
                  }
                }
              },
              "ID8479066" : {
                "person" : {
                  "id" : 8479066,
                  "fullName" : "Ryan Lomberg",
                  "link" : "/api/v1/people/8479066",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "94",
                "position" : {
                  "code" : "L",
                  "name" : "Left Wing",
                  "type" : "Forward",
                  "abbreviation" : "LW"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "8:49",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 2,
                    "hits" : 2,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffWins" : 0,
                    "faceoffTaken" : 0,
                    "takeaways" : 0,
                    "giveaways" : 0,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : -1,
                    "evenTimeOnIce" : "7:40",
                    "powerPlayTimeOnIce" : "0:00",
                    "shortHandedTimeOnIce" : "1:09"
                  }
                }
              },
              "ID8477493" : {
                "person" : {
                  "id" : 8477493,
                  "fullName" : "Aleksander Barkov",
                  "link" : "/api/v1/people/8477493",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "16",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "19:20",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 3,
                    "hits" : 1,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 2,
                    "faceOffPct" : 58.82,
                    "faceOffWins" : 10,
                    "faceoffTaken" : 17,
                    "takeaways" : 2,
                    "giveaways" : 1,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 0,
                    "plusMinus" : -3,
                    "evenTimeOnIce" : "15:24",
                    "powerPlayTimeOnIce" : "3:17",
                    "shortHandedTimeOnIce" : "0:39"
                  }
                }
              },
              "ID8482113" : {
                "person" : {
                  "id" : 8482113,
                  "fullName" : "Anton Lundell",
                  "link" : "/api/v1/people/8482113",
                  "shootsCatches" : "L",
                  "rosterStatus" : "Y"
                },
                "jerseyNumber" : "15",
                "position" : {
                  "code" : "C",
                  "name" : "Center",
                  "type" : "Forward",
                  "abbreviation" : "C"
                },
                "stats" : {
                  "skaterStats" : {
                    "timeOnIce" : "16:59",
                    "assists" : 0,
                    "goals" : 0,
                    "shots" : 0,
                    "hits" : 0,
                    "powerPlayGoals" : 0,
                    "powerPlayAssists" : 0,
                    "penaltyMinutes" : 0,
                    "faceOffPct" : 33.33,
                    "faceOffWins" : 2,
                    "faceoffTaken" : 6,
                    "takeaways" : 1,
                    "giveaways" : 1,
                    "shortHandedGoals" : 0,
                    "shortHandedAssists" : 0,
                    "blocked" : 1,
                    "plusMinus" : 2,
                    "evenTimeOnIce" : "13:25",
                    "powerPlayTimeOnIce" : "1:29",
                    "shortHandedTimeOnIce" : "2:05"
                  }
                }
              }
            },
            "goalies" : [ 8475683 ],
            "skaters" : [ 8477932, 8475462, 8477935, 8477407, 8476456, 8477933, 8482113, 8477493, 8478975, 8477409, 8480185, 8479523, 8478055, 8477346, 8477986, 8471887, 8479066, 8479553, 8479355, 8478569, 8478366 ],
            "onIce" : [ 8471887, 8477346, 8477932, 8477933, 8478975, 8482113 ],
            "onIcePlus" : [ {
              "playerId" : 8471887,
              "shiftDuration" : 77,
              "stamina" : 33
            }, {
              "playerId" : 8477346,
              "shiftDuration" : 48,
              "stamina" : 66
            }, {
              "playerId" : 8477932,
              "shiftDuration" : 48,
              "stamina" : 66
            }, {
              "playerId" : 8477933,
              "shiftDuration" : 48,
              "stamina" : 66
            }, {
              "playerId" : 8478975,
              "shiftDuration" : 48,
              "stamina" : 66
            }, {
              "playerId" : 8482113,
              "shiftDuration" : 48,
              "stamina" : 66
            } ],
            "scratches" : [ 8479355, 8478569, 8478366 ],
            "penaltyBox" : [ ],
            "coaches" : [ {
              "person" : {
                "fullName" : "Andrew Brunette",
                "link" : "/api/v1/people/null"
              },
              "position" : {
                "code" : "HC",
                "name" : "Head Coach",
                "type" : "Head Coach",
                "abbreviation" : "Head Coach"
              }
            } ]
          }
        },
        "officials" : [ {
          "official" : {
            "id" : 2265,
            "fullName" : "Kelly Sutherland",
            "link" : "/api/v1/people/2265"
          },
          "officialType" : "Referee"
        }, {
          "official" : {
            "id" : 4604,
            "fullName" : "Jean Hebert",
            "link" : "/api/v1/people/4604"
          },
          "officialType" : "Referee"
        }, {
          "official" : {
            "id" : 4694,
            "fullName" : "Shandor Alphonso",
            "link" : "/api/v1/people/4694"
          },
          "officialType" : "Linesman"
        }, {
          "official" : {
            "id" : 2314,
            "fullName" : "David Brisebois",
            "link" : "/api/v1/people/2314"
          },
          "officialType" : "Linesman"
        } ]
      },
      "decisions" : {
        "winner" : {
          "id" : 8479496,
          "fullName" : "David Rittich",
          "link" : "/api/v1/people/8479496"
        },
        "loser" : {
          "id" : 8475683,
          "fullName" : "Sergei Bobrovsky",
          "link" : "/api/v1/people/8475683"
        },
        "firstStar" : {
          "id" : 8475798,
          "fullName" : "Mikael Granlund",
          "link" : "/api/v1/people/8475798"
        },
        "secondStar" : {
          "id" : 8476887,
          "fullName" : "Filip Forsberg",
          "link" : "/api/v1/people/8476887"
        },
        "thirdStar" : {
          "id" : 8478508,
          "fullName" : "Yakov Trenin",
          "link" : "/api/v1/people/8478508"
        }
      }
    }
  }

module.exports = {
    correctPenaltyList: correctPenaltyList,
    testGame: testGame
};