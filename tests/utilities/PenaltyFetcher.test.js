const PenaltyFetcher = require('../../src/utilities/PenaltyFetcher');

test("Run Game URLS", async () => {
  // This should be mocked in the future, but for now it's fine.
  // I'm not happy with it but I need to investigate mocking axios properly.
  var penaltyFetcher = new PenaltyFetcher();
  penaltyFetcher.setTargetDate("2022-02-22");

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