module.exports = function toReadable (number) {
  const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  if (!number) return 'zero';

  if (numbers[number]) return numbers[number];

  if (number < 100) {
    let [first, second] = number.toString().split('');
    return numbers[first + '0'] + ' ' + numbers[second];
  }

  let [first, second, third] = number.toString().split('');
  if (numbers[second + third]) {
    return numbers[first] + ' hundred ' + numbers[second + third];
  }

  if (second === '0' && third === '0') return numbers[first] + ' hundred';

  if (second === '0') return numbers[first] + ' hundred ' + numbers[third];

  return numbers[first] + ' hundred ' + numbers[second + '0'] + ' ' + numbers[third];
}
