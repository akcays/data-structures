var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    var node = Node(value); //create new node
    if (list.tail) { //if there's already something in the list
      list.tail.next = node; //point the last object of list to our new node
    }
    if (!list.tail) { //if there's nothing in the list
      list.head = node; //point the head to our new node
    }
    list.tail = node; //rename the new element we just added to tail
  };

  list.removeHead = function() {
    var removed = null;
    if (list.head === list.tail && list.head) { //if only one element
      removed = list.head.value;
      list.head = null;  //delete that element, set head and tail to null
      list.tail = null;
    } else { //there is more than 1 element
      removed = list.head.value; //set removed to equal the head value
      list.head = list.head.next;  
    }
    return removed;
  };

  list.contains = function(target) {
    var curr = list.head;
    while (curr) {
      if (curr.value === target) {
        return curr;
      }
      curr = curr.next;
    }
    return false;
  };

  list.insert = function(node, val) {
    var newNode = Node(val);
    newNode.next = node.next;
    node.next = newNode;
  };

  list.remove = function(node) {
    var curr = list.head;
    while (curr) {
      if (curr.next === node) {
        curr.next = node.next;
        node.next = null;
        return node;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
