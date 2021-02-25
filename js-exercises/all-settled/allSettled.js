function allSettled(promisesPassedIn) {
  // If not iterable throw an error
  if (promisesPassedIn.length === 0 || promisesPassedIn === null) {
    throw new Error(`${typeof promisesPassedIn} is not correct`);
  }
  const results = Array(promisesPassedIn.length);
  // To keep track of how many promisesPassedIn resolved
  let promiseCounter = 0;

  // Wrapping our iteration with Promise object
  // So that we can resolve and return the results on done.
  return new Promise((resolve) => {
    promisesPassedIn.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          promiseCounter += 1;
          results[index] = { status: 'fulfilled', result };
          if (promiseCounter === promisesPassedIn.length) {
            resolve(results);
          }
        })
        .catch((reason) => {
          promiseCounter += 1;
          results[index] = { status: 'rejected', reason };
          if (promiseCounter === promisesPassedIn.length) {
            resolve(results);
          }
        });
    });
  });
}

export { allSettled };
