function bind(functionToBind, objToBindTo) {
  if (typeof functionToBind !== 'function') {
    throw new Error("Cannot be bound as it's not a function");
  }
  if (typeof objToBindTo !== 'object') {
    throw new Error("Cannot be bound as it's not an object");
  }
  return function bindingFunction(...args) {
    return functionToBind.apply(objToBindTo, args);
  };
}

module.exports = { bind };
