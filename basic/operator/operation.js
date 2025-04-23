//Arithmetic operatiuon
// 5+5
// 10-5;
// 5*5
// 5/5;
// 2**3//==>power
// 5%5//mod  operation===>give remainder
// console.log(5%2)


//=====Assigment operator
// let valueTwo=3;
// valueTwo+=5;
// console.log(valueTwo);
// valueTwo*=2;
// console.log(valueTwo)


// comparrision   operator

console.log(5 == "5");       // true → values are the same after coercion
console.log(null == undefined); // true → both are loosely equal
console.log(5 != "5");       // false → same after coercion
console.log(0 != false);     // false → both falsy

//🔸 2. === (Strict Equality)
console.log(5 === "5");      // false → number vs string
console.log(5 === 5);        // true
console.log(5 !== "5");      // true → different types
console.log(5 !== 5);        // false → same type and value

//relational operator
console.log(10 > 5);         // true
console.log("20" > 15);      // true → string coerced to number
//less than
console.log(3 < 7);          // true
console.log("2" < 10);       // true → coerced to number
// >= (Greater Than or Equal)
console.log(5 >= 5);         // true
console.log(7 >= 10);        // false
//8. <= (Less Than or Equal)

console.log(4 <= 4);         // true
console.log(9 <= 3);         // false

//Strings are compared lexicographically (like a dictionary), based on Unicode.


console.log("apple" < "banana");   // true
console.log("a" > "Z");      


console.log('Z' > 'A');     // Output: true 'Z' comes after 'A' in Unicode order.
console.log('a' > 'Z');     // Output: trueLowercase letters have higher Unicode values than uppercase ones.
console.log('Glow' > 'Glee'); // Output: true Compared letter-by-letter: 'G' == 'G', 'l' == 'l', 'o' > 'e'.
console.log('Bee' > 'Be');    // Output: true'Bee' is longer, and the common part is identical. Longer string wins.
console.log("2" > "12");      // Output: true String comparison: '2' > '1' lexicographically.
console.log(null == 0);       // Output: false// null loosely equals only undefined, not 0.

console.log(null >= 0);       
// Output: true
// null is converted to 0 → 0 >= 0 → true.







