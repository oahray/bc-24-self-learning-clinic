const getPrimes = (n) => {
  let result = [2];
  if (typeof n !== 'number') {
    return "Invalid input. Number required.";
  } else if (n < 2) {
    return [];
  }

  for (let i = 3; i < n; i += 2) {
    let prime = true;
    for (let j = 2; j < Math.sqrt(i) + 1; j++) {
      if (i%j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      result.push(i);
    }
  }
  return result;
};


module.exports = {getPrimes};