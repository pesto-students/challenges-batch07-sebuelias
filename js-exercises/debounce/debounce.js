function debounce(debouncedFn, timeInMs) {
  let scheduledTimer;

  return (...args) => {
    if (scheduledTimer) {
      clearTimeout(scheduledTimer);
    }
    scheduledTimer = setTimeout(() => {
      debouncedFn.apply(this, args);
    }, timeInMs);
  };
}

export { debounce };
