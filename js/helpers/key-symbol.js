module.exports = function (obj) {
  var symbols = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keySymbol(...): Argument must be an object.');
  }
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    symbols[key] = Symbol(key);
  }
  return symbols;
};
