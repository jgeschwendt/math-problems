/**
 * @link https://projecteuler.net/problem=19
 */
describe('Problem 19', () => {
  const solution = () => {
    let count = 0;

    for (let year = 1901; year < 2001; year++) {
      for (let month = 0; month < 12; month++) {
        if (new Date(year, month, 1).getDay() === 0) {
          count++;
        }
      }
    }

    return count;
  };

  test('Counting Sundays', () => {
    expect(solution()).toBe(171);
  });
});
