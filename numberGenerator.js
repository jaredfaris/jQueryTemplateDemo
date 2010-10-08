function GenerateTestArray (length) {
  var numbers = new Array();

  for( var i = 0; i < length; i++ )
  {
    numbers[i] = { name: "String"+i, value: i};
  }

  return numbers;
}

function GenerateComplexTestArray (length) {

  var numbers = new Array();

  for( var i = 0; i < length; i++ )
  {
    var subArray = [ 
      { childName: "String"+i+"1", childValue: (i * 10) },
      { childName: "String"+i+"2", childValue: (i * 20) }
   ];

    numbers[i] = { name: "String"+i, value: i, children: subArray};
  }

  return numbers;
}

