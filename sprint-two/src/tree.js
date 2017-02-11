var Tree = function(value) {

  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  } else {
    var result = _.some(this.children, function(child) {
      return child.contains(target);
    });
  }
  return result;

};

treeMethods.removeChild = function(value, parent) {
  if (this.value === value) {
    var cur = this;
    _.each(parent.children, function(parentsChild, i) {
      if (cur === parentsChild) {
        parent.children.splice(i, 1);
      }
    });
  } else {
    var par = this;
    _.each(this.children, function(child) {
      child.removeChild(value, par);
    });
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
