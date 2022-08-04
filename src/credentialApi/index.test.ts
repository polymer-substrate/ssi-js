const SSI = require('../../dist')
const nock = require('nock')

const mockCreateCredentialRequest = {
  "issuer": "did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR",
  "subject": "did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR",
  "data": {
    "emailAddress": "hello@example.com"
  }
}

describe('Credentials resource', () => {
  test('createCredential creates and returns a new credential', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .put('/v1/credentials', mockCreateCredentialRequest)
      .reply(200, { credential: "hello TBD" })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.createCredential(mockCreateCredentialRequest);

    // Assert that the expected request was made.
    scope.done()
  })

  test('getCredential returns a credential', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/v1/credentials/c5b9895c-8422-4e69-b1e6-6240b6949c1d')
      .reply(200, { credential: "hello TBD" })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getCredential('c5b9895c-8422-4e69-b1e6-6240b6949c1d');

    // Assert that the expected request was made.
    scope.done()
  })

  test('getCredentialsByIssuer returns a list of credentials', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/v1/credentials?issuer=did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR')
      .reply(200, { credentials: "hello TBD" })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getCredentialsByIssuer('did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR');

    // Assert that the expected request was made.
    scope.done()
  })

  test('getCredentialsBySchema returns a list of credentials', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/v1/credentials?schema=c5c5dba5-df2b-4632-adc2-263cab249fd7')
      .reply(200, { credentials: "hello TBD" })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getCredentialsBySchema('c5c5dba5-df2b-4632-adc2-263cab249fd7');

    // Assert that the expected request was made.
    scope.done()
  })

  test('getCredentialsBySubject returns a list of credentials', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/v1/credentials?subject=did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR')
      .reply(200, { credentials: "hello TBD" })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getCredentialsBySubject('did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR');

    // Assert that the expected request was made.
    scope.done()
  })
})