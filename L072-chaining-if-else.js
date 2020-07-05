function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return 'Tiny';
  }
  if (num < 10) {
    return 'Small';
  }
  if (num < 15) {
    return 'Medium';
  }
  if (num < 20) {
    return 'Large';
} 
  }
  return 'Huge';
  // Only change code above this line
}

testSize(7);
