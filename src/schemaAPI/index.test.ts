const SSI = require('../../dist')
const nock = require('nock')

const mockCreateSchemaRequest = {
  'author': 'did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR',
  'name': 'Email',
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

describe('SchemasAPI', () => {
  test('createSchema creates and returns a new schema', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .put('/v1/schemas', mockCreateSchemaRequest)
      .reply(200, { id: 'hello', schema: 'TBD' })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.createSchema(mockCreateSchemaRequest);

    // Assert that the expected request was made.
    scope.done()
  })

  test('getSchema returns a schema', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/v1/schemas/c5c5dba5-df2b-4632-adc2-263cab249fd7')
      .reply(200, { id: 'c5c5dba5-df2b-4632-adc2-263cab249fd7', schema: 'TBD' })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getSchema('c5c5dba5-df2b-4632-adc2-263cab249fd7');

    // Assert that the expected request was made.
    scope.done()
  })

  test('getSchemas returns all schemas', async () => {
    // Set up the mock request
    const scope = nock('http://localhost:8080')
      .get('/v1/schemas')
      .reply(200, { schemas: [{ id: 'hello', schema: 'TBD' }] })

    // Make the request
    const SSIClient = new SSI();
    await SSIClient.getSchemas();

    // Assert that the expected request was made.
    scope.done()
  })
})