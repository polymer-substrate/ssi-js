export type DidMethods = {
  didMethods: string[],
}

export type DidDocument = {
  did: {
    '@context': string,
    alsoKnownAs?: string,
    id: string,
    verificationMethod: {
      id: string,
      type: string,
      controller: string,
      publicKeyBase58: string
    }[],
    authentication: string[][],
    assertionMethod: string[][],
    keyAgreement: string[][],
    capabilityDelegation: string[][],
  }
}

export type Did = DidDocument & {
  privateKeyBase58: string
}