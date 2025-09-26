function secondLargest(arr) {
  let result = arr.sort((a, b) => b - a);
  let j;
  for (j = 1; result[j] == result[j - 1]; j++);
  return result[j];
}

console.log(secondLargest([20, 139, 94, 67, 31]));
