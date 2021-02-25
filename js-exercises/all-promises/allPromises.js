function allPromises(promisesPassedIn) {
  return new Promise((resolve, reject) => {
    const results = [];
    let promisesCompleted = 0;

    promisesPassedIn.forEach((promise, index) => {
      /*  Resolve each Promise until all that passed is done */
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          promisesCompleted += 1;

          if (promisesCompleted === promisesPassedIn.length) {
            resolve(results);
          }
        })
        /*  Reject the returned promise as soon as any of
          the promises passed has failed, with the same error */
        .catch((error) => reject(error));
    });
  });
}

export { allPromises };
