var syllabus = ["ber","kan","dong","do","fei","wen","chi","ming","tor","mod","gon","pu","da","re","fing","fi","sal","sa","long","lor","lo","gan","tes","ling","yor","des","war","mat","mi","seng","mei","fur"];

function isVocal(c) {
	return 'aeiou'.indexOf(c) != -1;
}

function base32s(number) {
	var s = '';
	while (number) {
		s += syllabus[number%syllabus.length];
		number = Math.floor(number / syllabus.length);
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
		for (var i = 0; i < syllabus.length; i++) {
			if (p >= syllabus[i].length && s.indexOf(syllabus[i], p - syllabus[i].length) == p - syllabus[i].length) {
				result = result * syllabus.length + i;
				p -= syllabus[i].length;
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
		isVocal: isVocal,
		base32s: base32s,
		base32s_decode: base32s_decode
	}
}
