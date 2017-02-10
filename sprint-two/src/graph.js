

// Instantiate a new graph
var Graph = function() {

  //var this = object.create(graph.prototype)

  this.nodes = {};

  //return this

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var node = {val: value, edges: {}};
  this.nodes[value] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  return _.some(this.nodes, function(node) {
    return (node.val === value);
  });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  if (value in this.nodes) {
    delete this.nodes[value];
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromVal, toVal) {
  var fromNode = this.nodes[fromVal];
  var toNode = this.nodes[toVal];
  return _.contains(fromNode.edges, toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromVal, toVal) {
  var fromNode = this.nodes[fromVal];
  var toNode = this.nodes[toVal];
  fromNode.edges[toVal] = toNode;
  toNode.edges[fromVal] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromVal, toVal) {
  var fromNode = this.nodes[fromVal];
  var toNode = this.nodes[toVal];
  delete fromNode.edges[toVal];
  delete toNode.edges[fromVal];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  debugger;
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


