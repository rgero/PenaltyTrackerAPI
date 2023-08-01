const teamList = [
    "anaheim ducks",
    "arizona coyotes",
    "boston bruins",
    "buffalo sabres",
    "calgary flames",
    "carolina hurricanes",
    "chicago blackhawks",
    "colorado avalanche",
    "columbus blue jackets",
    "dallas stars",
    "detroit red wings",
    "edmonton oilers",
    "florida panthers",
    "los angeles kings",
    "minnesota wild",
    "montreal canadiens",
    "nashville predators",
    "new jersey devils",
    "new york islanders",
    "new york rangers",
    "ottawa senators",
    "philadelphia flyers",
    "pittsburgh penguins",
    "san jose sharks",
    "seattle kraken",
    "st. louis blues",
    "tampa bay lightning",
    "toronto maple leafs",
    "vancouver canucks",
    "vegas golden knights",
    "washington capitals",
    "winnipeg jets"
]

const ValidateTeam = (targetTeam) => 
{
    // Handle Canadiens special since they have the accent.
    if (targetTeam.toLowerCase().includes("canadiens"))
    {
        targetTeam = "montreal canadiens"
    }

    return teamList.includes(targetTeam.toLowerCase());
}

module.exports = ValidateTeam;