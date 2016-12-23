
var result = matrix(4);
console.log('my matrix:');
console.log(result);

function matrix(input){
    var result = [];
    var n = parseInt((input*2) -1);
    
    for(var j=0; j <n; j++){
        var newJ = j>= input ? (n-1)-j : j; 
        var vector = [];
        // create new row
        for(var i=0; i<input; i++ )
        {
            var val = 0;
            if(newJ==i || newJ>i){
                val = (input - i);
            }
            else if(newJ<i){
                val = input - newJ;
            }
            
            vector.splice(i,0, val);
            
            // if i is different to the half mirror the value
            if(i !== (input-1))
            {
                vector.splice((vector.length - i), 0, val);
            }
        }
        //Push row
        result.push(vector);
    }
    
    return result;
}