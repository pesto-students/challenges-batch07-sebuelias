function duplicateLetters(...args) {
	if (args == null || args.length == 0) return false;
	let maxCount = 0;
	let count = 0;
	for (let x of args) {
		if (x == null || typeof x != "string") continue;
		for (let i = 0; i < x.length - 1; i++) {
			count = 1;
			for (let j = i + 1; j < x.length; j++) {
				if (x[i] === x[j]) {
					count++;
				}
			}
			if (count > maxCount) {
				maxCount = count;
			}
		}
	}
	return maxCount > 1 ? maxCount : false;
}

export { duplicateLetters };
