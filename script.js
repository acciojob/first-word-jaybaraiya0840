function firstWord(s) {
  // your code here
	let tri=s.trim();
	let sp=tri.split(" ");
	return sp[0];
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
