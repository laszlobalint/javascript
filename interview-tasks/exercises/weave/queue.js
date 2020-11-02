// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  data = [];
  add = (item) => this.data.unshift(item);
  remove = () => this.data.pop();
  peek = () => this.data[this.data.length - 1];
}

module.exports = Queue;
