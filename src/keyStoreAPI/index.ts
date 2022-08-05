import { KeyDetails } from './types';
import { Base } from '../base'

const resource = 'v1/keys'

export class KeyStoreAPI extends Base {
  storeKey(base58PrivateKey: string, controller: string, id: string, type: string) {
    const body = {
      base58PrivateKey,
      controller,
      id,
      type
    }

    return this.request<string | null>(`${resource}`, {
      method: 'PUT',
      body: JSON.stringify(body)
    })
  }

  getDetailsForKey(id: string) {
    return this.request<KeyDetails>(`${resource}/${id}`)
  }
}