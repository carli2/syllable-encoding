var syllables = ["ber","kan","dong","do","fei","wen","chi","ming","tor","mod","gon","pu","da","re","fing","fi","sal","sa","long","lor","lo","gan","tes","ling","yor","des","war","mat","mi","seng","mei","fur"];

function base32s_encode(number) {
	var s = '';
	while (number) {
		s += syllables[number%syllables.length];
		number = Math.floor(number / syllables.length);
	}
	if (!s) return 'Nix';
	return s[0].toUpperCase() + s.substr(1);
}

function base32s_decode(s) {
	s = s.trim().toLowerCase();
	if (s == 'nix') return 0;
	var result = 0;
	var p = s.length;
	while (p) {
		var found = false;
		for (var i = 0; i < syllables.length; i++) {
			if (p >= syllables[i].length && s.indexOf(syllables[i], p - syllables[i].length) == p - syllables[i].length) {
				result = result * syllables.length + i;
				p -= syllables[i].length;
				found = true;
				break;
			}
		}
		if (!found) {
			p--;
		}
	}
	return result;
}

if (typeof module !== 'undefined') {
	module.exports = {
		base32s_encode: base32s_encode,
		base32s_decode: base32s_decode
	}
}
