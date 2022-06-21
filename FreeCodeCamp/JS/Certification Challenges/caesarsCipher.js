function rot13(str) {
    let strAr = str.split("")
    let decryptedStr = []
    console.log(strAr)
    strAr.forEach(elem => {
      if (elem.charCodeAt(0)<65 || elem.charCodeAt(0)>90) {
        decryptedStr.push(elem)
      } else {
        let decimalCharCode = elem.charCodeAt(0)
        decimalCharCode += 13
        if (decimalCharCode>90) {
          decimalCharCode  = decimalCharCode - 26
        }
        decryptedStr.push(String.fromCharCode(decimalCharCode))
      }
    })
    console.log(decryptedStr.join(''))
    return decryptedStr.join('');
  }
  
  rot13("SERR PBQR PNZC");