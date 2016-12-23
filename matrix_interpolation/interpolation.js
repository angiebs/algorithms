//Task 1:  Javascript/Htl program

//Linear interpolation
var delim = " ";

function getValidFiles(){
  return ['application/vnd.ms-excel', 
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain'];
}

//Read file
function readCVSFile(selectedFiles) {
    var input = selectedFiles.target;
    
     if(input.files[0] && getValidFiles().indexOf(input.files[0].type) >= 0){
      var reader = new FileReader();
      reader.onload = function(){
        var text = reader.result;
        document.getElementById('input-div').style.display ="block";
        document.getElementById('input').value = text;
        CSVToMatrix(text);
      };
      reader.readAsText(input.files[0]);
    }
    else{
     alert("The file selected does not have the correct format!");
    }
}

//Create a two dimension array given a text
function CSVToMatrix(text){
  var vectorTemp = text.split('\n'),
  rawMatrix = [];
  
  delim = findDelimeter(vectorTemp[0]);
  
  for(var i=0; i< vectorTemp.length; i++){
    rawMatrix.push(vectorTemp[i].trim().split(delim));
  }
  
  interpolateData(rawMatrix);
}

function findDelimeter(str){
  return str.split(" ").length >= str.split(",").length? " " : ",";
}

function interpolateData(matrix){
  var error = validateMatrix2D(matrix),
  rows = matrix.length,
  cols = matrix[0].length;
  var output = document.getElementById('output-matrix');
  document.getElementById('div-output').style.display = "block";
  
  if(error === ''){
    //The variable "firstPositionToInterpolate" keeps the coords where is possible to interpolate in the case
    //where there is at least one element that could not be interpolated
    var firstPositionInterpolated = null;
    
    // Interpolation from left to right
    for(var i=0; i< rows; i++){
      for(var j=0; j< cols; j++){
        var value = parseFloat(matrix[i][j]);
        
        if(value == 0){
          //Verify if it is possible to interpolate.
          var interpolatedValue = calculateValue(i, j, matrix);
          if(interpolatedValue !== 0){
            matrix[i][j] = interpolatedValue;
            
            //Only to be set once
            if(firstPositionInterpolated === null){
              firstPositionInterpolated = {i: i, j:j};
            }
          }
        }
      }
    }
    
    // Interpolation from right to left (only if it is necessary)
    if(firstPositionInterpolated !== null && 
      firstPositionInterpolated.i !== 0 && 
      firstPositionInterpolated.j !== 0 ){
      interpolateLeft(firstPositionInterpolated.i, firstPositionInterpolated.j, matrix);
    }
    
    //print matrix
    output.value  = printMatrix(matrix, delim);
  }
  else{
    //Show error
    output.value  = error;
  }
}

function calculateValue(i, j, matrix){
  var leftPos = getLeftPosition(i, j, matrix.length, matrix[0].length),
  rightPos = getRightPosition(i, j,  matrix.length, matrix[0].length),
  valLeft = matrix[leftPos.i][leftPos.j],
  valRight = matrix[rightPos.i][rightPos.j];
  
  if(valLeft != 0 || valRight != 0){
    return ((parseFloat(valLeft) + parseFloat(valRight))/2);
  }
  
  return 0;
}

//This function interpolate from right to left
function interpolateLeft(startI, startJ, matrix){
  var cols = matrix[0].length;

  for(var i=startI; i>= 0; i--){
    for(var j=startJ; j >= 0; j--){
      matrix[i][j] = calculateValue(i, j, matrix);
    }
    //Setting j to last column
    startJ= (cols - 1);
  }
}

function getLeftPosition(i, j, rows, cols){
  var leftIdx = (j - 1);
  
  if(leftIdx < 0 && i > 0){
      return { i : (i-1), j : (cols -1)};
  }
  else if(leftIdx >= 0){
    return {i : i, j : leftIdx};
  }
  
  return {i : (rows-1), j : (cols -1)};
}

function getRightPosition(i, j, rows, cols){
  var rightIdx = (j + 1);
  
  if(rightIdx >= cols && i < (rows - 1)){
      return {i : (i+1), j : 0};
  }
  else if(rightIdx < cols){
    return {i: i, j : rightIdx};
  }
  
  return {i : 0, j:0};
}

function validateMatrix2D(matrix){
  //Validate all are numbers
  var error = "",
  matrixToArray = [].concat.apply([], matrix);
  
  // Concatenate the matrix to 
  if(!(matrixToArray).every(elem => !isNaN(parseFloat(elem, 3)))){
    return "The input is not well formed";
  }
  
  // Validate at least one element different zero
  if(allAreEqualToZero(matrixToArray)){
    return "Can not interpolate when all the values are equal to zero";
  }
  
  // Validate if the matriz is rectangular
  if(!hasEqualDimension(matrix)){
    return "It was not possible to create a matrix-2D with the input data";
  }
  
  return error;
}

// Compare if each row of the matrix have the same number of elements
function hasEqualDimension(matrix){
    if(matrix.length < 0) return false;
    
    return matrix.reduce(function(rowA, rowB){
      return (rowA.length === rowB.length)?rowA.length:(rowB.length);
    }) === matrix[0].length;
}

function allAreEqualToZero(array){
  var checkItem = 0;
  var isZero = true;
  for (var i = 0; i < array.length; i++) {
    if (array[i] != checkItem) {
      isZero = false;
      break;
    }
  }
  return isZero;
}

function printMatrix(myMatrix, delim){
  var rows = myMatrix.length,
  result = "";
  
  for(var i=0; i< rows; i++){
    result = result + myMatrix[i].join(delim);
    result = result + "\n";
  }
  
  return result;
}
