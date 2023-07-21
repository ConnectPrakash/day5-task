let validatePalin = function (string) {   
    const len = string.length;  
  
  
    for (let i = 0; i < len / 2; i++) {  
  
       
        if (string[i] !== string[len - 1 - i]) {  
            console.log('It is not a palindrome');  
        }  
    }  
    console.log( 'It is a palindrome');  
}  
console.log(validatePalin('level'));