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

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack = new Stack()
    this.data = new Stack()
  }

  add(n) {
    this.stack.push(n)
  }

  remove() {
    while (this.stack.peek()) {
      this.data.push(this.stack.pop())
    }

    const result = this.data.pop()

    while (this.data.peek()) {
      this.stack.push(this.data.pop())
    }

    return result
  }

  peek() {
    while (this.stack.peek()) {
      this.data.push(this.stack.pop())
    }

    const result = this.data.peek()

    while (this.data.peek()) {
      this.stack.push(this.data.pop())
    }

    return result
  }
}

module.exports = Queue;
