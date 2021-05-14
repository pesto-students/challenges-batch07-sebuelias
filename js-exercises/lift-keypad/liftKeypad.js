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

export { getTotalTime };
