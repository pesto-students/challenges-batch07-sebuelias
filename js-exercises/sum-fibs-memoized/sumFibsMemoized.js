function sumFibs(num) {
  let previous = 0;
  let current = 1;
  let sum = 0;
  while (current <= num) {
    if (current % 2 !== 0) {
      sum += current;
    }
    // Move on to next Fibonacci number
    const next = current + previous;
    previous = current;
    current = next;
  }
  return sum;
}

function cacheFunction(cachedFunction) {
  const cache = {};
  return function caching(num) {
    if (cache[num] !== undefined) {
      return cache[num];
    }
    cache[num] = cachedFunction(num);
    return cache[num];
  };
}

export { sumFibs, cacheFunction };
