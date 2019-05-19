
function runWithDebugger(callback, optionalArray) {
  debugger;
  if (optionalArray && Array.isArray(optionalArray)) {
    callback.apply(this, optionalArray);
  } else {
    callback();
  }
}
