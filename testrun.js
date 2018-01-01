const b32s = require('./base32s.js');

for (var i = 0; i < 1000; i++) {
	console.log(i, b32s.base32s(i));
	if (i != b32s.base32s_decode(b32s.base32s(i))) {
		console.log('Assertion failure: ', i, b32s.base32s(i), b32s.base32s_decode(b32s.base32s(i)));
	}
}
