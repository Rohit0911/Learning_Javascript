const roll=12334
let account_mail="rohitpol@google.com"
var password="49384"
city="Pune"
console.log(roll);
console.log(account_mail);
console.log(password);
console.log(city);




console.log("Changes are being made \n")
// roll=12335
//*****  You can't change the value of const variable
account_mail="rohitpol1109@gmail.com"
password="9876"
city="Bengaluru"

console.log(account_mail)
console.log(password)
console.log(city)


//1. Except the constant variables all other types of variables are mutable
//2. Another way to print the variables is

let lifegoal  // This is shows that I haven't yet defined the value here so it prints undefined 
console.table([roll,account_mail,password,city,lifegoal])

/*
Dont use Var for declaring variables from now on and use Let.
Var creates serious issues with the block scope.


Variable declaration can be done using two ways
1. Const
2. Let
Var was used earlier but it has scope issue and so use only Let...


*/

console.log(typeof(account_mail))
console.log(typeof(roll))
console.log(typeof(password))
