
function convertToRoman(num) {
    let romanDecimalConverted=[];
    while(num>0) {
        if(num-1000>=0) {
            romanDecimalConverted.push('M');
            num-=1000;
        } else if (num-900>=0) {
            romanDecimalConverted.push('CM');
            num-=900;
        } else if (num-500>=0) {
            romanDecimalConverted.push('D');
            num-=500;
        } else if (num-400>=0) {
            romanDecimalConverted.push('CD');
            num-=400;
        } else if (num-100>=0) {
            romanDecimalConverted.push('C');
            num-=100;
        } else if (num-90>=0) {
            romanDecimalConverted.push('XC');
            num-=90;
        } else if (num-50>=0) {
            romanDecimalConverted.push('L');
            num-=50;
        } else if (num-40>=0) {
            romanDecimalConverted.push('XL');
            num-=40;
        } else if (num-10>=0) {
            romanDecimalConverted.push('X');
            num-=10;
        } else if (num-9>=0) {
            romanDecimalConverted.push('IX');
            num-=9;
        } else if (num-5>=0) {
            romanDecimalConverted.push('V');
            num-=5;
        } else if (num-4>=0) {
            romanDecimalConverted.push('IV');
            num-=4;
        } else if (num-1>=0) {
            romanDecimalConverted.push('I');
            num-=1;
        }
    }
    return romanDecimalConverted.join('');
}

let romanDecimalConverted = convertToRoman(1984);
console.log(romanDecimalConverted);