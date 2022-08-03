# Javascript client for TBD's SSI Service

## Introduction

This repository contains a tiny, universal client for interacting with [TBD's SSI Service](https://github.com/TBD54566975/ssi-service).

## Installation
Since this client is still in early stages, we haven't yet published to npm. Until then, we suggest using [`npm link`](https://docs.npmjs.com/cli/v8/commands/npm-link) to use this in your own project. Steps:

```bash
# clone this repo somewhere
git clone https://github.com/wrk-corp/ssi-js.git
# install deps
npm install
# transpile typescript and build bundles
npm run build

# cd into your project dir
cd /path/to/your/project
# first creates a global link, and then links the global installation target into your project's node_modules folder.
npm link ../path/to/where/you/cloned/ssi-js

# profit
```

## Usage

Import `ssi-js` module in your project and initialize it with the url to the SSI service, it defaults to https://localhost:8080.

```js
import SSI from 'ssi-js'

const SSIClient = new SSI()

DevToClient.getHealth().then((data) => {
    console.log(data)
})

DevToClient.getReadiness().then((data) => {
    console.log(data)
})
```

## What's Supported?

- [x] [DID Management](https://www.w3.org/TR/did-core/)
    - Using [did:key](https://w3c-ccg.github.io/did-method-key/)
- [x] [Verifiable Credential Schema](https://w3c-ccg.github.io/vc-json-schemas/v2/index.html) Management
- [ ] [Verifiable Credential](https://www.w3.org/TR/vc-data-model) Issuance & Verification
- [ ] Requesting, Receiving, and the Validation of Verifiable Claims
  using [Presentation Exchange](https://identity.foundation/presentation-exchange/)
- [ ] Applying for Verifiable Credentials using [Credential Manifest](https://identity.foundation/credential-manifest/)
- [ ] Revocations of Verifiable Credentials using the [Status List 2021](https://w3c-ccg.github.io/vc-status-list-2021/)
- [ ] [Decentralized Web Node](https://identity.foundation/decentralized-web-node/spec/) Messaging
