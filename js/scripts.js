var arrayMaker = function(input) {
  var inputArray = input.toLowerCase().split('');
  return inputArray;
}

var reverse = function(inputArray) {
  var reversedArray = inputArray.reverse();
  return reversedArray;
}

var compare = function(input) {
  var inputArray = arrayMaker(input);
  var reversedArray = reverse(inputArray);
  return input.toLowerCase() === reversedArray.join("");
}

$(document).ready(function() {
  $("form#palindromes").submit(function(event) {
    var input = $("input#input").val();
    var result = compare(input);

    $(".input").text(input.toLowerCase());
    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").empty();
    }

    $("#result").show();
      event.preventDefault();
  });
});
