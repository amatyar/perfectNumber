function is_perfect(n) {
  var temp = 0;
  for (var i=1; i<= n/2 ; i++){
    if (n % i === 0)
    {
      temp +=i;
    }
  }
  if (temp === n && temp !==0){
    console.log("this is a perfect number");
  }else {
    console.log("this is not a perfect number");
  }
}

is_perfect(4);
