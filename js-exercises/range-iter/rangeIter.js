function rangeIter(lowerLimit, upperLimit) {
  if (typeof lowerLimit !== 'number') {
    throw new TypeError('lowerLimit is not a number');
  }
  if (typeof upperLimit !== 'number') {
    throw new TypeError('upperLimit is not a number');
  }

  let startValue = lowerLimit;

  return {
    [Symbol.iterator]() {
      const iterator = {
        next() {
          let resultObj;
          if (startValue <= upperLimit) {
            resultObj = { value: startValue, done: false };
            startValue += 1;
            return resultObj;
          }
          return { value: lowerLimit, done: true };
        },
      };
      return iterator;
    },
  };
}

export { rangeIter };
