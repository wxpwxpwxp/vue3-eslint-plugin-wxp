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
    'const fooRef = ref()'
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: 'const foo = ref()',
      errors: [{
        message: 'foo should rename to fooRef'
      }]
    }
  ]
})
