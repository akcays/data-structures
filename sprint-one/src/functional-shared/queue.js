var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.start = 0;
  newInstance.currentSize = 0;
  newInstance.storage = {};

  _.extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.currentSize;
};

queueMethods.enqueue = function(value) {
  this.storage[this.currentSize + this.start] = value;
  this.currentSize++;
};

queueMethods.dequeue = function() {
  if (this.currentSize) {
    this.currentSize--;
    var removed = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return removed;
  }
};


