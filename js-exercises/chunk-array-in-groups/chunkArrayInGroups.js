function chunkArrayInGroups(array, chunkSize) {
  if (!Array.isArray(array)) {
    throw new Error(' First parameter passed is not an array');
  }
  if (typeof chunkSize !== 'number') {
    throw new Error('Second parameter passed is not a number');
  }
  const chunkedArray = [];
  let remainingElementCount = array.length;
  for (let index = 0; index < array.length; index += chunkSize) {
    remainingElementCount = array.length - index;
    if (remainingElementCount === 1) {
      chunkedArray.push([array[index]]);
    } else if (remainingElementCount <= chunkSize) {
      chunkedArray.push(array.slice(index, array.length));
    } else {
      chunkedArray.push(array.slice(index, index + chunkSize));
    }
  }
  return chunkedArray;
}

export { chunkArrayInGroups };
