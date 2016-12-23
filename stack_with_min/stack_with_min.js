
function minValue(){
    if(this.values.length > 0)
    {
      return this.values[this.values.length - 1].refMin;
    }
}

var myStack = {
    values : [],
    push : function (input){
              var myItem = {value : input, refMin: input};
              
              if(this.values.length > 0){
                var last = this.values[this.values.length -1];
                
                if(last.refMin < input){
                  myItem.refMin = last.refMin;
                }
              }
              
              this.values.push(myItem);
            
            },
    min : minValue,
    toString : function (){
      var result ='';
      for(var i=0; i<this.values.length; i++){
        result = result + this.values[i].value + ',';
      }
      return result;
    }
};

init();

function init(){
    
  console.log("Stack with min value");
  
    myStack.push(10);
    myStack.push(5);
    myStack.push(1);
    myStack.push(3);
    myStack.push(2);
    
    console.log("Stack is: ", myStack.toString());

    console.log("Min value is ", myStack.min());
    
    myStack.values.pop();
    myStack.values.pop();
    myStack.values.pop();
    
    console.log("Stack is: ", myStack.toString());
    console.log("Min value is ", myStack.min());
    
    myStack.push(1);
    myStack.push(-1);
    myStack.push(0);
    myStack.values.pop();
    myStack.values.pop();
    
    console.log("Stack is: ", myStack.toString());
    console.log("Min value is ", myStack.min());
    
    myStack.push(-1);
    
    console.log("Stack is: ", myStack.toString());
    console.log("Min value is ", myStack.min());

}