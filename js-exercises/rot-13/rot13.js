function rot13(...args) {
  if (args.length === 0) {
    throw new Error('Invalid arguments');
  }
  const capitalA = 'A'.charCodeAt(0);
  const lowerA = 'a'.charCodeAt(0);
  const capitalZ = 'Z'.charCodeAt(0);
  const lowerZ = 'z'.charCodeAt(0);
  const encyptShift = 13;
  let decipheredText = '';

  for (const each of args) {
    if (typeof args[0] !== 'string') {
      throw new Error('Invalid arguments');
    }
    for (let index = 0; index < each.length; index += 1) {
      let letter = each.charCodeAt(index);
      /* check if capital or lower Letter */
      if (capitalA <= letter && letter <= capitalZ) {
        letter = ((letter - capitalA + encyptShift) % 26) + capitalA;
      } else if (lowerA <= letter && letter <= lowerZ) {
        letter = ((letter - lowerA + encyptShift) % 26) + lowerA;
      }
      decipheredText += String.fromCharCode(letter);
    }
  }
  return decipheredText;
}
export { rot13 };
