function palindrome(str) {
  str = str.toLowerCase(str);
  str.split('');
  let strAdjusted=[];
  let strInverted = [];
  //removing chars && inverting order
  for(let i=0;i<str.length;i++) {
    if(str[i]>="a" && str[i]<="z" || str[i]>="0" && str[i]<="9") {
      strAdjusted.push(str[i]);
      strInverted.unshift(str[i]);
    }
  }
  if(strInverted.join('')===strAdjusted.join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("EYE"));
