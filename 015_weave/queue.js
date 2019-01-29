// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.queue = []
  }

  add(n) {
    this.queue.unshift(n)
  }

  remove() {
    return this.queue.pop()
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }
}

module.exports = Queue;
