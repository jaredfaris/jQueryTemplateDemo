function GenerateTestArray (length) {
  var numbers = new Array();

  for( var i = 0; i < length; i++ )
  {
    numbers[i] = { name: "String"+i, value: i};
  }

  return numbers;
}

