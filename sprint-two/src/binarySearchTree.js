var BinarySearchTree = function(value) {
  
  var newNode = Object.create(bstMethods);
  newNode.value = value;
  newNode.left = null;
  newNode.right = null;
  return newNode;
};

var bstMethods = {};

bstMethods.insert = function(val) {
  var newNode = BinarySearchTree(val);

  var test = function(node) {
    if (val < node.value) {
      if (node.left) {
        test(node.left);
      } else {
        node.left = newNode;
        return;
      }
    } else if (val > node.value) {
      if (node.right) {
        test(node.right);
      } else {
        node.right = newNode;
        return;
      }
    }
  };

  test(this);
};

bstMethods.contains = function(val) {
  if (this.value === val) {
    return true;
  } else {
    var leftHas = false;
    var rightHas = false;
    if (this.left) { 
      leftHas = this.left.contains(val);
    }
    if (this.right) {
      rightHas = this.right.contains(val);   
    }
  }

  return (leftHas || rightHas);
};

bstMethods.depthFirstLog = function() {};


/*
 * Complexity: What is the time complexity of the above functions?
 */
