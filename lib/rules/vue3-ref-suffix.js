/**
 * @fileoverview ref variable ends with ref
 * @author wxpwxpwxp
 */
'use strict'

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'ref variable ends with ref',
      category: 'Fill me in',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
    // 错误信息描述
    messages: {
      variableRename: '{{identifier}} should rename to {{identifier}}Ref'
    }
  },

  create: function(context) {
    // variables should be defined here

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {
      'VariableDeclaration VariableDeclarator': (node) => {
        if (node.init.type === 'CallExpression' && node.init.callee.name === 'ref') {
          if (!/Ref$/.test(node.id.name)) {
            context.report({
              node,
              messageId: 'variableRename',
              data: {
                identifier: node.id.name
              }
            })
          }
        }
      }
    }
  }
}
