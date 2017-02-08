var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newInstance = {};
  newInstance.storage = {};
  newInstance.currentSize = 0;
  _.extend(newInstance, stackMethods);

  return newInstance;
};

var stackMethods = {
};

stackMethods.size = function() {
  return this.currentSize;
};

stackMethods.push = function(value) {
  this.storage[this.currentSize] = value;
  this.currentSize++;
};

stackMethods.pop = function() {
  if (this.currentSize) {
    this.currentSize--;
    var removed = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    return removed;
  }
};


