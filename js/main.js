'use strict';

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);
// console.log([1,2,3]);

// const soldier = {
// 	health: 400,
// 	armor: 100,
// 	sayHello: function () {
// 		console.log('hello');
// 	}
// };

// const jonh = Object.create(soldier);

// const jonh = {
// 	health: 100
// };

// // jonh.__proto__ = soldier;

// // Object.setPrototypeOf(jonh, soldier);

// // console.log(jonh.armor);

// jonh.sayHello();


// // Декларируем функцию, используемую как конструктор
// function Employee() {
//   /* инициализируем экземпляр */
// }

// // Создаём новый экземпляр Employee
// var fred = new Employee();

// // Проверка на эквивалентность
// console.log(fred.__proto__ === Employee.prototype); // true



// function Cow() {
//   /* инициализируем экземпляр */
// }

// // Присваиваем __proto__ новый объект
// fred.__proto__ = Cow.prototype;
// console.log(fred.__proto__ === Cow.prototype);

// let animal = {
//   eats: true
// };

// // create a new object with animal as a prototype
// let rabbit = Object.create(animal);

// alert(rabbit.eats); // true

// alert(Object.getPrototypeOf(rabbit) === animal); // true

// Object.setPrototypeOf(rabbit, {
// 	jumps: {
//     value: 'yea'
//   }
// }); // change the prototype of rabbit to {}

// console.log(rabbit.jumps);


// let obj = Object.create(null);

// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";

// alert(obj[key]); // "some value"

// let chineseDictionary = Object.create(null);
// chineseDictionary.hello = "你好";
// chineseDictionary.bye = "再见";

// alert(Object.keys(chineseDictionary)); // hello,bye


// let a = 5,
//   b = a;

// b = b + 5;

// // console.log(b);
// // console.log(a);

// const obj = {
//   a: 5,
//   b: 1,
// };

// const copy = obj; //ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//   d: 17,
//   e: 20,
// };

// const clone = Object.assign({}, add);

// clone.d = 20;
// clone.b = 10;
// clone.z = 0;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'dsfdfvsd';
// // console.log(newArray);
// // console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//   blogs = ['wordpress', 'livejournal', 'blogger'],
//   internet = [...video, ...blogs, 'vk', 'fb'];

// // console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// // log(...num);

// const array = ['a', 'b'];

// const arr = [...array];

// array[1] = 'c';
// // console.log(array);
// // console.log(arr);

// const q = {
//   one: 1,
//   two: 2,
// };

// const newObj = { ...q };

// console.log(newObj);
// newObj.one = 0;
// console.log(newObj);
// console.log(q);

// let objq = {
//   a: 1,
//   b: {
//     c: 2,
//   },
// }

// let newObjq = JSON.parse(JSON.stringify(objq));

// objq.b.c = 20;
// console.log(objq); // { a: 1, b: { c: 20 } }
// console.log(newObjq); // { a: 1, b: { c: 2 } }

// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers1 = [3, 2, 3];

// console.log(sum(...numbers1));
// // expected output: 6

// console.log(sum.apply(null, numbers1));
// // expected output: 6

// function myFunction(x, y, z) {
// 	return x + y + z;
// }
// var args = [0, 1, 2];

// console.log(myFunction.apply(null, args));

// function myFunction(x, y, z) {
// 	return x + y + z;
// }
// var args = [0, 1, 2];
// // myFunction(...args);
// console.log(myFunction(...args));

// var dateFields = [1970, 0, 1];  // 1 Jan 1970
// var d = new Date(...dateFields);
// console.log(dateFields);
// console.log(d);
// console.log(typeof(new Date));


// var parts = ['shoulders', 'knees'];
// var lyrics = ['head', ...parts, 'and', 'toes'];
// // ["head", "shoulders", "knees", "and", "toes"]

// console.log(lyrics);

// var arr1 = [1, 2, 3];
// var arr2 = [...arr1]; // like arr.slice()
// arr2.push(4);

// // arr2 becomes [1, 2, 3, 4]
// // arr remains unaffected

// console.log(arr1);
// console.log(arr2);

// const a = [[1], [2], [3]];
// const b = [...a];
// b.shift().shift(); // 1
// // О нет. Теперь на массив "а" относятся также: а
// //[[], [2], [3]]
// console.log(a);
// console.log(b);

// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// // Append all items from arr2 onto arr1
// arr1 = arr1.concat(arr2);

// console.log(arr1);

// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// arr1 = [...arr1, ...arr2];
// console.log(arr1);


// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// // Prepend all items from arr2 onto arr1
// Array.prototype.unshift.apply(arr1, arr2) // arr1 is now [3, 4, 5, 0, 1, 2]

// console.log(arr1);
// // console.log(arr2);


// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];

// arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]

// console.log(arr1);
// console.log(arr2);


// var obj1 = { foo: 'bar', x: 42 };
// var obj2 = { foo: 'baz', y: 13 };

// var clonedObj = { ...obj1 };
// // Object { foo: "bar", x: 42 }

// var mergedObj = { ...obj1, ...obj2 };
// // Object { foo: "baz", x: 42, y: 13 }

// // console.log(obj1);
// // console.log(obj2);
// // console.log(clonedObj);
// console.log(mergedObj);

// var obj1 = { foo: 'bar', x: 42 };
// var obj2 = { foo: 'baz', y: 13 };
// const merge = ( ...objects ) => ( { ...objects } );

// var mergedObj = merge ( obj1, obj2);
// // Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }
// console.log(mergedObj);
// var mergedObj = merge ( {}, obj1, obj2);
// // Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }


// console.log(mergedObj);
// console.log(obj1);
// console.log(obj2);
// console.log(merge);







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
