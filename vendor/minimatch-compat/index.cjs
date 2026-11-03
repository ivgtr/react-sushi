// ESLint and its plugins still expect the pre-v9 callable CommonJS API.
// Matching is delegated to the patched v11 implementation, not reimplemented.
const modern = require('minimatch-patched');
const compat = modern.minimatch;
Object.assign(compat, modern);
module.exports = compat;
