const SSI = require('../../dist')
const nock = require('nock')

describe('Service resource', () => {
  test('getHealth returns the health of the service', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/health')
      .reply(200, { status: 'OK' })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getHealth();

    // Assert that the expected request was made.
    scope.done()
  })

  test('getReadiness returns the status of the service', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/readiness')
      .reply(200, {
        'status': {
          'status': 'ready',
          'message': 'all service ready'
        },
        'serviceStatuses': {
          'credential': {
            'status': 'ready'
          },
          'did': {
            'status': 'ready'
          },
          'schema': {
            'status': 'ready'
          }
        }
      })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getReadiness();

    // Assert that the expected request was made.
    scope.done()
  })
})