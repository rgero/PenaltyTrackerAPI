const Player = require('../../src/PenaltyFetcher/Player')

test("Constructs Valid Player URL", ()=> {
    let testPlayer = new Player();
    testPlayer.setName("Taylor Hall");
    testPlayer.setID(8475791)
    expect(()=> {testPlayer.constructURL()}).not.toThrow();

    expect(testPlayer.GetURL().toString()).toBe('http://nhl.com/player/taylor-hall-8475791')
})