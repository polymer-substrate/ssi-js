import { DidService, DidInput, Did, DidDocument } from './types'
import { Base } from '../base'

export class Dids extends Base {
  getDidService() {
    return this.request<DidService>('v1/dids')
  }

  createDid(params: DidInput) {
    return this.request<Did>('v1/dids/key', {
      method: 'PUT',
      body: JSON.stringify(params)
    })
  }

  getDid(did: string) {
    return this.request<DidDocument>('v1/dids/key/' + did)
  }
}