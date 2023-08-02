# Thoughts and Questions
---
## Do I need to change the penalty model?
There's a lot more data in the Penalty event than what used to be. 

<details>
    <summary>The actual Penalty information</summary>
        
        "players" : [ {
          "player" : {
            "id" : 8477934,
            "fullName" : "Leon Draisaitl",
            "link" : "/api/v1/people/8477934"
          },
          "playerType" : "PenaltyOn"
        }, {
          "player" : {
            "id" : 8477935,
            "fullName" : "Sam Bennett",
            "link" : "/api/v1/people/8477935"
          },
          "playerType" : "DrewBy"
        } ],
        "result" : {
          "event" : "Penalty",
          "eventCode" : "FLA257",
          "eventTypeId" : "PENALTY",
          "description" : "Leon Draisaitl Tripping against Sam Bennett",
          "secondaryType" : "Tripping",
          "penaltySeverity" : "Minor",
          "penaltyMinutes" : 2
        },
        "about" : {
          "eventIdx" : 109,
          "eventId" : 257,
          "period" : 1,
          "periodType" : "REGULAR",
          "ordinalNum" : "1st",
          "periodTime" : "16:21",
          "periodTimeRemaining" : "03:39",
          "dateTime" : "2022-02-26T18:11:23Z",
          "goals" : {
            "away" : 1,
            "home" : 1
          }
        },
        "coordinates" : {
          "x" : -16.0,
          "y" : 32.0
        },
        "team" : {
          "id" : 22,
          "name" : "Edmonton Oilers",
          "link" : "/api/v1/teams/22",
          "triCode" : "EDM"
        }
</details>

I should consider storing the time of the penalty, and I might be able to see the result of the penalty (like if a goal was scored) by looking at the events occuring after it. They've also got these "event" codes. I wonder what those correspond to?

## Do I want a player model?
I'm learning towards having one, since I am getting so much data about the game through the normal API call, it might be worth storing more about the player. But let's think about what I'd want to store. 
- Name
- ID - There is one in the NHL data. This would be smart to store so I can quickly sort against it. This makes duplicate players easier to find and also if the player gets traded.
- Team

<details>    
    <summary>Here's an excerpt of the Player Data</summary>
    
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
      }
</details>

## Do I want a referee model?
I am also leaning towards having one of these. I can store a bit more data about the referees to make it easier to search them later.
The returned data for the Referee would be this

```
{ 
    "official" : {
      "id" : 6992,
      "fullName" : "Furman South",
      "link" : "/api/v1/people/6992"
    },
    "officialType" : "Referee"
}
```

# Intended Workflow
## Getting the Penalties
This should be a process that runs nightly. In the past I had it set up to run between 3-5AM local time. This allowed for the games on the west coast to complete, thus getting all of the data. Since this is going to be the whole API. I am intending on making a private post route that will require an environment variable/some sort of security check. This post route will do the following

1. Create the Penalty Fetcher (the tool I'm using to interact with the NHL's API).
2. Have the Penalty Fetcher perform its operation, gathering all of the penalty data.
3. Once all the penalties have been constructed, pushing them to the database.

The intent is to separate this into two separate tools. The Penalty Fetcher will only interact with the NHL's API and the Database Manager will be the tool that handles all database connections.

## Fetching the Penalties
As stated, I intend on having this be a full API, but I should provide some sort of Query Constructor. Something that allows the user to easily construct their query then pass that to the Database Manager. I want to keep this query constructor separate from the Database Manager. In the past version of the Penalty Tracker, I didn't comparmentalize the project. So the interaction with the NHL API, the manipulation of the database and the query construction were all one piece. This made changing the database to a different type rather annoying. I'd like to avoid this so I can easily change from MongoDB to some other one easily.
