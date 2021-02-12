const sumEvenArgs = (...args) => {
  const sumOfEvenArgs = args.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
  return sumOfEvenArgs;
};

export { sumEvenArgs };
