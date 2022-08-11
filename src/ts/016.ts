/**
 * @link https://projecteuler.net/problem=16
 */
describe('Problem 16', () => {
  const solution = (n: bigint | number): number =>
    n
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => a + b);

  test('Power digit sum', () => {
    expect(solution(Math.pow(2, 15))).toBe(26);
    expect(solution(BigInt(Math.pow(2, 1000)))).toBe(1366);
  });
});
