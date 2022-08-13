import { readFile } from 'fs/promises';

const letterValue = (char: string) => char.charCodeAt(0) - 64;

const nameValue = (name: string) =>
  [...name].reduce((value, char) => value + letterValue(char), 0);

describe('Problem 22', () => {
  const solution = async () =>
    (await readFile(__dirname + '/022.fixture.txt'))
      .toString()
      .replaceAll('"', '')
      .split(',')
      .sort()
      .reduce((total, name, index) => total + nameValue(name) * (index + 1), 0);

  test('Names scores', async () => {
    expect(nameValue('COLIN')).toBe(53);

    expect(await solution()).toBe(871198282);
  });
});
