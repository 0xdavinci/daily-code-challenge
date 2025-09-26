function secondLargest(arr) {
  const distinct = [...new Set(arr)]; // remove duplicates

  if (distinct.length < 2) return null;
  distinct.sort((a, b) => b - a);
  return distinct[1];
}
