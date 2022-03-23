const arr1 = [2, 5, 8, 3, 5, 1, 2, 3, 5];
const arr2 = [2, 6, 5, 8, 3];

const bubbleSort = (arr) => {
  if (!arr.length) return "invalid input";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
};

const bubbleSortBS = (arr) => {
  if (!arr.length) return "invalid input";

  let checked;
  do {
    checked = false;

    console.log("---------------");
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i], arr[i + 1]);
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        console.log("swapped");
        checked = true;
      }
    }
    console.log("---------------", arr, checked);
  } while (checked);
  return arr;
};

console.time();
console.log(bubbleSort(arr1));
console.timeEnd();
console.time();
console.log(bubbleSortBS(arr2));
console.timeEnd();
