import { CredentialInput, CredentialOutput } from './types'
import { Base } from '../base'

export class Credentials extends Base {
  createCredential(params: CredentialInput) {
    return this.request<CredentialOutput>('v1/credentials', {
      method: 'PUT',
      body: JSON.stringify(params)
    })
  }
}