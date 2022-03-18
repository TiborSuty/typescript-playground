export const binarySearch = (array: number[], target: number): boolean => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = (left + right) / 2;

    if (array[middle] === target) {
      return true;
    }

    if (target < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return false;
};
