// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

export class Queue {
  queue: ReadonlyArray<number> = [];
  add(n: number): void {
    this.queue = [n, ...this.queue];
  }
  remove(): number {
    const item = this.queue[this.queue.length-1];
    this.queue = this.queue.slice(0, this.queue.length - 1);
    return item;
  }
}
