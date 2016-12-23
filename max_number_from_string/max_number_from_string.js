// Example 1
// numbers [90, 9, 8]
// res = "9908"

// Example 2
// numbers [59, 5, 8]
// res = "8595"

main();

function main() 
{
    //int numbersArray[] = {59, 5, 8};
    var numbers = [90, 9, 8];
    
    var res = getMaxNumber(numbers);
	console.log("Max number is" , res);
    return 0;
}

function getMaxNumber(numbers){
    
    numbers.sort(sortCriteria);
	// Join list into a string
	// join expects a string , therefore convert it to a string before
	return numbers.join('');
}

function sortCriteria(num1, num2){
	return parseInt( String(num2) + String(num1)) -  parseInt(String(num1) + String(num2)) 
}