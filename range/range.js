 var a = [10];
 var b = 10;
 
console.log ("Range: ", getRange(a, b));

function getRange(a, num){
   
    var indexInf = -1;
    var indexSup = -1;
    
    if(!(num < a[0] || num > a[a.length - 1]))
    {
        indexInf = calcIndexInf(0, a.length -1, num);
        indexSup = calcIndexSup(indexInf, (a.length -1), num, -1);
    }
    
    return [indexInf, indexSup];
}

function calcIndexInf(init, end, num){
    var dif = end - init;
    var mit = parseInt(dif/2) + init;
    
    if((num < a[mit] || 
        (!(mit === 0 || (mit > 0 && num !== a[mit -1])))) && dif !==0){
        return calcIndexInf(init, (mit-1), num);
    }
    else if((num > a[mit]) && dif !==0){
        return calcIndexInf(mit + 1, end,num);
    }
    else if(num === a[mit]){
        return mit;
    }
    else{
        return -1;
    }
}

function calcIndexSup(init, end, num){
    
    var dif = end - init;
    var mit = parseInt(dif/2) + init;
    
    if(num < a[mit] && (dif !== 0)){
        return calcIndexSup(init, (mit-1), num);
    }
    else if((num > a[mit] || 
        (!(mit === a.length -1 || (mit < (a.length -1) && num !== a[mit +1])))) 
        && (dif !== 0)){
        return calcIndexSup(mit + 1, end,num);
    }
    else if(num === a[mit]){
        return mit;
    }
    else{
        return -1;
    }
}