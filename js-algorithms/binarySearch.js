//  Search algorithm only work in sorted array

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((right + left) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

const result = binarySearch([1, 5, 10], 10);

if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log("Element not found in the array");
}
