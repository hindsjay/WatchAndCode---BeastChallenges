// Function Signature:
  // isPrototypeOf(prototypeObj, object);

// Parameters:
  // prototypeObj >>> the object prototype in which another object may be linked/based upon
  // object >>> the object whose prototype chain will be searched

// Return Value:
  // returns a Boolean indicating whether the calling object lies in the prototype chain of the specified object

// Description:
  // to check whether or not an object exists within another object's prototype chain
  // a TypeError is thrown if prototypeObj is undefined or null

// ****************************

// >>> goal: to go through object prototype links and return true if there are matches as per our arguments
// >>> look to use recursion as there may be many depths to evaluate


function isPrototypeOf(prototypeObj, obj) {
  var prototypeToBeTested = Object.getPrototypeOf(obj);
  
  if (prototypeObj === undefined) {
    throw new TypeError('Cannot read property "isPrototypeOf" of undefined');
  }
  if (prototypeObj === null) {
    throw new TypeError('Cannot read property "isPrototypeOf" of null');
  }
  
  if (prototypeObj === prototypeToBeTested) {
    return true;
  } else {
    if (prototypeToBeTested === null) {
      return false;
    } else {
    return isPrototypeOf(prototypeObj, prototypeToBeTested);
    }
  }
}
