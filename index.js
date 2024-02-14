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

// 26

// const name = 'Subscribe';
// const age = 21;

// console.log(isNaN(name));
// console.log(isNaN(age));

// map method

// eg 1

// const data = [1, 2, 3, 4, 5, 6, 7, 8];

// const result = data.map(item => item * 2);

// console.log(result);

// eg 2

// let numbers = [1, 2, 3, 4, 5];

// let mapReturn = numbers.map(elem => elem * elem);
// let forEachReturn = numbers.forEach(elem => elem * elem);

// console.log(mapReturn); //output: [ 1, 4, 9, 16, 25 ]
// console.log(forEachReturn); //output: undefined

// eg 3 chain

// let numbers = [1, 2, 3, 4, 5];
// let result = numbers
// 	.map(function (element) {
// 		return element * element;
// 	})
// 	.filter(function (element) {
// 		return element > 10;
// 	})
// 	.reduce(function (accumulator, element) {
// 		return (accumulator += element);
// 	});
// console.log(result); //Output: 41

// eg 4 short code of eg 3

// let numbers = [1, 2, 3, 4, 5];
// let result = numbers
// 	.map(elem => elem * elem)
// 	.filter(elem => elem > 10)
// 	.reduce((accu, elem) => (accu += elem));
// console.log(result); //41

// eg 5 map

// const arr = [2, 3, 4, 5, 6, 7, 8];

// function double(x) {
// 	return x * 2;
// }

// function triple(x) {
// 	return x * 3;
// }

// const output = arr.map(double);
// const output = arr.map(triple);
// const output = arr.map(function binary(x) {
// 	return x.toString(2);
// });
// console.log(output);

// filter

// const arr = [2, 4, 5, 7, 8, 10, 13];

// const isOdd = x => {
// 	return x % 2;
// };
// const isEven = x => {
// 	return x % 2 === 0;
// };

// const greaterFour = x => {
// 	return x > 4;
// };

// const output = arr.filter(isOdd);
// const output1 = arr.filter(isEven);
// const output2 = arr.filter(greaterFour);
// console.log(output);
// console.log(output1);
// console.log(output2);

// reduce

// eg 1

// const arr = [2, 4, 5, 7, 8, 10, 13];

// const output = arr.reduce(function (acc, curr) {
// 	acc = acc + curr;
// 	return acc;
// }, 0);

// console.log(output);

// eg 2

// const arr = [2, 4, 5, 7, 8, 10, 13];

// function findMax(arr) {}

// console.log(findMax(arr));

// const output = arr.reduce(function (max, curr) {
// 	if (curr > max) {
// 		max = curr;
// 	}
// 	return max;
// }, 0);

// console.log(output);

// tricky array

const users = [
	{
		firstName: 'ahsan',
		lastName: 'Satti',
		age: 26,
	},
	{
		firstName: 'mohsin',
		lastName: 'ejaz',
		age: 75,
	},
	{
		firstName: 'sayam',
		lastName: 'ahmed',
		age: 50,
	},
	{
		firstName: 'rizwan',
		lastName: 'riaz',
		age: 26,
	},
];

// list of full names ?

// const output = users.map(x => x.firstName + ' ' + x.lastName);

// console.log(output);

// find unique and same age?

// const output = users.reduce(function (acc, curr) {
// 	if (acc[curr.age]) {
// 		acc[curr.age] = ++acc[curr.age];
// 	} else {
// 		acc[curr.age] = 1;
// 	}
// 	return acc;
// }, {});

// console.log(output);

// first name of all the people who's age is less than 30

// 1 method

// const output = users.filter(x => x.age < 30).map(x => x.firstName);

// console.log(output);

// 2 method

const output = users.reduce(function (acc, curr) {
	if (curr.age < 30) {
		acc.push(curr.firstName);
	}
	return acc;
}, []);

console.log(output);
