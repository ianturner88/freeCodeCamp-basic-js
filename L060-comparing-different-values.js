// === does NOT preform type conversion --> items must be equal && of the same type

// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}

compareEquality(10, '10');
