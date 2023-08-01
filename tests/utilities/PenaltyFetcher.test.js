const PenaltyFetcher = require('../../src/utilities/PenaltyFetcher');
const axios = require("axios");
const {testData} = require('../testData');

jest.mock("axios");

beforeAll(() => {
    axios.create.mockReturnThis();
});

test("Run Game URLS", async () => {
  var penaltyFetcher = new PenaltyFetcher();
  let mockedData = {data: testData};

  const expectedResult = ["/api/v1/game/2021020511/feed/live", 
                          "/api/v1/game/2021020528/feed/live", 
                          "/api/v1/game/2021020584/feed/live", 
                          "/api/v1/game/2021020848/feed/live", 
                          "/api/v1/game/2021020536/feed/live", 
                          "/api/v1/game/2021020595/feed/live"
                        ]

  axios.get.mockResolvedValue(mockedData);
  await penaltyFetcher.FetchGameURLs();
  await expect(penaltyFetcher.gameURLs).toEqual(expectedResult);
});