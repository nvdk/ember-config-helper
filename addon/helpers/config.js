import Helper from '@ember/component/helper';
import config from 'ember-get-config';

export default class extends Helper {
  config = config;

  compute([path]) {
    const keys = path.split('.');
    let digged = this.config;
    for (const key of keys) {
      if (typeof digged === 'undefined' || digged === null) {
        return undefined;
      }
      else {
        digged = digged[key];
      }
    }
    return digged;
  }
}
