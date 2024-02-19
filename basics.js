function greet(name)
{
    console.log("welcome"+name);
}
greet("POOKI")
function add(a,b){
    return a+b;
}
console.log(add(2,3));
let person=[{
    name: "John",
    age: 21,
    city:"Trivandrum",
},
{
    name:"Karthi",
    age:22,
    city:"Kollam",
},
{
    name:"Shri",
    age:26,
    city:"ucity",
}
]
console.log(person[1].name);
var add=(a,b)=>{
    var sum=a+b;
    console.log(sum)
    console.log(`sum is ${sum}`)
}
add(10,30)
var[a,b,c,d]=["apples", "orange","pear"]
console.log(a);
console.log(b);

var a=[1,2,3]
var b=[4,5,6]
var c=[...a,...b];
console.log(c);
var[a,b,...t]=[1,2,3,4,5,6];
console.log(t);
console.log("First element of t is"+t[0]);