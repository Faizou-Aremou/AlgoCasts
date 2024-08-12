// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

import { Queue } from './queue';

export function weave(sourceOne: Queue, sourceTwo: Queue): Queue {
  const queue = new Queue();
  while (!!sourceOne.peek() || !!sourceTwo.peek()) {
    const datum1 = sourceOne.remove();
    const datum2 = sourceTwo.remove();
    queue.add(datum1);
    queue.add(datum2);
  }
  const remainQueue = queueWithData(sourceOne, sourceTwo);
  if (!!remainQueue?.peek()) {
    transferDataFormQueue(remainQueue, queue);
  }
  return queue;
}
function transferDataFormQueue(sourceOne: Queue, queue: Queue) {
  while (!!sourceOne.peek()) {
    const datum1 = sourceOne.remove();
    queue.add(datum1);
  }
}
function queueWithData(sourceOne: Queue, sourceTwo: Queue): Queue | undefined {
  if (!sourceOne.peek()) {
    return !!sourceTwo.peek() ? sourceTwo : undefined;
  }
  return sourceOne;
}
