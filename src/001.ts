import { array } from './lib';

/**
 * @link https://projecteuler.net/problem=1
 */
describe('Problem 1', () => {
  const solution = (input: number): number =>
    array
      .range([1, input])
      .filter((n) => n % 3 === 0 || n % 5 === 0)
      .reduce((t, n) => t + n, 0);

  test('Multiples of 3 or 5', () => {
    expect(solution(10)).toBe(23);
    expect(solution(1000)).toBe(233168);
  });
});
