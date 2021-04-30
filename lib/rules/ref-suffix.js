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
    type: 'suggestion',
    docs: {
      description: 'ref variable ends with ref',
      category: 'Code Style',
      recommended: true
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      {
        enum: ['camelCase', 'snake_case']
      }
    ],
    // 错误信息描述
    messages: {
      renameToCamelCase: '{{invalidIdentifier}} should rename to {{correctIdentifier}}',
      renameToSnakeCase: '{{invalidIdentifier}} should rename to {{correctIdentifier}}',
      kindMessage: 'expect const, not {{kind}}'
    }
  },

  create: function(context) {
    // variables should be defined here

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------
    /**
     * @param {string} strs
     */
    const stringToSnakeCase = function(strs) {
      if (!strs) return ''
      const strsArr = strs.split('')
      for (let i = 0; i < strsArr.length; i++) {
        if (/^[A-Z]$/.test(strsArr[i])) {
          strsArr[i] = (i === 0 ? '' : '_') + strsArr[i].toLowerCase()
        }
      }
      return strsArr.join('')
    }

    /**
     * @param {string} strs
     */
    const stringToCamelCase = function(strs) {
      if (!strs) return ''
      const strsArr = strs.split('')
      const result = []
      let needToUpper = false
      for (let i = 0; i < strsArr.length; i++) {
        if (needToUpper) {
          if (/^[a-z]$/.test(strsArr[i])) {
            result.push(strsArr[i].toUpperCase())
            needToUpper = false
            continue
          }
        }
        if (strsArr[i] === '_') {
          needToUpper = true
        } else {
          result.push(strsArr[i])
        }
      }
      return result.join('')
    }

    const renameMessage = function(node, isSnakeCase) {
      const formatter = isSnakeCase ? stringToSnakeCase : stringToCamelCase
      context.report({
        node,
        messageId: isSnakeCase ? 'renameToSnakeCase' : 'renameToCamelCase',
        data: {
          invalidIdentifier: node.name,
          correctIdentifier: formatter(node.name + (/(r|R)ef$/.test(node.name) ? '' : 'Ref'))
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
          const isSnakeCase = context.options[0] === 'snake_case'
          const identifierPattern = isSnakeCase ? /_ref$/ : /Ref$/
          if (!identifierPattern.test(node.id?.name ?? '')) {
            renameMessage(node.id, isSnakeCase)
          }
          if (node.parent?.kind && node.parent?.kind !== 'const') {
            kindMessage(node.parent)
          }
        }
      }
    }
  }
}
