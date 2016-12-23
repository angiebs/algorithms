var reference = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
NUM=26;

console.log( 'A'.charCodeAt(0) );
//console.log('Col number: ', excelColNum('ACVDZ'));

function excelColNum(col){
    
    var arrayCol= col.split('');
    var A = [], n = arrayCol.length, formula = 0;
    for(var i=0; i<arrayCol.length; i++){
        for(var j=0; j<reference.length; j++){
            if(arrayCol[i] === reference[j]){
                formula = formula + (j+1)*Math.pow(NUM, n-(i+1));
                break;
            }
        }
    }
    
    return formula;
    
}