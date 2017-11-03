function isString(s) {
	return typeof s === "string";
}

function isFunction(f) {
	return typeof f === "function";
}

function intersperse(value, list) {
	const isS = isString(list);
	if (isS) {
		list = list.split("");
	}

	const converted = list.reduce((acc, l, i) => {
		acc.push(l);
		if (i !== list.length - 1) {
			const next = list[i + 1];
			const v = isFunction(value) && next ? value(l, next) : value;
			acc.push(v);
		}
		return acc;
	}, []);

	if (isS) {
		return converted.join("");
	}
	return converted;
}

module.exports = intersperse;
