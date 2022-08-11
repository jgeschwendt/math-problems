export const range = (set: number | [number, number], step = 1) => {
  const [head, tail] = Array.isArray(set) ? set : [0, set];

  return Array(Math.ceil((tail - head) / step))
    .fill(0)
    .map((_, index) => (index + head) * step);
};
