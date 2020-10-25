module.exports = function check(str, bracketsConfig) {
  if (str.length === 0 || str.length === 1) return false;

  //transform bracketsConfig to object
  const pares = {};
  bracketsConfig.forEach(element => {
    if (element[0] === element[1]) pares[element[0]] = true
    else pares[element[0]] = element[1];
  });

  const stack = [str[0]];
  for (let i = 1; i <= str.length; i++) {
    const leftBr = stack[stack.length - 1];

    // if pare is the same symbol
    if (pares[leftBr] === true) {
      if (leftBr === str[i]) {
        stack.pop();
        continue;
      }
      else {
        stack.push(str[i]);
        continue;
      }
    }

    if (isOpenBracket(str[i])) stack.push(str[i])
    else {
      if (pares[leftBr] === str[i]) stack.pop()
      else return false
    }
  }

  if (stack.length === 0) return true
  return false;

  function isOpenBracket(char) {
    if (pares[char]) return true
    return false
  }
}
