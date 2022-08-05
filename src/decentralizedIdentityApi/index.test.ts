const SSI = require('../../dist')
const nock = require('nock')

const hostname = 'http://localhost:8080'

const mockId = 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR'

describe('DecentralizedIdentityAPI', () => {
  test('getDidMethods returns available methods', async () => {
    // Set up the mock request
    const scope = nock(hostname)
      .get('/v1/dids')
      .reply(200, { didMethods: ['key'] })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getDidMethods();

    // Assert that the expected request was made.
    scope.done()
  })

  test('createDid creates and returns a new DID', async () => {
    // Set up the mock request
    const scope = nock(hostname)
      .put('/v1/dids/key', { "keyType": "Ed25519" })
      .reply(200, { did: 'hello TBD!', privateKeyBase58: '54566975' })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.createDid('key', 'Ed25519');

    // Assert that the expected request was made.
    scope.done()
  })

  test('getDid returns a DID document', async () => {
    // Set up the mock request
    const scope = nock(hostname)
      .get('/v1/dids/key/' + mockId)
      .reply(200, { did: 'hello TBD!' })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getDid('key', mockId);

    // Assert that the expected request was made.
    scope.done()
  })
})