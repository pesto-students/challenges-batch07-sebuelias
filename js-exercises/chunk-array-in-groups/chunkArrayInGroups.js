function chunkArrayInGroups(array, chunkSize) {
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
