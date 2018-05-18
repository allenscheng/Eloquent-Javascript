function countChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}
console.log(countBs("BBC"));

function countBs(str) {
  return countChar("str", "B");
}
console.log(countChar("kakkerlak", "k"));
