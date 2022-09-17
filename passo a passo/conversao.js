const str = String();
const num = Number();
const bool = Boolean();

console.log(str); // ->
console.log(num); // -> 0
console.log(bool); // -> false

const big1 = BigInt(42);
console.log(big1); // -> 42n

const big2 = BigInt();   // -> Uncaught TypeError: Cannot convert undefined to a BigInt

/////////////////////////////////////////////////////////////////////
let str = "text";
let strStr = String(str);
console.log('${typeof str} : ${str}'); // -> string : text
console.log('${typeof strStr} : ${strStr}'); // -> string : text

let nr = 42;
let strNr = String(nr);
console.log('${typeof nr} : ${nr}'); // -> number : 42
console.log('${typeof strNr} : ${strNr}'); // -> string : 42

let bl = true;
let strBl = String(bl);
console.log('${typeof bl} : ${bl}'); // -> boolean : true
console.log('${typeof strBl} : ${strBl}'); // -> string : true

////////////////////////////////////////////////////////////////////
console.log(Number(42)); // -> 42

console.log(Number("11")); // -> 11
console.log(Number("0x11")); // -> 17
console.log(Number("0o11")); // -> 9
console.log(Number("0b11")); // -> 3
console.log(Number("12e3")); //  -> 12000
console.log(Number("Infinity"));// -> Infinity
console.log(Number("text")); // -> NaN

console.log(Number(14n)); // -> 14
console.log(Number(123456789123456789123n)); // - >  123456789123
456800000

console.log(Number(true)); // -> 1
console.log(Number(false)); // -> 0

console.log(Number(undefined)); //  -> NaN

console.log(Number(null));// -> 0
////////////////////////////////////////////////////////////////////
console.log(Boolean(true)); // -> true

console.log(Boolean(42)); // -> true
console.log(Boolean(0)); // -> false
console.log(Boolean(NaN)); // -> false

console.log(Boolean("text")); // -> true
console.log(Boolean("")); // -> false

console.log(Boolean(undefined)); // -> false

console.log(Boolean(null)); // -> false
