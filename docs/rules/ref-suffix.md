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

#### TODO: camel option

## When Not To Use It

use it in vue-next, when declare a ref variable, check if variable name ends with `ref`

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
