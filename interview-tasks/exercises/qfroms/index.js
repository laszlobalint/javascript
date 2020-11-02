// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  stackOrdered = new Stack();
  stackReversed = new Stack();

  add = (item) => this.stackOrdered.push(item);

  remove = () => {
    while (this.stackOrdered.peek()) this.stackReversed.push(this.stackOrdered.pop());
    const removed = this.stackReversed.pop();
    while (this.stackReversed.peek()) this.stackOrdered.push(this.stackReversed.pop());
    return removed;
  };

  peek = () => {
    while (this.stackOrdered.peek()) this.stackReversed.push(this.stackOrdered.pop());
    const peeked = this.stackReversed.peek();
    while (this.stackReversed.peek()) this.stackOrdered.push(this.stackReversed.pop());
    return peeked;
  };
}

module.exports = Queue;
