import { factorial } from './lib';

/**
 * @link https://projecteuler.net/problem=20
 */
describe('Problem 20', () => {
  const solution = (n: number) =>
    factorial(BigInt(n))
      .toString()
      .split('')
      .reduce(($$, $) => $$ + Number($), 0);

  test('Factorial digit sum', () => {
    expect(solution(10)).toBe(27);
    expect(solution(100)).toBe(648);
  });
});
