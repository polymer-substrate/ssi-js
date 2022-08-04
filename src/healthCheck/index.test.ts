const SSI = require('../../dist')
const nock = require('nock')

const mockHealthCheckResponse = { "status": "OK" }

describe('HealthCheck', () => {
  test('healthCheck returns the health of the service', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/health')
      .reply(200, mockHealthCheckResponse)

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.healthCheck();

    // Assert that the expected request was made.
    scope.done()
  })
})