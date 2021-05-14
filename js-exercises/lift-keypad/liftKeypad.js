const findKeyLocation = (key, keypad) => {
  const keyIndexInKeypad = keypad.indexOf(key);
  const row = Math.floor(keyIndexInKeypad / 3);
  const col = Math.floor(keyIndexInKeypad % 3);
  return [row, col];
};

function getTotalTime(passcode, keypadStr) {
  let prevKeyLocation = [];
  let timeTaken = 0;

  [...passcode].forEach((number, index) => {
    const keyLocation = findKeyLocation(number, keypadStr);
    const difference = [];

    if (index === 0) {
      prevKeyLocation = keyLocation;
    } else {
      difference[0] = Math.abs(keyLocation[0] - prevKeyLocation[0]);
      difference[1] = Math.abs(keyLocation[1] - prevKeyLocation[1]);
      if (difference.includes(2)) {
        timeTaken += 2;
      } else if (difference.includes(1)) {
        timeTaken += 1;
      }
      prevKeyLocation = keyLocation;
    }
  });
  return timeTaken;
}

// eslint-disable-next-line arrow-body-style
const withValidation = (fn, validatorfn) => {
  return (...args) => {
    validatorfn(...args);
    return fn(...args);
  };
};

const validatorFn = (passcode, keypadStr) => {
  if (typeof passcode !== 'string') {
    throw new Error('passcode must be a string');
  }
  if (typeof keypadStr !== 'string') {
    throw new Error('keypadStr must be a string');
  }
  if (keypadStr.length !== 9) {
    throw new Error('keypadStr must be a string of length 9');
  }
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(keypadStr) && isNaN(parseFloat(keypadStr))) {
    throw new Error('keypadStr must be a string of numbers');
  }
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(passcode) && isNaN(parseFloat(passcode))) {
    throw new Error('keypadStr must be a string of numbers');
  }
};

const getTotalTimeWithValidation = withValidation(getTotalTime, validatorFn);

export { getTotalTimeWithValidation as getTotalTime };
