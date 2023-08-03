const dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const Penalty = require('../../src/PenaltyFetcher/Penalty')


let penaltyTest;
beforeAll( ()=> {
    penaltyTest = new Penalty();
})

describe("Season Type", ()=> {

    test("Regular Season", () => {
        penaltyTest.setSeasonType("R");
        expect(penaltyTest.seasonType).toBe("Regular");
    })

    test("Pre Season", () => {
        penaltyTest.setSeasonType("PR");
        expect(penaltyTest.seasonType).toBe("Preseason");
    })

    test("Post Season", () => {
        penaltyTest.setSeasonType("P");
        expect(penaltyTest.seasonType).toBe("Post");
    })

    test("Unknown Season Type", () => {
        penaltyTest.setSeasonType("Test");
        expect(penaltyTest.seasonType).toBe("Unknown");
    })
})

describe("Opponent", ()=> {
    test("Valid Opponent", () => {
        let testTeam = "Boston Bruins";
        expect(()=> {penaltyTest.setOpponent(testTeam)}).not.toThrow();
        expect(penaltyTest.opposingTeam).toBe(testTeam);
    })

    test("Invalid Opponent", () => {
        expect(()=> {penaltyTest.setOpponent("Springfield Falcons")}).toThrow("Invalid Opponent Team")
    })
})

describe("Game Date",()=> { 
    test("Valid Date", ()=>{
        let dateString = "2022-02-23T00:00:00Z";
        expect(()=> {penaltyTest.setDate(dateString)}).not.toThrow();

        let correctDate = dayjs.utc("2022-02-23");
        expect(penaltyTest.date).toStrictEqual(correctDate);
    })

    test("Invalid Date", ()=> {
        let invalidDate = "Not a Date";
        expect(()=> {penaltyTest.setDate(invalidDate)}).toThrow("Penalty Date is invalid");
    })
})