let a="34"

/* Suppose we are working on backend but we really dont know if the value in frontend can be used as Int, String or else
We cannot be sure of anything, as the variables dont really tell us lot about the data type

const {a}=req.body()    // This is kinda a backend logic which cannot specify the type of a which is intege in line 1*/


console.log(typeof a);
let valueInNumber =Number(a)

console.log(valueInNumber);  // If I have just number within "" then it can easily print that but if we have character with number inside "" then we get NaN: Not a Number
console.log(typeof valueInNumber);


console.log("************");

let b=a+a
console.log(b);

let c=valueInNumber*2
console.log(c);

console.log(c/Number(a));












