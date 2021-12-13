/*jshint esversion: 6 */
// Roman numerals


// Create a function that takes a Roman numeral as its argument and 
// returns its value as a numeric decimal integer. 
// You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of 
// the number to be encoded separately, starting with the leftmost digit and skipping any 0s. 
// So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is 
// rendered "MMVIII" (2000 = MM, 8 = VIII). 
// The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// complete the solution by transforming the 
// string roman numeral into an integer  

function solution(roman){
    const dict ={
      'I' : 1,
      'V' : 5,
      'X' : 10,
      'L' : 50,
      'C' :100,
      'D' :500,
      'M' : 1000,
    };

    return roman.split("").reduceRight((accumlator, currentValue) =>{
      return accumlator - dict[currentValue] < 2*dict[currentValue]? accumlator + dict[currentValue] : accumlator - dict[currentValue] ;
    },0);
  }

  console.log(solution('XXIIV'));