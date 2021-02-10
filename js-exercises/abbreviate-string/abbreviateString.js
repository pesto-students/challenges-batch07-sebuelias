function abbreviateString(str) {
	if (str == null || typeof str != "string") return false;
	let abbrev = str.trim().split(" ");
	if (abbrev.length > 1) return abbrev[0] + " " + abbrev[1][0] + ".";
	else return str;
}
export { abbreviateString };
