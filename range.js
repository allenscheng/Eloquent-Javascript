function range(start, end, step) {
  var arr = [];
  if (step === undefined) {
    step = 1;
  }
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(range(5, 2, -1));

function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum(range(1, 10)));
