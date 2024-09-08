export class Node {
  data:any
  children:any
  constructor(data:any) {
    this.data = data;
    this.children = [];
  }

  add(data:any) {
    this.children.push(new Node(data));
  }
};
