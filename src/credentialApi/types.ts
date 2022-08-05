type Id = {
  id: string;
}

type Data = Record<string, string>

export type CreateCredentialRequest = {
  '@context'?: string,
  data: Data,
  expiry?: string
  issuer: string,
  schema?: string,
  subject: string,
}

type Credential = {
  '@context': string[],
  credentialSchema?: {
    id: string,
    type: string
  }
  credentialStatus?: string,
  credentialSubject: Id & Data,
  evidence?: string[],
  expirationDate?: string,
  id: string,
  issuanceDate: string,
  issuer: string,
  proof?: string,
  refreshService?: {
    id: string,
    type: string
  },
  termsOfUse?: {
    id: string,
    profile: string,
    prohibition: string[],
    type: string
  }[],
  type: string[],
}

export type CredentialResponse = {
  credential: Credential
}

export type CredentialsResponse = {
  credentials: Credential[]
}
