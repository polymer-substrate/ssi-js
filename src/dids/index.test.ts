const SSI = require('../../dist')
const nock = require('nock')

describe('Dids resource', () => {
  test('getDidService returns information about available services', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/v1/dids')
      .reply(200, { didMethods: ['key'] })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getDidService();

    // Assert that the expected request was made.
    scope.done()
  })

  test('createDid creates and returns a new key', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .put('/v1/dids/key', { keyType: 'Ed25519' })
      .reply(200, {
        'did': {
          '@context': 'https://www.w3.org/ns/did/v1',
          'id': 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
          'verificationMethod': [
            {
              'id': '#z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
              'type': 'Ed25519VerificationKey2018',
              'controller': 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
              'publicKeyBase58': '68unenrx2qt4591sFVE2tzqjNdVQJExFoBtDf6t2EyS3'
            }
          ],
          'authentication': [
            [
              '#z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR'
            ]
          ],
          'assertionMethod': [
            [
              '#z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR'
            ]
          ],
          'keyAgreement': [
            [
              '#z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR'
            ]
          ],
          'capabilityDelegation': [
            [
              '#z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR'
            ]
          ]
        },
        'privateKeyBase58': '6QQwGxkm6bTjK2dBCGqjC2K9n6uW1ptGWzRxuTZpyWbkEjZMUQt5eTKxEjgkJyz4usysZ1QAMWHo6zaoBL5eaYnUDWJThhMKZ2NigUEcTqw77p3cPDWeEHSrLVf'
      })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.createDid({ keyType: 'Ed25519' });

    // Assert that the expected request was made.
    scope.done()
  })

  test('getDid returns a Did document', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/v1/dids/key/did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR')
      .reply(200, {
        'did': {
          '@context': 'https://www.w3.org/ns/did/v1',
          'id': 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
          'verificationMethod': [
            {
              'id': '#z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
              'type': 'Ed25519VerificationKey2018',
              'controller': 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
              'publicKeyBase58': '68unenrx2qt4591sFVE2tzqjNdVQJExFoBtDf6t2EyS3'
            }
          ],
          'authentication': [
            [
              '#z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR'
            ]
          ],
          'assertionMethod': [
            [
              '#z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR'
            ]
          ],
          'keyAgreement': [
            [
              '#z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR'
            ]
          ],
          'capabilityDelegation': [
            [
              '#z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR'
            ]
          ]
        }
      })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getDid('did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR');

    // Assert that the expected request was made.
    scope.done()
  })
})