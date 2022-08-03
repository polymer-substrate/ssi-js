const SSI = require('../../dist')
const nock = require('nock')

const mockSchemaInput = {
  'author': 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
  'name': 'Email',
  'bogus': 'bogus',
  'schema': {
    '$id': 'email-schema-1.0',
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    'description': 'Email',
    'type': 'object',
    'properties': {
      'emailAddress': {
        'type': 'string',
        'format': 'email'
      }
    },
    'required': ['emailAddress'],
    'additionalProperties': false
  }
}

const mockSchemaOutput = {
  'id': '9de4bf6e-8876-4c69-ab2d-727cddbde404',
  'schema': {
    'type': 'https://w3c-ccg.github.io/vc-json-schemas/schema/2.0/schema.json',
    'version': '1.0.0',
    'id': '9de4bf6e-8876-4c69-ab2d-727cddbde404',
    'name': 'Email',
    'author': 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
    'authored': '2022-06-27T23:51:45Z',
    'schema': {
      '$id': 'email-schema-1.0',
      '$schema': 'https://json-schema.org/draft/2020-12/schema',
      'additionalProperties': false,
      'description': 'Email',
      'properties': {
        'emailAddress': {
          'format': 'email',
          'type': 'string'
        }
      },
      'required': [
        'emailAddress'
      ],
      'type': 'object'
    }
  }
}

describe('Schemas resource', () => {
  test('createSchema creates and returns a new schema', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .put('/v1/schemas', mockSchemaInput)
      .reply(200, mockSchemaOutput)

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.createSchema(mockSchemaInput);

    // Assert that the expected request was made.
    scope.done()
  })
})