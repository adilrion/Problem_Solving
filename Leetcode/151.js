// 151. Reverse Words in a String

var reverseWords = function (s) {


  let convert = s.split(' ')
  let reverse = convert.reverse();
  let filter = reverse.filter((value) => value !== "");
  
  return filter.join(' ')

};



const s = "the sky is blue",
    b = "  hello world  ";

console.log(reverseWords(b));



// Input: s = "the sky is blue";
// Output: "blue is sky the";