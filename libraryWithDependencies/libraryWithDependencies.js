
// librarySystem is a function that creates a library as well as gives us the ability to globally use the library created or any other libraries previously created/stored

// our task is to update the code to allow for dependencies on other libraries to occur (i.e. for one library to work it requires access to other libraries)

(function() {
  var libraryStorage = {};
  
  function librarySystem(libraryName, dependenciesArray, callback) {
    if (arguments.length > 2) {  // for creating a library
      if (dependenciesArray.length === 0) {  // no dependencies
        libraryStorage[libraryName] = callback();
      } else {
        var libraryStorageProperties = Object.values(libraryStorage);  // creates an array with obj own property values
        libraryStorage[libraryName] = callback.apply(null, libraryStorageProperties);
      }
    } else {
      return libraryStorage[libraryName];  // for using/accessing a library
    }  
  }

  window.librarySystem = librarySystem;
})();
