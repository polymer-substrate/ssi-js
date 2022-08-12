import { mockCreateSchemaRequest, SchemaResponse, SchemasResponse } from './types'
import { Base } from '../base'

export class SchemaAPI extends Base {
  getSchema(id: string) {
    return this.request<SchemaResponse>('v1/schemas/' + id)
  }

  getSchemas() {
    return this.request<SchemasResponse>('v1/schemas')
  }

  createSchema(params: mockCreateSchemaRequest) {
    return this.request<SchemaResponse>('v1/schemas', {
      method: 'PUT',
      body: JSON.stringify(params)
    })
  }
}