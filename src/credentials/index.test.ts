const SSI = require('../../dist')
const nock = require('nock')

const mockCredentialInput = {
  'Issuer': 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
  'Subject': 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
  'Schema': '9de4bf6e-8876-4c69-ab2d-727cddbde404',
  'Data': {
    'emailAddress': 'hello@example.com'
  },
  'Expiry': '2022-12-31T05:00:00+00:00'
}

const mockCredentialOutput = {
  'credential': {
    '@context': [
      'https://www.w3.org/2018/credentials/v1'
    ],
    'id': 'd7bd7382-cbb0-4a23-92ad-7e9b19399846',
    'type': [
      'VerifiableCredential'
    ],
    'issuer': 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
    'issuanceDate': '2022-06-28T00:38:04Z',
    'expirationDate': '2022-12-31T05:00:00+00:00',
    'credentialSubject': {
      'emailAddress': 'hello@example.com',
      'id': 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR'
    },
    'credentialSchema': {
      'id': '9de4bf6e-8876-4c69-ab2d-727cddbde404',
      'type': 'JsonSchemaValidator2018'
    }
  }
}

describe('Credentials resource', () => {
  test('createCredential creates and returns a new credential', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .put('/v1/credentials', mockCredentialInput)
      .reply(200, mockCredentialOutput)

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.createCredential(mockCredentialInput);

    // Assert that the expected request was made.
    scope.done()
  })
})