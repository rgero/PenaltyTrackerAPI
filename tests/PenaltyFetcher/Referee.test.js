const Referee = require('../../src/PenaltyFetcher/Referee')

test("Referee - Checks printout", ()=>{
    let testRef = new Referee();
    testRef.name = "Lobster Stripe"
    testRef.id = 12434

    let correctvalue = "{\"name\":\"Lobster Stripe\",\"id\":12434}"
    expect(testRef.toString()).toBe(correctvalue)
})