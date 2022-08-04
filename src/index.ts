import { Base } from './base'
import { HealthCheck } from './healthCheck'
import { Readiness } from './readiness'
import { Dids } from './dids'
import { Schemas } from './schemas'
import { Credentials } from './credentialApi';

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
interface SSI extends HealthCheck, Readiness, Dids, Schemas, Credentials { }
applyMixins(SSI, [HealthCheck, Readiness, Dids, Schemas, Credentials])

export default SSI