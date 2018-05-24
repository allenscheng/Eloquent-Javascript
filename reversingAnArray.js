function reverseArray(arr) {
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}
console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(arr) {
  return reverseArray(arr);
}
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
