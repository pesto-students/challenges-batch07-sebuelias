import { isString } from "util";

function abbreviateString(str) {
	let abbrev = str.trim().split(" ");
	if (abbrev.length > 1) return abbrev[0] + " " + abbrev[1][0] + ".";
	else return str;
}

export { abbreviateString };
