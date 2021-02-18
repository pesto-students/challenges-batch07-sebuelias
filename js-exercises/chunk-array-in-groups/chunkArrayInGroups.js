function chunkArrayInGroups(array, chunkSize) {
  if (!Array.isArray(array)) {
    throw new Error(' First parameter passed is not an array');
  }
  if (typeof chunkSize !== 'number') {
    throw new Error('Second parameter passed is not a number');
  }
  return array.reduce((chunkedArray, value, index) => {
    /* Check to confirm a chunk has been iterated over */
    if (index % chunkSize === 0) {
      /*  if end value (2nd argument) exceed the array length,
      we slice till the last element */
      chunkedArray.push(array.slice(index, index + chunkSize));
    }
    return chunkedArray;
  }, []);
}

export { chunkArrayInGroups };
