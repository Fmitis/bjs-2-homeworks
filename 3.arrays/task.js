'use strict'

function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length != arr2.length) {
    return false;
  }
  else {
    return arr1.every((value, index) => value === arr2[index]);
  }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  return arr.filter(item => item > 0 && item % 3 === 0).map(item => item * 10);

  return resultArr; // array
}
