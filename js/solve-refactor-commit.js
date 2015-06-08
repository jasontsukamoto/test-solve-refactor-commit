function sqrt(n) {
  if(typeof n !== 'number') {
    return false;
  } else {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      var sqrt = Math.sqrt(i);
      sum += sqrt;
    }
    return sum;
  }
}

module.exports = {
  sqrt: sqrt
};