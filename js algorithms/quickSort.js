function quikSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const less = arr.filter((el) => {
    return el < pivot;
  });
  const greater = arr.filter((el) => {
    return el > pivot;
  });

  return [...quikSort(less), pivot, ...quikSort(greater)];
}

console.log(quikSort([5, 4, 6, 8, 9, 1, 3, 2]));
