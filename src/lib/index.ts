import * as array from './array';
import * as is from './predicates';

function collatzSequenceCount(
  number: number,
  cache: Record<number, number> = {}
): number {
  if (!cache[1]) {
    cache[1] = 1;
  }

  function collatzSequence(n: number): number {
    if (cache[n]) {
      return cache[n];
    }

    if (n % 2 === 0) {
      cache[n] = 1 + collatzSequence(n / 2);
    } else {
      cache[n] = 2 + collatzSequence((3 * n + 1) / 2);
    }

    return cache[n];
  }

  return collatzSequence(number);
}

function divisorsCount(n: number): number {
  const sqrt = Math.sqrt(n);
  let count = 0;

  for (let i = 1; i <= sqrt; ++i) {
    if (n % i === 0) {
      if (i === n / i) {
        ++count;
      } else {
        count += 2;
      }
    }
  }

  return count;
}

function factorial(num: bigint): bigint {
  if (num > 0) {
    return num * factorial(num - BigInt(1));
  }
  return BigInt(num === 0n ? 1 : -1);
}

function fibonacci(limit: number): number[] {
  const terms = [1, 2];

  while (terms[terms.length - 1] <= limit) {
    terms.push(terms[terms.length - 2] + terms[terms.length - 1]);
  }

  return terms;
}

function* primeGenerator(): Generator<number, number, number> {
  let candidate = 1;

  yield 2;
  while (true) {
    candidate = candidate + 2;
    if (is.prime(candidate)) {
      yield candidate;
    }
  }
}

export {
  array,
  collatzSequenceCount,
  divisorsCount,
  factorial,
  fibonacci,
  is,
  primeGenerator,
};
