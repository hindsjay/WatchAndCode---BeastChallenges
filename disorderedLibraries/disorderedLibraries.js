
(function() {
  var libraryStorage = {};
  var libraryCallbackHasRun = {};
  
  function librarySystem(libraryName, dependenciesArray, callback) {
    if (Object.keys(libraryCallbackHasRun).length > 0 && arguments.length === 1) {  // checks if callback has already run >>> returns value if callback has been executed
      for (i = 0; i < Object.keys(libraryCallbackHasRun).length; i++) {
        if (Object.keys(libraryCallbackHasRun)[i] === libraryName) {
          return libraryCallbackHasRun[libraryName];
        }
      }
    } 

    if (arguments.length > 1) {  // to store the library without executing callback
      libraryStorage[libraryName] = {
        callback: callback,
        dependencies: dependenciesArray
      }
    
    } else {  // use library if callback has not already been run

      var dependencyArray = libraryStorage[libraryName].dependencies;
      if (dependencyArray.length === 0) {  // no dependencies
        return libraryCallbackHasRun[libraryName] = libraryStorage[libraryName].callback();
      } else {  // with dependencies
        var libraryStorageValuesArray = dependencyArray.map(function(dependency) {
          return libraryStorage[dependency].callback();
        })
        return libraryCallbackHasRun[libraryName] = libraryStorage[libraryName].callback.apply(null,libraryStorageValuesArray);
      }
    }
  }
    
    function reset() {
    libraryStorage = {};
    libraryCallbackHasRun = {};
  }

  window.librarySystem = librarySystem;
  window.reset = reset;
})();