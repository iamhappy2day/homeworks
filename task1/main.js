// quadratic equation (qEq)

function qEq (a,b,c){
  let x1,x2;

  if(a == 0) {
    alert('sorry, "a" must be more than 0')
  };

  let d = b*b - 4*a*c;

  // check d > 0
  if(d > 0) {
     x1 = (-b + Math.sqrt(d))/(2*a);
     x2 = (-b - Math.sqrt(d))/(2*a);
  }
  // check d < 0
  else if(d < 0){
    alert('There is no sulution')
  }
   // check d == 0
  else if(d == 0){
    x1 = -b/2*a
    x2 = null
  };

  return (x1,x2)
}


