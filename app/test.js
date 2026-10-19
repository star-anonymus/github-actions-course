const assert = require('assert');
const { greet, sum } = require('./index');
assert.strictEqual(greet('student'), 'Hello, Student!');
assert.strictEqual(sum([1, 2, 3]), 6);
console.log(`All tests passed on Node ${process.version} (${process.platform})`);
