

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

  if (this._filled > (.75 * this._limit)) {
    this._filled = 0;
    this.resize(2);
  }
};

HashTable.prototype.resize = function(factor) {
  this._limit = this._limit * factor;
  var oldStorage = this._storage;
  //create a new this._storage with new limit
  this._storage = LimitedArray(this._limit);
  //loop through oldStorage, and for each value in each tuple, 
  var ht = this;
  oldStorage.each(function(box) {
    if (box) {
      //reasign it using this.insert to this._storage
      box.each(function(tuple) {
        if (tuple) {
          ht.insert(tuple[0], tuple[1]);
        }
      });
    }
  });

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
  this._filled--;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var box = this._storage.get(index);
  box.each(function(tuple, i) {
    if (tuple[0] === k) {
      box.set(i, undefined);
    }
  });
  if (this._filled > 1 && this._filled < (.25 * this._limit)) {
    this._filled = 0;
    this.resize(.5);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


