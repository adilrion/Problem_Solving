var lengthOfLastWord = function (s) {


    let data = s.split(" ");




    for (let i = data.length; i > 0; i--){
       console.log(i);
        if (data[i-1] !== "") {
            return data[i-1].length;
        }
    }

};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("a"));