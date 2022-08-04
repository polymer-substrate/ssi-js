const SSI = require('../../dist')
const nock = require('nock')

const mockReadinessResponse = {
  "status": {
    "status": "ready",
    "message": "all service ready"
  },
  "serviceStatuses": {
    "credential": {
      "status": "ready"
    },
    "did": {
      "status": "ready"
    },
    "schema": {
      "status": "ready"
    }
  }
}

describe('Readiness', () => {
  test('getReadiness returns the status of the service', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/readiness')
      .reply(200, mockReadinessResponse)

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.readiness();

    // Assert that the expected request was made.
    scope.done()
  })
})