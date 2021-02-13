function balancedBraces(...args) {
  const stackForChecking = [];
  const braces = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  for (const testString of args) {
    if (typeof testString !== 'string') {
      throw new Error('Parameter passed is not a string');
    }
    [...testString].forEach((character) => {
      if (braces[character]) {
        stackForChecking.push(character);
      } else if (
        braces[stackForChecking[stackForChecking.length - 1]] === character
      ) {
        stackForChecking.pop();
      }
    });
  }
  return stackForChecking.length === 0;
}

export { balancedBraces };
