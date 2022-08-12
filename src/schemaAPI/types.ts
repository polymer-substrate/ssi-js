type Property = Record<string, string>

type Create = {
  '$id': string,
  '$schema': string,
}

type Schema = {
  additionalProperties: boolean
  description: string,
  properties: Record<string, Property>
  required: string[],
  type: string,
}

export type mockCreateSchemaRequest = {
  author: string,
  name: string,
  schema: Create & Schema
}

export type SchemaResponse = {
  type: string,
  version: string,
  id: string,
  name: string,
  author: string,
  authored: string,
  schema: Schema,
}

export type SchemasResponse = {
  schemas: SchemaResponse[]
}