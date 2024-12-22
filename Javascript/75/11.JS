// 11. Container With Most Water

var maxArea = function (height) {

      let maxArea = 0;
      let left = 0,
          right = height.length - 1;

      while (left < right) {
          const currentArea =
              Math.min(height[left], height[right]) * (right - left);
          maxArea = Math.max(maxArea, currentArea);

          if (height[left] < height[right]) {
              left++;
          } else {
              right--;
          }
      }

      return maxArea;

};



const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));