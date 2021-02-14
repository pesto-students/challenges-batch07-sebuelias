function curry(functionTocurry) {
  /* Currying the function */
  return function curried(...argumentsGiven) {
    /* Function.length gives number of expected arguments for the function */
    if (argumentsGiven.length >= functionTocurry.length) {
      return functionTocurry.apply(this, argumentsGiven);
    }
    /* More arguments pending, so we curry the function again */
    return function moreArguments(...additionalArguments) {
      /* Currying the function with remaining arguments and the given arguments,
      recursively until all arguments are handled
      */
      return curried.apply(this, argumentsGiven.concat(additionalArguments));
    };
  };
}
export { curry };
