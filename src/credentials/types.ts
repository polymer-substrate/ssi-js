type Id = {
  id: string;
}

type Data = Record<string, string>

export type CredentialInput = {
  Issuer: string,
  Subject: string,
  Schema: string,
  Data: Record<string, string>,
  Expiry: string
}

export type CredentialOutput =
  {
    credential: {
      '@context': string[],
      id: string,
      type: string[],
      issuer: string,
      issuanceDate: string,
      expirationDate: string,
      credentialSubject: Id & Data,
      credentialSchema: {
        id: string,
        type: string
      }
    }
  }