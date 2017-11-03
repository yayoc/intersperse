function isString(s) {
  return typeof s === "string";
}

function isFunction(f) {
  return typeof f === "function";
}

function intersperse(value, list) {
  const isStr = isString(list);
  if (isStr) {
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

  if (isStr) {
    return converted.join("");
  }
  return converted;
}

module.exports = intersperse;
