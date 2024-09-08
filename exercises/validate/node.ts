export class Node {
  data: any;
  left: any;
  right: any;
  constructor(data:any) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data: any) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
}
