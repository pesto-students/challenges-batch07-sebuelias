/* eslint-disable no-restricted-globals */
function findAllTriplets(arr, sum) {
  if (typeof sum !== 'number') {
    throw new Error('sum should be a number');
  }
  if (arr.some(isNaN)) {
    throw new Error('arr should be array of numbers');
  }

  const results = [];

  for (let i = 0; i < arr.length; i += 1) {
    const finalT = sum - arr[i];
    const map = {};

    for (let j = i + 1; j < arr.length; j += 1) {
      if (map[arr[j]]) {
        results.push([arr[j], arr[i], map[arr[j]]]);
      } else {
        map[finalT - arr[j]] = arr[j];
      }
    }
  }

  return results;
}

export { findAllTriplets };
