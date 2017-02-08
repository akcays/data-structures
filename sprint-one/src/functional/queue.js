var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  var start = 0;
  
  someInstance.enqueue = function(value) {
    storage[start + size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size) {
      size--;
      var removed = storage[start];
      delete storage[start];
      start++;
      return removed;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
