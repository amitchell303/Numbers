// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    console.log(this.data.length);
    // return this.data.split(",").length
  }
  printNumbers() {
    console.log(this.data.toString(","));
    // const array = this.data;
    // console.log(array.toString());
  }
  odds() {
    const oddArr = [];
    for (let i = 0; this.data.length > i; i++) {
      if (this.data[i] % 2 !== 0) {
        oddArr.push(this.data[i]);
      }
    }
    return oddArr;
  }
  evens() {
    const evenArr = [];
    for (let i = 0; this.data.length > i; i++) {
      if (this.data[i] % 2 == 0) {
        evenArr.push(this.data[i]);
      }
    }
    return evenArr;
  }
  sum() {
    let sum = 0;
    for (let i = 0; this.data.length > i; i++) {
      sum += this.data[i];
    }
    return sum;
  }
  product() {
    let product = 1;
    for (let i = 0; this.data.length > i; i++) {
      product *= this.data[i];
    }
    return product;
  }
  greaterThan(target) {
    const greater = [];
    for (let i = 0; this.data.length > i; i++) {
      if (this.data[i] > target) {
        greater.push(this.data[i]);
      }
    }
    return greater;
  }
  howMany(target) {
    let count = 0;
    for (let i = 0; this.data.length > i; i++) {
      if (this.data[i] === target) {
        count++;
      }
    }
    return count;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(5)); //return the count of a specific number
