export type DidService = {
  didMethods: string[],
}

export type DidInput = {
  keyType: 'Ed25519' | 'secp256k1',
}

export type DidDocument = {
  did: {
    '@context': string,
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