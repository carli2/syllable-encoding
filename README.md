Base32s - Number to Syllables encoding
======================================

base32s is a encoding scheme allowing to encode any number into a word consisting of syllables.

This is useful when handling cryptocurrency public and private keys on paper. Since base64, base58 and hex are hard to pronounce, a syllable based encoding can help talking about big numbers.

Some examples:
- 0 'Nix'
- 1 'Kan'
- 2 'Dong'
- 3 'Do'
- 4 'Fei'
- ...
- 238 'Fingming'
- 239 'Fiming'
- 240 'Salming'
- ...
- 954 'Warseng'
- 955 'Matseng'
- 956 'Miseng'


In the moment, the reference algorithm for encoding and decoding is implemented in JavaScript. I'm open to implementations in other programming languages like PHP, Java, C++, C# or Python. I'm also interested in alternative syllables lists that allow something like a more compact base256s encoding.

Usage
-----

```
const b32s = require('./base32s.js');

for (var i = 0; i < 1000; i++) {
	console.log(i, b32s.base32s(i));
	if (i != b32s.base32s_decode(b32s.base32s(i))) {
		console.log('Assertion failure: ', i, b32s.base32s(i), b32s.base32s_decode(b32s.base32s(i)));
	}
}
```
-
-
