import Helper from '@ember/component/helper';
import { get } from '@ember/object';

class ConfigHelper extends Helper {
  config;
  constructor(owner) {
    super(owner);
    this.config = owner.factoryFor('config:environment')?.class;
  }
  compute([path]) {
    return get(this.config, path);
  }
}

export { ConfigHelper as default };
//# sourceMappingURL=config.js.map
