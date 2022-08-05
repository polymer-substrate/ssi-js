const SSI = require('../../dist')
const nock = require('nock')

const hostname = 'http://localhost:8080'

const mockId = 'z6MksfXFk3v1EYrdtbSXMNzAPfrQFXDkTKY5cWsZRx9vvdCJ'

describe('KeyStoreAPI', () => {
  test('storeKey stores a key', async () => {
    // Set up the mock request
    const scope = nock(hostname)
      .put('/v1/keys')
      .reply(200, {})

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.storeKey(
      '6N2oNE2D2M2ffY39sSrBfVXh213mAHFS16X9C8BCtPxHBDAuYUtBt4KxLsBJu68WVqTx2FgZUeM4bGNswBt955igyxJ3drdgDvBKd95rv59o4mMAhRzL9vDCsqb',
      'did:key:z6MksfXFk3v1EYrdtbSXMNzAPfrQFXDkTKY5cWsZRx9vvdCJ',
      'z6MksfXFk3v1EYrdtbSXMNzAPfrQFXDkTKY5cWsZRx9vvdCJ',
      'Ed25519VerificationKey2018'
    );

    // Assert that the expected request was made.
    scope.done()
  })

  test('getDetailsForKey returns details for a key', async () => {
    // Set up the mock request
    const scope = nock(hostname)
      .get('/v1/keys/z6MksfXFk3v1EYrdtbSXMNzAPfrQFXDkTKY5cWsZRx9vvdCJ')
      .reply(200, { id: "hello TBD" })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getDetailsForKey(mockId);

    // Assert that the expected request was made.
    scope.done()
  })
})