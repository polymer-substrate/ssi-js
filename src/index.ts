import { Base } from './base'
import { HealthCheck } from './healthCheck'
import { Readiness } from './readiness'
import { DecentralizedIdentityAPI } from './decentralizedIdentityApi'
import { Schemas } from './schemas'
import { CredentialAPI } from './credentialApi';
import { KeyStoreAPI } from './keyStoreApi';

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      );
    });
  });
}

class SSI extends Base { }
interface SSI extends HealthCheck, Readiness, DecentralizedIdentityAPI, KeyStoreAPI, Schemas, CredentialAPI { }
applyMixins(SSI, [HealthCheck, Readiness, DecentralizedIdentityAPI, KeyStoreAPI, Schemas, CredentialAPI])

export default SSI