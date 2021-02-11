function duplicateLetters(...args) {
  if (args == null || args.length === 0) {
    throw new Error('Invalid Parameters');
  }
  let maxCount = 0;
  let count = 0;
  for (const x of args) {
    if (x != null || typeof x === 'string') {
      /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
      for (let i = 0; i < x.length - 1; i++) {
        count = 1;
        for (let j = i + 1; j < x.length; j++) {
          if (x[i] === x[j]) {
            count += 1;
          }
        }
        if (count > maxCount) {
          maxCount = count;
        }
      }
    }
  }
  return maxCount > 1 ? maxCount : false;
}

export { duplicateLetters };
