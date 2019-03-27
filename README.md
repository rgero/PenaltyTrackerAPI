# Penalty Tracker API
----
The purpose of this project is to create an API for the Penalty Tracker Database.

#### Parameters
Here is the list of valid query parameters currently implemented through the API

|Parameter|Explanation|
|---|---|
|Season|Currently the database separates out the penalties by season, as well as regular season vs play-offs.|
|Players|A list of player's names. Separated by Commas|
|Player Team|A list of teams|
|Opponent Team|A list of teams|
|Location| An option to search whether the penalized player was home, away, or it doesn't matter |
|Start| The start date of the penalty results|
|End| The end date of the penalty results|
|Referees|A list of referee names, separated by commas.|

#### Examples
Here are a couple examples showing valid queries

* ` /api?season=Regular_16_17` - Returns all of the penalties that occurred in the 2016-17 Regular Season
* `/api?season=Regular_18_19&start=2018-11-14&end=2018-11-30` - Returns all of the penalties in the 2018-19 season that occur between November 14, 2018 and November 30, 2018.