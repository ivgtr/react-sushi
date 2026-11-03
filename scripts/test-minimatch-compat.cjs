const assert = require('node:assert/strict');
const minimatch = require('minimatch');
const modern = require('minimatch-patched');
assert.equal(typeof minimatch, 'function');
for (const [path, pattern, options, expected] of [
  ['src/a.tsx', 'src/**/*.tsx', {}, true],
  ['src/sub/a.tsx', 'src/**/*.tsx', {}, true],
  ['src/a.ts', 'src/**/*.tsx', {}, false],
  ['src/.hidden.tsx', 'src/**/*.tsx', {}, false],
  ['src/.hidden.tsx', 'src/**/*.tsx', { dot: true }, true],
  ['b.js', '{a,b}.js', {}, true],
  ['file.test.ts', '*.!(js)', {}, true],
  ['src/x.js', '!src/*.js', {}, false],
]) {
  assert.equal(minimatch(path, pattern, options), expected, `${path} ${pattern}`);
  assert.equal(minimatch(path, pattern, options), modern.minimatch(path, pattern, options));
}
assert.equal(new minimatch.Minimatch('src/**/*.tsx').match('src/a.tsx'), true);
assert.deepEqual(['a.js', 'a.ts'].filter(minimatch.filter('*.js')), ['a.js']);
assert.equal(require('minimatch-patched/package.json').version, '11.0.4');
console.log('minimatch compatibility checks passed');
