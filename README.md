ember-config-helper
==============================================================================

Gaining access to an app's config file from a template only route or component can be annoying. This addon provides a convenience helper to read the config from within the template.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-config-helper
```


Usage
------------------------------------------------------------------------------

Let's say your environment.js file looks like this:
```js
module.exports = function (environment) {
  let ENV = {
    defaults: {
      username: "John Doe"
    }};

  return ENV;
};
```

This helper allows you to access that information as follows in your hbs file
```hbs
{{config "defaults.username"}}
```

This helper depends on the excellent [ember-get-config](https://github.com/briarsweetbriar/ember-get-config) to read the app config. as such it should also work within addons.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
