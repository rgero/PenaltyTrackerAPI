const PenaltyFetcher = require('../../src/PenaltyFetcher/PenaltyFetcher');
const axios = require("axios");

const {testData} = require('../testData');
const {testGame} = require('../testGame');

jest.mock("axios");

beforeAll(() => {
    axios.create.mockReturnThis();
    let mockedData = {data: testData};
    axios.get.mockResolvedValue(mockedData);
});

describe("Date Validation", ()=> {
  test("Invalid Start Date", () => {
    var penaltyFetcher = new PenaltyFetcher();
    var invalidDate = "INVALID";
    expect(()=> {penaltyFetcher.setStartDate(invalidDate)}).toThrow("Start Date is not valid");
  })
    
  test("Invalid End Date", () => {
    var penaltyFetcher = new PenaltyFetcher();
    var invalidDate = "INVALID";
    expect(()=> {penaltyFetcher.setEndDate(invalidDate)}).toThrow("End Date is not valid");
  })

  test("Valid Start Date", ()=> {
    var penaltyFetcher = new PenaltyFetcher();
    var date = "2022-02-26";
    expect(()=> {penaltyFetcher.setStartDate(date)}).not.toThrow();
  })

  test("Valid End Date", ()=> {
    var penaltyFetcher = new PenaltyFetcher();
    var date = "2022-02-26";
    expect(()=> {penaltyFetcher.setEndDate(date)}).not.toThrow();
  })

  test("Start Date after End Date", async ()=> {
    var penaltyFetcher = new PenaltyFetcher();
    var startDate = "2022-02-22";
    var endDate = "2013-02-11";

    penaltyFetcher.setStartDate(startDate);
    penaltyFetcher.setEndDate(endDate);
    
    penaltyFetcher.FetchGameURLs().catch(e => expect(e.message).toMatch('Start and End date are invalid'));
  })

  test("Start Date before End Date", async ()=> {
    var penaltyFetcher = new PenaltyFetcher();
    var startDate = "2022-02-22";
    var endDate = "2023-02-25";

    penaltyFetcher.setStartDate(startDate);
    penaltyFetcher.setEndDate(endDate);
    
    expect(()=> {penaltyFetcher.FetchGameURLs()}).not.toThrow();
  })

  test("Start Date is End Date", async ()=> {
    var penaltyFetcher = new PenaltyFetcher();
    var startDate = "2022-02-22";
    var endDate = "2023-02-22";

    penaltyFetcher.setStartDate(startDate);
    penaltyFetcher.setEndDate(endDate);
    
    expect(()=> {penaltyFetcher.FetchGameURLs()}).not.toThrow();
  })
})

test("Run Game URLS", async () => {
  var penaltyFetcher = new PenaltyFetcher();
  const expectedResult = ["/api/v1/game/2021020511/feed/live", 
                          "/api/v1/game/2021020528/feed/live", 
                          "/api/v1/game/2021020584/feed/live", 
                          "/api/v1/game/2021020848/feed/live", 
                          "/api/v1/game/2021020536/feed/live", 
                          "/api/v1/game/2021020595/feed/live"
                        ]
  await penaltyFetcher.FetchGameURLs();
  await expect(penaltyFetcher.gameURLs).toEqual(expectedResult);
});

test("Perform gets correct data", async () => {
  var testFetcher = new PenaltyFetcher();
  let mockedData = {data: testGame};

  axios.get.mockResolvedValue(mockedData);
  await testFetcher.ProcessGame("dummy entry");

  let penaltyList = []
  for(const penalty of testFetcher.penaltyList)
  {
    penaltyList.push(penalty.toString());
  }

  let correctValue = [
    '{"player":"{\\"name\\":\\"Mikael Granlund\\",\\"team\\":\\"Nashville Predators\\",\\"id\\":8475798,\\"url\\":\\"\\"}","penalty":"Holding","opponent":"Florida Panthers","home":false,"date":"2022-02-23T00:00:00.000Z","refereeList":["{\\"name\\":\\"Kelly Sutherland\\",\\"id\\":2265}","{\\"name\\":\\"Jean Hebert\\",\\"id\\":4604}"],"season":"20212022","seasonType":"Regular"}',
    '{"player":"{\\"name\\":\\"Aleksander Barkov\\",\\"team\\":\\"Florida Panthers\\",\\"id\\":8477493,\\"url\\":\\"\\"}","penalty":"Interference","opponent":"Nashville Predators","home":false,"date":"2022-02-23T00:00:00.000Z","refereeList":["{\\"name\\":\\"Kelly Sutherland\\",\\"id\\":2265}","{\\"name\\":\\"Jean Hebert\\",\\"id\\":4604}"],"season":"20212022","seasonType":"Regular"}',
    '{"player":"{\\"name\\":\\"MacKenzie Weegar\\",\\"team\\":\\"Florida Panthers\\",\\"id\\":8477346,\\"url\\":\\"\\"}","penalty":"Roughing","opponent":"Nashville Predators","home":false,"date":"2022-02-23T00:00:00.000Z","refereeList":["{\\"name\\":\\"Kelly Sutherland\\",\\"id\\":2265}","{\\"name\\":\\"Jean Hebert\\",\\"id\\":4604}"],"season":"20212022","seasonType":"Regular"}',
    '{"player":"{\\"name\\":\\"Philip Tomasino\\",\\"team\\":\\"Nashville Predators\\",\\"id\\":8481577,\\"url\\":\\"\\"}","penalty":"Too many men on the ice","opponent":"Florida Panthers","home":false,"date":"2022-02-23T00:00:00.000Z","refereeList":["{\\"name\\":\\"Kelly Sutherland\\",\\"id\\":2265}","{\\"name\\":\\"Jean Hebert\\",\\"id\\":4604}"],"season":"20212022","seasonType":"Regular"}',
    '{"player":"{\\"name\\":\\"Alexandre Carrier\\",\\"team\\":\\"Nashville Predators\\",\\"id\\":8478851,\\"url\\":\\"\\"}","penalty":"Cross checking","opponent":"Florida Panthers","home":false,"date":"2022-02-23T00:00:00.000Z","refereeList":["{\\"name\\":\\"Kelly Sutherland\\",\\"id\\":2265}","{\\"name\\":\\"Jean Hebert\\",\\"id\\":4604}"],"season":"20212022","seasonType":"Regular"}',
    '{"player":"{\\"name\\":\\"Sam Bennett\\",\\"team\\":\\"Florida Panthers\\",\\"id\\":8477935,\\"url\\":\\"\\"}","penalty":"Cross checking","opponent":"Nashville Predators","home":false,"date":"2022-02-23T00:00:00.000Z","refereeList":["{\\"name\\":\\"Kelly Sutherland\\",\\"id\\":2265}","{\\"name\\":\\"Jean Hebert\\",\\"id\\":4604}"],"season":"20212022","seasonType":"Regular"}'
  ]

  expect(penaltyList.length).toEqual(correctValue.length);
  expect(penaltyList).toEqual(correctValue);

});

