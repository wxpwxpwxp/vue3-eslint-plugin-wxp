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
      variableRename: '{{identifier}} should rename to {{identifier}}Ref',
      kindMessage: 'expect const, not {{kind}}'
    }
  },

  create: function(context) {
    // variables should be defined here

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    const renameMessage = function(node) {
      context.report({
        node,
        messageId: 'variableRename',
        data: {
          identifier: node.name
        }
      })
    }
    const kindMessage = function(node) {
      context.report({
        node,
        messageId: 'kindMessage',
        data: {
          kind: node.kind
        }
      })
    }

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {
      'VariableDeclaration > VariableDeclarator': (node) => {
        if (node.init?.type === 'CallExpression' &&
          (node.init?.callee?.name === 'ref' ||
          node.init?.callee?.name === 'computed')
        ) {
          if (!/Ref$/.test(node.id?.name ?? '')) {
            renameMessage(node.id)
          }
          if (node.parent?.kind && node.parent?.kind !== 'const') {
            kindMessage(node.parent)
          }
        }
      }
    }
  }
}
