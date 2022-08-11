import { fixture } from './018.fixture';

/**
 * @link https://projecteuler.net/problem=18
 */
describe('Problem 18', () => {
  const solution = (tree: number[][]) => {
    for (let i = tree.length - 2; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        tree[i][j] += Math.max(tree[i + 1][j], tree[i + 1][j + 1]);
      }
    }
    return tree[0][0];
  };

  test('Maximum path sum I', () => {
    expect(solution(fixture[0])).toBe(23);
    expect(solution(fixture[1])).toBe(1074);
  });
});
