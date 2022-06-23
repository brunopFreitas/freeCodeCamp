function telephoneCheck(str) {
  console.log("###Checkig Mask###")
  console.log("Original: " + str)
   str = str.split('')
   console.log("Checking Mask of: " + str)

   if((str[0]!="1" || 
      str[0]!="(" ) &&
      (str[3]==="-" ||
      str[3]===" ") &&
      (str[7]==="-" ||
      str[7]===" ")
   ) {
     console.log("The mask is: 555-555-5555 or 555 555 5555")
     return checkNumbers(str)
   } else if (str[0]==="(" &&
      str[4]===")" &&
      str[8]==="-"
   ) {
     console.log("The mask is: (555)555-5555")
     return checkNumbers(str)
   } else if (str[0]==="(" &&
      str[4]===")" &&
      str[5]===" " &&
      str[9]==="-"
   ) {
     console.log("The mask is: (555) 555-5555")
     return checkNumbers(str)
   } else if (str[0]==="1" &&
      (str[1]===" " || (str[1]==="(" && str[5]===")")) &&
       (!isNaN(str[2]) || (str[2]==="(" && str[6]===")")) &&
       (!isNaN(str[6]) || (str[6]===")" && str[2]==="(" )) &&
       (str[7]===" " || !isNaN(str[7])) &&
       (str[11]==="-" || !isNaN(str[11])) &&
      (str[5]===" " || (str[5]===")" && str[1]==="(") || str[5]==="-" || !isNaN(str[5]) ) &&
      (str[9]===" " || str[9]==="-" || str[9]==="-" || !isNaN(str[9]))
   ) {
     console.log("The mask is for 1 555 555 5555 type")
     return checkNumbers(str)
   } else if (str.every(elem => !isNaN(parseInt(elem)))){
     console.log("The mask is: 5555555555")
     return checkNumbers(str)
   } else {
     console.log("Mask does not match")
     return false
   }
}

function checkNumbers(str) {
  console.log("###Checking numbers###")
  let newStr = str.filter(elem => {
    return !isNaN(elem) && elem!=" "
  })
  console.log("Parsed: " + newStr)
  console.log("Length: " + newStr.length)
  if(newStr.length===10 || newStr.length===11) {
    let counter = 0
    newStr.forEach(elem => {
      if(!isNaN(elem)) {
        counter++
      }
    })
    console.log("Counter: " + counter)
    console.log("First Pos: " + newStr[0])
    if (counter===10) {
      console.log("Counter is 10, so return true")
        return true
      } else if (counter===11 && newStr[0]==="1") {
        console.log("Counter is 11 and first is 1, so return true")
        return true
      } else {
        console.log("Well, it's false")
        return false
      }
  } else {
    return false
  }
}

console.log("Checking: " + telephoneCheck("1 555)555-5555"))
//telephoneCheck("555-555-5555");