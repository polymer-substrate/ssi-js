import { CreateCredentialRequest, CredentialResponse, CredentialsResponse, } from './types'
import { Base } from '../base'

const resource = 'v1/credentials'

export class Credentials extends Base {
  createCredential(requestBody: CreateCredentialRequest) {
    return this.request<Credential>(resource, {
      method: 'PUT',
      body: JSON.stringify(requestBody)
    })
  }

  getCredential(id: string) {
    return this.request<CredentialResponse>(`${resource}/${id}`)
  }

  getCredentialsByIssuer(issuer: string) {
    return this.request<CredentialsResponse>(`${resource}?issuer=${issuer}`)
  }

  getCredentialsBySchema(schema: string) {
    return this.request<CredentialsResponse>(`${resource}?schema=${schema}`)
  }

  getCredentialsBySubject(subject: string) {
    return this.request<CredentialsResponse>(`${resource}?subject=${subject}`)
  }

  deleteCredentials(id: string) {
    return this.request<CredentialResponse>(`${resource}/${id}`, {
      method: 'DELETE'
    })
  }
}