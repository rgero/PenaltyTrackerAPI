// This is the file for all the tests related to the query parser
const {parseInput, parseTeams} = require('../../queryparser');

test("Testing parseInput - valid input",()=> {
    const testString = "Colorado,Bruins";
    let result = parseInput(testString);
    expect(result).toContain('Colorado');
    expect(result).toContain('Bruins');

})

test("Testing parseInput - valid input regular string",()=> {
    const testString = "ColoradoBruins";
    let result = parseInput(testString);
    expect(result).toContain('ColoradoBruins');
})

test("Parse Teams - 3 Letter Key", ()=> {
    const testString="BOS,LAK";
    let result = parseTeams(testString);
    expect(result).toContain('Boston Bruins');
    expect(result).toContain('Los Angeles Kings')
})

test("Parse Teams - Team Name", ()=> {
    const testString="Boston Bruins";
    let result = parseTeams(testString);
    expect(result).toContain(["Boston Bruins"]);
    expect(result.length).toBe(1);
})