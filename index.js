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

// let data = { name: 'ahsan', age: 24, skill: '35' };

// let info = { city: 'isl', hobby: 'cricket' };

// data = { ...data, ...info };

// console.warn(data);

// 13

// let data = { name: 'satti', age: 23, skill: '30' };
// let info = { city: 'lahore', routine: 'jogging' };

// data = { data, ...info };

// console.warn(data);

// 14

// let data = { name: 'satti', age: 23, skill: '30' };
// let info = { city: 'lahore', skill: 'stump' };

// data = { ...data, ...info };

// console.warn(data);

// 15

// const name = 'Anil';

// console.warn(name());

// 16

// const result = false || {} || null;

// console.warn(result);

// 17

// const result = null || false || '';

// console.warn(result);

// 18

// const result = [] || 0 || true;
// console.warn(result);

// 19

// console.warn(Promise.resolve(5));

// 20

// JSON.parse()

// what this method will do

// Parses JSON to a javascript value

// 21

// let name = 'satti';

// function getName() {
// 	console.log(name);
// 	let name = 'ahsan';
// }
// getName();

// 22

// let name = 'cena';

// function getName() {
// 	console.log(name);
// }
// getName();

// 23

// console.log(`${(x => x)('I love')} to program`);

// 24

// function sumValues(x, y, z) {
// 	return x + y + z;
// }
// console.warn(sumValues(...[1, 2, 3]));

// In which method will be correct for output 6
// A: sumValues([...1,2,3])
// B: sumValues([...[1,2,3]])
// C: sumValues(...[1,2,3])
// D: sumValues([1,2,3] )

// 25

// const name = 'ahsan step by step';
// console.log(!typeof name === 'object');
// console.log(!typeof name === 'string');
