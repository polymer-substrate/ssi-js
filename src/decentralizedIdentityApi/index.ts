import { DidMethods, KeyTypes, Did, DidDocument } from './types'
import { Base } from '../base'

const resource = 'v1/dids'

export class DecentralizedIdentityAPI extends Base {
  getDidMethods() {
    return this.request<DidMethods>(resource)
  }

  createDid(method: string, keyType: KeyTypes) {
    const body = {
      keyType: keyType
    }

    return this.request<Did>(`${resource}/${method}`, {
      method: 'PUT',
      body: JSON.stringify(body)
    })
  }

  getDid(method: string, id: string) {
    return this.request<DidDocument>(`${resource}/${method}/${id}`)
  }
}