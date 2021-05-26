import Helper from '@ember/component/helper';
import config from 'ember-get-config';
import { get } from '@ember/object';

export default class extends Helper {
  config = config;

  compute([path]) {
    return get(this.config, path);
  }
}
