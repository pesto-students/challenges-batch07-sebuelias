const limitFunctionCallCount = (callback, maxNumberOfCalls) => {
  let callCounter = 0;

  return (...argsForCallback) => {
    if (callCounter < maxNumberOfCalls) {
      callCounter += 1;
      return callback(...argsForCallback);
    }
    return null;
  };
};

export { limitFunctionCallCount };
