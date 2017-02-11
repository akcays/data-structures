describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added, and return the node that contains that value', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4).value).to.equal(4);
    expect(linkedList.contains(5).value).to.equal(5);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('should insert a value after a given node', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    var nodeFive = linkedList.contains(5);
    linkedList.insert(nodeFive, 6);
    expect(linkedList.contains(6).value).to.equal(6);
    expect(linkedList.contains(6).next.value).to.equal(7);
    expect(linkedList.contains(5).next.value).to.equal(6);
  });

  it('should remove a node a given node', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    var nodeFive = linkedList.contains(5);
    linkedList.remove(nodeFive);
    expect(linkedList.contains(5)).to.equal(false);
    expect(linkedList.contains(4).next.value).to.equal(7);
  });


  // add more tests here to test the functionality of linkedList
});
