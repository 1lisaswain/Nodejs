let array = [1, 3, 2, 4, 5];
console.log(array.length);
console.log(array.concat(6));
console.log(array.push(6));
console.log(array);
console.log(array.pop());
console.log(array);
console.log(array.unshift(6));
console.log(array);
console.log(array.shift());
console.log(array);
console.log(array.findIndex(x => x > 4));
console.log(array.map(x => x * 2));
console.log(array.some(x => x / 3 === 0));
console.log(array.indexOf(5));
console.log(array.filter(x => x > 4));
console.log(array.copyWithin(2, 3, 4));
console.log(array.fill(1, 0, 5));
let array1 = ['lisa', 'namita', 'ruchi', 'suchi', 'lipi', 'barsha'];
console.log(array1.includes('ruchi'));
let arr = ['cow', 'dog', 'lion', 'bear'];
let iterator = arr.values();
for (let value of iterator) {
    console.log(value)
}
const arra = [1, 2, 3, 5, 6];
let iterator1 = arra.keys();
for (let key of iterator1) {
    console.log(key);
}
let arr2 = [1, 2, 3, 4, 5, 6];
let index = 4;
console.log(arr2.reverse());
console.log(arr2.toString());
console.log(arr2.sort());
console.log(arr2.slice(1, 4));
console.log(arr2.splice(1, 1, 7));
console.log(arr2);
console.log(arr2.at(index));
let arr3 = ['lisa', 'swain'];
console.log(arr3.join('-'));
console.log(Array.from('lisa'));

