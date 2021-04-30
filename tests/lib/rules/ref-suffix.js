/**
 * @fileoverview ref variable ends with ref
 * @author wxpwxpwxp
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/ref-suffix')

const RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2017 } })
ruleTester.run('ref-suffix', rule, {

  valid: [
    'const fooRef = ref()',
    'const fooRef = computed()',
    {
      code: 'const fooRef = ref()',
      options: ['camelCase']
    },
    {
      code: 'const foo_ref = ref()',
      options: ['snake_case']
    },
    {
      code: 'const fooRef = computed()',
      options: ['camelCase']
    },
    {
      code: 'const foo_ref = computed()',
      options: ['snake_case']
    }
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: 'const foo = ref()',
      errors: [{
        message: 'foo should rename to fooRef'
      }]
    },
    {
      code: 'let fooRef = ref()',
      errors: [{
        message: 'expect const, not let'
      }]
    },
    {
      code: 'const foo = computed()',
      errors: [{
        message: 'foo should rename to fooRef'
      }]
    },
    {
      code: 'let fooRef = computed()',
      errors: [{
        message: 'expect const, not let'
      }]
    },
    {
      code: 'const fooRef = computed()',
      options: ['snake_case'],
      errors: [{
        message: 'fooRef should rename to foo_ref'
      }]
    },
    {
      code: 'const foo_ref = computed()',
      options: ['camelCase'],
      errors: [{
        message: 'foo_ref should rename to fooRef'
      }]
    },
    {
      code: 'const fooRef = ref()',
      options: ['snake_case'],
      errors: [{
        message: 'fooRef should rename to foo_ref'
      }]
    },
    {
      code: 'const foo_ref = ref()',
      options: ['camelCase'],
      errors: [{
        message: 'foo_ref should rename to fooRef'
      }]
    }
  ]
})
