const exampleCode = [
  {
    header: "Bubble Sort",
    code: `
    const arr = [
        { id: 1, value: 5 },
        { id: 2, value: 3 },
        { id: 3, value: 7 },
        { id: 4, value: 12 },
        { id: 5, value: 2 },
        { id: 6, value: 1 },
        { id: 7, value: 17 },
        { id: 8, value: 3 },
        { id: 9, value: 2 },
        { id: 10, value: 20 },
        { id: 11, value: 4 },
        { id: 12, value: 9 },
      ];
      
      function bubbleSort(arr) {
        const length = arr.length;
        for (let i = 0; i < length - 1; i++) {
          for (let j = 0; j < length - 1 - i; j++) {
            pointPrimaryNode({ ...arr[j] });
            pointSecondaryNode({ ...arr[j + 1] });
      
            log("compare " + arr[j].value + " > " + arr[j + 1].value);
            if (arr[j].value > arr[j + 1].value) {
              // Swap elements
              swapNode({ ...arr[j] }, { ...arr[j + 1] });
              resetNode({ ...arr[j] });
              resetNode({ ...arr[j + 1] });
      
              const temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            } else {
              resetNode({ ...arr[j + 1] });
              resetNode({ ...arr[j] });
            }
          }
          fixedNode({ ...arr[length - 1 - i] });
        }
        fixedNode({ ...arr[0] });
        return arr;
      }
      drawList([...arr]);
      bubbleSort(arr);
        `,
  },
  {
    header: "Binary Search",
    code: `
    // Binary search function
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    pointSecondaryNode({ ...arr[left] });
    pointSecondaryNode({ ...arr[right] });

    let mid = Math.floor((left + right) / 2);
    
    pointPrimaryNode({ ...arr[mid] });

    log("compare " + arr[mid].value + " === " + target);
    if (arr[mid].value === target) {

      resetNode({ ...arr[left] });
      resetNode({ ...arr[right] });
      fixedNode({ ...arr[mid] });

      return mid; // Found the target
    } else if (arr[mid].value < target) {
      
      resetNode({ ...arr[left] });
      left = mid + 1; // Continue searching in the right half
    } else {
      resetNode({ ...arr[right] });
      right = mid - 1; // Continue searching in the left half
    }

    resetNode({ ...arr[mid] });
  }

  return -1; // Target not found
}

// Example sorted array
const array = [
    { id: 1, value: 5 },
    { id: 2, value: 6 },
    { id: 3, value: 7 },
    { id: 4, value: 8 },
    { id: 5, value: 9 },
    { id: 6, value: 10 },
    { id: 7, value: 11 },
    { id: 8, value: 12 },
    { id: 9, value: 12 },
    { id: 10, value: 14 },
    { id: 11, value: 15 },
    { id: 12, value: 16 },
];

// Example usage
const targetValue = 8;
drawList([...array]);
const index = binarySearch(array, targetValue);
    `,
  },
];
export default exampleCode;
