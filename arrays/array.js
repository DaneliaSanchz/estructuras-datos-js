class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }

  shift() {
    this.delete(0);
  }

  unshift(item) {
    this.push(item);
    for (let i = this.length - 1; i >= 0 ; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    return this.data; 
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push("Diego");
myArray.push("Karen");
myArray.push("Oscar");
myArray.unshift("Danelia");
console.log(myArray);