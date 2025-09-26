function secondLargest(arr) {
  arr.sort((a, b) => b - a);
  let j;
  for (j = 1; arr[j] == arr[j - 1]; j++);
  return arr[j];
}

console.log(secondLargest([20, 139, 94, 67, 31]));
