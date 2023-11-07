function quikSort(arr) {
  console.log("calling");
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

console.log(quikSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
