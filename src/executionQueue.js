class ExecutionQueue {
  constructor() {
    this.items = [];
  }

  reset() {
    this.items = [];
  }
  // Add element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  // Peek at the front element of the queue
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print the queue
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Export the Queue class
export default ExecutionQueue;
