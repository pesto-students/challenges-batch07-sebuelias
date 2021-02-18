function dropElements(elements, predicate) {
  if (!Array.isArray(elements)) {
    throw new Error(' First parameter passed is not an array');
  }
  if (typeof predicate !== 'function') {
    throw new Error('Second parameter passed is not a function');
  }
  return elements.filter(predicate);
}

export { dropElements };
