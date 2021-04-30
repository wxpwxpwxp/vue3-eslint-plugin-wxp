/**
 * @fileoverview ref variable ends with ref
 * @author wxpwxpwxp
 */
'use strict';
const path = require('path');

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const requireIndex = require('requireindex');

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(path.resolve(__dirname, './rules'));
