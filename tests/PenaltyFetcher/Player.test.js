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
        testPlayer = new Player();
        expect(()=>{testPlayer.setTeam("Boston Bruins")}).not.toThrow();
        expect(testPlayer.team).toBe("Boston Bruins");
    })

    test("Setting invalid team", ()=> {
        testPlayer = new Player();
        expect(()=>{testPlayer.setTeam("Boston Red Sox")}).toThrow("Invalid Player Team");
        expect(testPlayer.team).toBe("");
    })
})