 

function calculateTax(amount){
    
    const  taxRate = 0.10;
    const  taxValue = taxRate * amount;
 
    return(taxValue)
 }

 function convertToUpperCase(text){
    const string = text.toUpperCase();

    return (string)
 }

function findMaximum(num1 , num2){
     
    const  maxNum = Math.max(num1, num2)
    return(maxNum)
}

function isPalindrome(word) {

  const cleanedWord = word.toLowerCase();
  const reversedWord = cleanedWord.split('').reverse().join('');

  return cleanedWord === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    
    const discountRate = discountPercentage / 100;

    const discountAmount = originalPrice * discountRate;

    const finalPrice = originalPrice - discountAmount;

    return finalPrice; 
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase , findMaximum, isPalindrome, calculateDiscountedPrice };