// Assume denominaciones is sorted otherwise sorted first

// Example 1
// desiredSum = 5
// denominaciones [1, 2, 3]
// res = 5
// 1: 5x1 2: 3x1 + 1x2 3: 2x1 + 1x3 4: 1x1 + 2x2 5: 1x2 + 1x3

// Example 2
// desiredSum = 6
// denominaciones [1, 2, 3]
// res = 7
// 1: 6x1 2: 4x1 + 1x2 3: 3x1 + 1x3 4: 2x1 + 2x2 5: 1x1 + 1x2 + 1x3 6: 3x2 7: 2x3 
console.log("Start");
main();

function main() {
    var desiredSum = 6;
    var denominaciones = [1,2,3];
    var res = getAmountOfPossibleCombinations(desiredSum, denominaciones, 0);
    console.log("Numero of possible denominaciones is ", res);
    
}

function getAmountOfPossibleCombinations(desiredSum, denominaciones, currentSum){
    if (currentSum > desiredSum)
        return 0;
        
    if (currentSum == desiredSum)
    {
        return 1;
    }
    
    var res = 0 ;
    for (var i=0 ; i < denominaciones.length; ++i)
    {
        res += getAmountOfPossibleCombinations(desiredSum, 
        denominaciones.slice(i, denominaciones.length), currentSum + denominaciones[i]);
    }
    
    return res;
}

