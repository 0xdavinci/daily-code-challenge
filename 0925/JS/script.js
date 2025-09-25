function secondLargest(arr) {
  let result = arr.sort((a, b) => b - a);
  return result[1];
}

secondLargest([20, 139, 94, 67, 31]);
