type Property = Record<string, string>

type Schema = {
  '$schema': string,
  description: string,
  type: string,
  properties: Record<string, Property>
  required: string[],
  additionalProperties: boolean
}

export type SchemaInput = {
  author: string,
  name: string,
  schema: Schema
}

export type SchemaOutput = {
  id: string,
  schema: {
    type: string,
    version: string,
    id: string,
    name: string,
    author: string,
    authored: string,
    schema: Schema
  }
}