// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

export class Queue {
  private data: any[];
  constructor() {
    this.data = [];
  }

  add(record: any) {
    this.data.unshift(record);
  }
  peek(): any {
    return this.data[this.data.length - 1];
  }
  remove() {
    return this.data.pop();
  }
}
