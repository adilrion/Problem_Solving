// 1732. Find the Highest Altitude

var largestAltitude = function (gain) {


  if (gain.length === 0) {
    return 0;
  }
  

  let max = 0;
  let point = 0;
  for (let i = 0; i < gain.length; i++) {
    const element = gain[i];
    point += element
    max = Math.max(max, point)
    
  }
  
  
  return max
  
};


let gain = [-5, 1, 5, 0, -7]
console.log(largestAltitude(gain));
