function sumFibs(num) {
  /* if (num < 0 || typeof num !== 'number') {
    throw new Error('Invalid Parameter');
  } */
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
  /*   if (num < 2) {
    return num;
  }
  return sumFibs(num - 1) + sumFibs(num - 2); */
}

function cacheFunction(cachedFunction) {
  /* memo = memo || {}; */
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
