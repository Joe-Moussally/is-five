var assert = require('assert');
var isFive = require('./index.js');

console.log('Running tests...\n');

// Test cases
var tests = [
  { input: 5, expected: true, description: 'isFive(5) should return true' },
  { input: '5', expected: true, description: 'isFive("5") should return true' },
  { input: 4, expected: false, description: 'isFive(4) should return false' },
  { input: '4', expected: false, description: 'isFive("4") should return false' },
  { input: 0, expected: false, description: 'isFive(0) should return false' },
  { input: '0', expected: false, description: 'isFive("0") should return false' },
  { input: -5, expected: false, description: 'isFive(-5) should return false' },
  { input: 5.0, expected: true, description: 'isFive(5.0) should return true' },
  { input: 5.5, expected: false, description: 'isFive(5.5) should return false' },
  { input: null, expected: false, description: 'isFive(null) should return false' },
  { input: undefined, expected: false, description: 'isFive(undefined) should return false' },
  { input: '', expected: false, description: 'isFive("") should return false' },
  { input: 'abc', expected: false, description: 'isFive("abc") should return false' },
  { input: [], expected: false, description: 'isFive([]) should return false' },
  { input: {}, expected: false, description: 'isFive({}) should return false' },
  { input: true, expected: false, description: 'isFive(true) should return false' },
  { input: false, expected: false, description: 'isFive(false) should return false' }
];

var passed = 0;
var failed = 0;

tests.forEach(function(test) {
  try {
    var result = isFive(test.input);
    assert.strictEqual(result, test.expected, test.description);
    console.log('✓', test.description);
    passed++;
  } catch (error) {
    console.log('✗', test.description);
    console.log('  Expected:', test.expected, 'Got:', isFive(test.input));
    failed++;
  }
});

console.log('\n' + '='.repeat(50));
console.log('Tests passed:', passed);
console.log('Tests failed:', failed);
console.log('Total tests:', tests.length);

if (failed === 0) {
  console.log('\n✓ All tests passed!');
  process.exit(0);
} else {
  console.log('\n✗ Some tests failed!');
  process.exit(1);
}

