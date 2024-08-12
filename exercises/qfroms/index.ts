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

import { Stack } from './stack';

export class Queue {
  stack1 = new Stack();
  stack2 = new Stack();
  add(record: any) {
    while (!!this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    this.stack1.push(record);
  }
  peek(): any {
    while (!!this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.peek();
  }
  remove() {
    while (!!this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}
