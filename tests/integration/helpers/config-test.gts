import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { config } from '#src/index.ts';
import configLegacy from '#src/helpers/config.ts';

module('Integration | Helper | config', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct value', async function (assert) {
    await render(
      <template>
        <div data-test>{{config "ember-config-helper.testData.field1"}}</div>
      </template>,
    );

    assert.dom('[data-test]').hasText('test');
  });

  test('it renders the correct value', async function (assert) {
    await render(
      <template>
        <div data-test>{{configLegacy
            "ember-config-helper.testData.field1"
          }}</div>
      </template>,
    );

    assert.dom('[data-test]').hasText('test');
  });
});
