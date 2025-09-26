function secondLargest(arr) {
  let first = -Infinity,
    second = -Infinity;

  for (let n of arr) {
    if (n > first) {
      second = first;
      first = n;
    } else if (n > second && n < first) {
      second = n;
    }
  }

  return second === -Infinity ? null : second;
}

console.log(secondLargest([2, 3, 4, 3, 3]));
