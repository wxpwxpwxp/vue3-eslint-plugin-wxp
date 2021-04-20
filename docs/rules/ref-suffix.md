# ref variable ends with ref (ref-suffix)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

const foo = ref()

```
![incorrect screenshot](https://github.com/wxpwxpwxp/vue3-eslint-plugin-wxp/blob/master/docs/screenshot/ref-suffix-error.png?raw=true)

Examples of **correct** code for this rule:

```js

const fooRef = ref()

```
![correct screenshot](https://github.com/wxpwxpwxp/vue3-eslint-plugin-wxp/blob/master/docs/screenshot/ref-suffix-success.png?raw=true)

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
