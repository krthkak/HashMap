import { HashMap } from "./HashMap.js";


const test = new HashMap(0.75,15); // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.length());
// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());
// console.log(test.has('elephant'));
// console.log(test.get('lion'));
// console.log(test.length());
// console.log(test.keys());
console.log(test);


//overflowing 

test.set('moon', 'silver')
test.set('grape', 'karthik')
test.set('ge', 'karthik')
console.log(test);
