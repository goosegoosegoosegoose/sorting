function insertionSort(arr) {
  for (let i=1; i<arr.length; i++){
    let current = arr[i];
    // current (2nd item first)
    let j = i-1; 
    // previous item
    while ((j > -1) && (current < arr[j])) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = current;
  }
  return arr;
}

// cheated

module.exports = insertionSort;