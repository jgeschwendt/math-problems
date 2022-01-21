import { array } from './lib';

/**
 * @link https://projecteuler.net/problem=17
 */
describe('Problem 17', () => {
  const numberToWord = {
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
  };

  const toWord = (number: number) => {
    if (number in numberToWord) {
      return numberToWord[number];
    }

    if (number < 100) {
      const [ten, one] = number.toString().split('');
      return [numberToWord[Number(ten + '0')], numberToWord[Number(one)]].join(
        ' '
      );
    }

    if (number < 1000) {
      const [hundred, ten, one] = number.toString().split('');

      const part1 = numberToWord[Number(hundred)] + ' hundred';
      const part2 = [];

      if (Number(ten + one) in numberToWord) {
        part2.push(numberToWord[Number(ten + one)]);
      } else {
        if (ten !== '0') {
          part2.push(numberToWord[Number(ten + '0')]);
        }

        if (one !== '0') {
          part2.push(numberToWord[Number(one)]);
        }
      }

      return part2.length > 0 ? [part1, part2.join(' ')].join(' and ') : part1;
    }

    if (number === 1000) {
      return 'one thousand';
    }

    throw new Error('Missing conversion');
  };

  const solution = (n: number[]): number =>
    n.map(toWord).join('').replace(/\s+/giu, '').length;

  test('Number letter counts', () => {
    expect(solution(array.range([1, 6]))).toBe(19);
    expect(solution(array.range([1, 1001]))).toBe(21124);
  });
});
