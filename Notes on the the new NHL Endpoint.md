Notes on the the new NHL Endpoint

Endpoint Documentation - https://gitlab.com/dword4/nhlapi/-/blob/master/new-api.md

Base URL - https://api-web.nhle.com/v1

This is the data breakdown from the Game Schedule
---
Game {
    id:                number;
    season:            number;
    gameType:          number; - This one is going to be huge. 2 is Regular Season, 3 is Playoffs
    venue:             Venue;
    neutralSite:       boolean;
    startTimeUTC:      Date;
    easternUTCOffset:  string;
    venueUTCOffset:    string;
    venueTimezone:     string;
    gameState:         string;
    gameScheduleState: string;
    tvBroadcasts:      TvBroadcast[];
    awayTeam:          AwayTeam;
    homeTeam:          HomeTeam;
    periodDescriptor:  PeriodDescriptor;
    gameOutcome:       GameOutcome;
    seriesStatus:      SeriesStatus;
    seriesUrl:         string;
    gameCenterLink:    string;
}

Team
{
    id:             number;
    placeName:      PlaceName;
    abbrev:         string;
    logo:           string;
    darkLogo:       string;
    homeSplitSquad | awaySplitSquad: boolean; - I'll have to process this
    score:          number; - This is the only reference to the score in the data
}

PlaceName {
    default: string; - This is the english name
    fr:      string; - This is the french name
}

GameOutcome {
    lastPeriodType: string;
}

Venue {
    default: string;
}

PeriodDescriptor {
    number:     number;
    periodType: string;
}

SeriesStatus { - Does this show up for Regular Season Games?
    round:                number;
    seriesAbbrev:         string;
    seriesLetter:         string;
    neededToWin:          number;
    topSeedTeamAbbrev:    string;
    topSeedWins:          number;
    bottomSeedTeamAbbrev: string;
    bottomSeedWins:       number;
    gameNumberOfSeries:   number;
}

TvBroadcast {
    id:             number;
    market:         string;
    countryCode:    string;
    network:        string;
    sequenceNumber: number;
}


--- Penalty Data ---

URL - https://api-web.nhle.com/v1/gamecenter/{game id}/play-by-play

export interface Event {
  eventId: number
  periodDescriptor: PeriodDescriptor
  timeInPeriod: string
  timeRemaining: string
  situationCode: string
  typeCode: number
  typeDescKey: string
  sortOrder: number
  details: Details
}

export interface PeriodDescriptor {
  number: number
  periodType: string
}

export interface Details {
  xCoord: number
  yCoord: number
  zoneCode: string
  typeCode: string
  descKey: string
  duration: number
  committedByPlayerId: number
  drawnByPlayerId: number
  eventOwnerTeamId: number
}
