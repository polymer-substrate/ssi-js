import { SchemaInput, SchemaOutput } from './types'
import { Base } from '../base'

export class Schemas extends Base {
  createSchema(params: SchemaInput) {
    return this.request<SchemaOutput>('v1/schemas', {
      method: 'PUT',
      body: JSON.stringify(params)
    })
  }
}