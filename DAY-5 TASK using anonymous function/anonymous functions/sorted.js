//Return median of two sorted arrays of the same size.


let findMedianSortedArrays = function (arr1, arr2) {
    const mergedArray = mergeSortedArrays(arr1, arr2);
    const length = mergedArray.length;
  
    if (length % 2 === 0) {
      const midIndex1 = length / 2;
      const midIndex2 = midIndex1 - 1;
      return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
    } else {
      const midIndex = Math.floor(length / 2);
      return mergedArray[midIndex];
    }
  }
  
  function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
  
    return merged;
  }
  
 
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  const median = findMedianSortedArrays(arr1, arr2);
  console.log(median); 
  