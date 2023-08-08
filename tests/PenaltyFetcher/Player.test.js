const Player = require('../../src/PenaltyFetcher/Player')

test("Constructs Valid Player URL", ()=> {
    let testPlayer = new Player();
    testPlayer.setName("Taylor Hall");
    testPlayer.setID(8475791)
    expect(()=> {testPlayer.constructURL()}).not.toThrow();

    expect(testPlayer.GetURL().toString()).toBe('http://nhl.com/player/taylor-hall-8475791')
})

describe("Player - Teams", ()=> {

    test("Setting a valid team", ()=> {
        let testPlayer = new Player();
        expect(()=>{testPlayer.setTeam("Boston Bruins")}).not.toThrow();
        expect(testPlayer.team).toBe("Boston Bruins");
    })

    test("Setting invalid team", ()=> {
        let testPlayer = new Player();
        expect(()=>{testPlayer.setTeam("Boston Red Sox")}).toThrow("Invalid Player Team");
        expect(testPlayer.team).toBe("");
    })
})

test("Full player to String", ()=>{
    let testPlayer = new Player();
    testPlayer.setName("Sam Bennett")
    testPlayer.setTeam("Florida Panthers")
    testPlayer.setID(8477935);
    let correctString = "{\"name\":\"Sam Bennett\",\"team\":\"Florida Panthers\",\"id\":8477935,\"url\":\"http://nhl.com/player/sam-bennett-8477935\"}"
    expect(testPlayer.toString()).toBe(correctString);
})

test("Full Player to JSON", () => {
    let testPlayer = new Player();
    testPlayer.setName("Sam Bennett")
    testPlayer.setTeam("Florida Panthers")
    testPlayer.setID(8477935);
    
    let correctValue = {"id": 8477935, "name": "Sam Bennett", "team": "Florida Panthers", "url": "http://nhl.com/player/sam-bennett-8477935"};
    expect(testPlayer.toJSON()).toStrictEqual(correctValue);
})