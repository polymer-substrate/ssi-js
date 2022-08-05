export type DidMethods = {
  didMethods: string[],
}

export type KeyTypes = "Ed25519" | "secp256k1"

export type DidDocument = {
  did: {
    '@context': string,
    alsoKnownAs?: string,
    assertionMethod: string[][],
    authentication: string[][],
    capabilityDelegation: string[][],
    capabilityInvocation?: string[][],
    controller?: string,
    id: string,
    keyAgreement: string[][],
    service?: {}[],
    verificationMethod: {
      controller: string,
      id: string,
      publicKeyBase58: string
      publicKeyJwk?: {
        alg: string,
        crv: string,
        e: string,
        key_ops: string,
        kid: string,
        kty: string,
        n: string,
        use: string,
        x: string,
        y: string
      },
      publicKeyMultibase?: string,
      type: string,
    }[],
  }
}

export type Did = DidDocument & {
  privateKeyBase58: string
}