function nextInLine(arr, item) {
    // Only change code below this line
    
    // store the variable item in the array
arr.push(item);


 // shift -> remove 1st item in array
 //pop -> remove last item in array
    return arr.shift();
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  