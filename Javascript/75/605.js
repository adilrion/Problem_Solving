// 605. Can Place Flowers

var canPlaceFlowers = function (flowerbed, n) {

  
  let result;
  for (let i = 0; i <= flowerbed.length -1 ; i++){
    
    if (flowerbed[i] === 0) {
      console.log(flowerbed[i]);
      let prev = i === 0 ? 0 : flowerbed[i - 1];
      console.log(prev)
      let next = i === flowerbed.length - 1 ? 0 : flowerbed[i+1]
      console.log(next)
      
      if (prev === 0 && next === 0  ) {
         flowerbed[i] = 1;
         n--
        if(n===0) return true
      }
      
      
    }
  }
  return n <= 0; 
};


const flowerbed = [1, 0, 0, 0, 1],
  n = 2;
console.log(flowerbed[flowerbed.length-1]);

console.log(canPlaceFlowers(flowerbed, n));