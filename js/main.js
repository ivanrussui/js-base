'use strict';


const arr = [1, 2, 3, 6, 8];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

// arr.pop();
// arr.push(9);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }

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
