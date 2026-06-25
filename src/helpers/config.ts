import Helper from '@ember/component/helper';
import { get } from '@ember/object';
import type Owner from '@ember/owner';
import type { ContentValue } from '@glint/template';

interface ConfigSignature {
  Args: {
    Positional: [path: string];
  };
  // `unknown` would be more correct, but Glint doesn't support that for helper return types
  Return: ContentValue;
}

export default class ConfigHelper extends Helper<ConfigSignature> {
  config: unknown;

  constructor(owner: Owner) {
    super(owner);

    this.config = owner.factoryFor('config:environment')?.class;
  }

  compute([path]: [string]) {
    return get(this.config, path) as ContentValue;
  }
}
