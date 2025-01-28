var isIsomorphic = function (s, t) {
  if(s.length !== t.length) return false
  let m1 = {}, m2 = {};

  for (let i = 0; i < s.length; i++){

    const cs = s[i]; 
    const ct = t[i]; 

    if (cs in m1) {
      if (m1[cs] !== ct) {
        return false
      }
    } else {
      m1[cs] = ct;
    }


    if (ct in m2) {
      if (m2[ct] !== cs) {
        return false
      }
    } else {
      m2[ct] = cs;
    }
    

  }

  return true
  
};

let s = "bbbaaaba",
    t = "aaabbbba";

    console.log(isIsomorphic(s, t));