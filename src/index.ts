import { Base } from './base'
import { Status } from './status'
import { Dids } from './dids'
import { Schemas } from './schemas'
import { Credentials } from './credentials';

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
interface SSI extends Status, Dids, Schemas, Credentials { }
applyMixins(SSI, [Status, Dids, Schemas, Credentials])

export default SSI