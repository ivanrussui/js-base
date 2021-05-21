'use strict';

let a = 5,
	b = a;

b = b + 5;

// console.log(b);
// console.log(a);

const obj =	{
	a: 5,
	b: 1
};

// const copy = obj; //ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);


// const arr = [11, 2, 3, 6, 8];

// arr.sort();

// console.log(arr);


// // var arr = {a:1, b:2, c:3};

// for (let value of arr) {
// 	value += 1;
// 	// console.log(value);
// }

// arr.forEach(function (item, i, arr) {
// 	item += 1;
// 	// console.log(item);
// 	// console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const obj = {a:4, b:2, c:3};
// // const obj = [4, 2, 3];

// for (const prop in obj) {
//   console.log(obj[prop]);
// }


// const arr = [1, 2, 3, 6, 8];

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();Ю
// arr.push(9);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	// console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// // function first() {
// // 	setTimeout(function () {
// // 		console.log(1);
// // 	}, 500);
// // }

// // function second() {
// // 	console.log(2);
// // }

// // first();
// // second();

// // function learnJS(lang, callback) {
// // 	console.log(`Я учу: ${lang}`);
// // 	callback();
// // }

// // function done() {
// // 	console.log('Я прошел этот урок');
// // }

// // learnJS('JavaScript', done);

// // тут я практикуюсь
// // function myFirst(text) {
// // 	console.log(text);
// // }

// // myFirst('and me')

// // const myFullName = 'Ivan Russu';

// // console.log(myFullName.indexOf('s'));
// // console.log(myFullName[5]);
// // console.log(myFullName.slice(5));

// // const myNumber = '31.3px';
// // console.log(myNumber);
// // console.log(Math.trunc(myNumber));
// // console.log(parseInt(myNumber));
// // console.log(parseFloat(myNumber));
// // console.log(parseFloat(myNumber));
// // console.log(myNumber.parseFloat());

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	},
// 	makeTest: function() {
// 		console.log('Test');
// 	}
// };

// options.makeTest();

// const {border, bg} = options.colors;
// // console.log(border);

// // console.log(Object.keys(options).length);

// const myCar = {
// 	mercedes: 'violet',
// 	bmw: 'blue',
// 	audi: 'red',
// 	porshe: 'green',
// 	mazda: 'black',
// 	toyota: {
// 		doors: 'indigo',
// 		hood: 'white'
// 	}
// }

// // console.log(Object.keys(myCar.toyota.doors).length);

// const myFamily = {
// 	mama: 'Evgenia',
// 	papa: 'Ivan',
// 	sisterFamily: {
// 		sister: 'Kris',
// 		sisterHusband: 'Vova'
// 	},
// 	sisterJ: 'Alexandra'
// }

// // console.log(Object.keys(myFamily.sisterFamily).length);
// // console.log(myFamily);

// // console.log(options['colors']['border']);

// // delete options.name

// // console.log(options);

// // let counter = 0;

// // for (let key in options) {
// // 	if (typeof(options[key]) === 'object') {
// // 		for (let i in options[key]) {
// // 			console.log(`Свойтво ${i} значение ${options[key][i]}`);
// // 		}
// // 	}	else {
// // 		console.log(`Свойтво ${key} значение ${options[key]}`);
// // 		counter++;
// // 	}
// // }

// // console.log(counter);



