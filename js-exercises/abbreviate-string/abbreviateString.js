function abbreviateString(str) {
  if (str == null || typeof str !== 'string') {
    throw new Error('Invalid Parameters');
  }
  const abbrev = str.trim().split(' ');
  if (abbrev.length > 1) {
    /* First word and first letter of last word capitalised */
    return `${abbrev[0]} ${abbrev[abbrev.length - 1][0].toUpperCase()}.`;
  }
  return str;
}
export { abbreviateString };
