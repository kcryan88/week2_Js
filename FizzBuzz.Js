var multiplier =3;
var lines = 12;

for (var i = 1; i < lines+1; i++){
  console.log(i + " X " + multiplier + " = "+multiplier*i);
}

for (var i = 1; i < 101; i++){
  if (i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
  }
  else if (i % 5 == 0){
    console.log("Buzz");
  }
  else if(i % 3 == 0){
    console.log("Fizz")
  }
  else {
    console.log(i);
  }
}
