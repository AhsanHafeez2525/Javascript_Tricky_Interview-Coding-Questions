// 1

// let a = [];
// let b = [];
// console.warn(a == b);
// console.warn(a === b);

// 2

// let a = [];
// let b = a;
// console.warn(a == b);
// console.warn(a === b);

// 3

// let a = [20];
// let b = [20];
// console.warn(a[0] == b[0]);
// console.warn(a[0] === b[0]);

// 4

// let z = [1, 2, 3, 4, 5];

// let a = { name: 'ahsan' };

// console.warn(...z);

// 5

// console.warn(typeof NaN);

// 6

// let data = 10 - -10;
// console.warn(data);

// 7

// const set = new Set([1, 2, 3, 4]);

// console.log(set);

// 8

// let data = { name: 'Anil' };

// console.warn(delete data.name);

// 9

// let data = { name: 'Anil' };

// console.warn(delete data);

// 10

// const data = ['Peter', 'anil', 'sam'];

// const [y] = data;
// const [, y] = data;
// console.log(y);

// 11

// const data = { name: 'anil', age: 29, skill: '35' };
// const { name } = data;
// console.warn(name);

// 12

// merge 2 objects

let data = { name: 'ahsan', age: 24, skill: '35' };

let info = { city: 'isl', hobby: 'cricket' };

data = { ...data, ...info };

console.warn(data);
