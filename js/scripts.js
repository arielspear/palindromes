var arrayMaker = function(input) {
  var inputArray = input.split('');
  return inputArray;
}

var reverse = function(inputArray) {
  var reversedArray = inputArray.reverse();
  return reversedArray;
}

var compare = function(input) {
  var inputArray = arrayMaker(input);
  var reversedArray = reverse(inputArray);
  return input === reversedArray.join("");
}
