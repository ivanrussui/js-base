'use strict';

if (1) {
	console.log('ok');
}	else {
	console.log('error');
}



// if (num < 49) {
// 	console.log('error');
// }	else if (num > 100) {
// 	console.log('many');
// }	else {
// 	console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');

const num = '50';

switch (num) {
	case '49': 
		console.log('no');
		break;
	case '100':
		console.log('no');
		break;
	case '50':
		console.log('yes');
		break;
	default:
		console.log('dont now');
		break;
}