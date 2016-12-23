var array1 = [1, 2, 3, 4];
var finalResult = multiply(array1);
console.log('array 4', finalResult);

var array2 = [3, 5, 4, 2, 10, 7];
finalResult = multiply(array2);
console.log('array 6', finalResult);

var array4 = [2, 3, 5, 4, 2, 10, 7,1,2,1,2];
finalResult = multiply(array4);
console.log('array 10', finalResult);

var array3 = [3, 5, 4, 2, 1, 2, 3,1, 3, 5, 4, 2, 1, 2, 3,1];
finalResult = multiply(array3);
console.log('array 16', finalResult);

function multiply(input){
    var back = [], forward = [], finalResult = [];
    
    var temp=1;
    for(var i=0; i< input.length; i++){
        forward.push(temp);
        temp = temp*input[i];
    }
    
    temp = 1;
    for(var j=input.length-1; j >= 0; j--){
        back.unshift(temp);
        temp = temp*input[j];
    }
    
    for(var i=0; i< input.length; i++){
        finalResult.push(forward[i]*back[i]);
    }
    
    return finalResult
}