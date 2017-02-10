

var HashTable = function() {
  this._limit = 8;
  this._filled = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  this._filled ++;
  var tuple = [k, v];
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    var box = LimitedArray(2);
    this._storage.set(index, box);
  }
  var box = this._storage.get(index);
  if (box.get(0) === undefined) {
    box.set(0, tuple);
  } else {
    box.set(1, tuple);
  }
};

HashTable.prototype.resize = function() {
  var newLimit = this._limit * 2;
  var oldStorage = this._storage;
  //create a new this._storage with new limit
  this._limit = newLimit;
  //loop through oldStorage, and for each value in each tuple, 
    //reasign it using this.insert to this._storage

};

HashTable.prototype.retrieve = function(k) {
  var result;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var box = this._storage.get(index);
  box.each(function(tuple) {
    //if tuple tuple does not equal undefined
    if (tuple && tuple[0] === k) {
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var box = this._storage.get(index);
  box.each(function(tuple, i) {
    if (tuple[0] === k) {
      box.set(i, undefined);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


