var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    var popped = storage[size];
    delete storage[size];
    size--;
    return popped;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;
  };

  return someInstance;
};
