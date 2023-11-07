/*
Creating a multiplication table with all the elements in the array. So 
if your array is [2, 3, 7, 8, 10], you first multiply every element by 2, 
then multiply every element by 3, then by 7, and so on. 

it will be o(n)*n = o(n^2) complexity
*/

const multiTable = () => {
  const arr = [2, 3, 7, 8, 10];
  let multiplicationtable = [];

  for (let i = 0; i < arr.length; i++) {
    let row = [];
    for (let j = 0; j < arr.length; j++) {
      row.push(arr[j] * arr[i]);
    }
    multiplicationtable.push(row);
  }

  return multiplicationtable;
};

console.log(multiTable());
