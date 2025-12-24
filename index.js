/**
 * Check if a value is five (5).
 *
 * @param {*} value - The value to check
 * @returns {boolean} Returns `true` if the value is five, else `false`
 * @example
 *
 * isFive(5);
 * //=> true
 *
 * isFive('5');
 * //=> true
 *
 * isFive(4);
 * //=> false
 */

function isFive(value) {
  // Handle null and undefined
  if (value == null) {
    return false;
  }

  // Convert to number if it's a string
  var num = typeof value === 'string' ? Number(value) : value;

  // Check if it's a valid number and equals 5
  return typeof num === 'number' && !isNaN(num) && num === 5;
}

module.exports = isFive;

