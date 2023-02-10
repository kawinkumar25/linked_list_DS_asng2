
const arr1 = ["Kawin", "Kumar"];
const arr2 = ["ragul", "gopi", "mohan"];
const arr3 = arr1.concat(arr2);
console.log("1 concat",arr3)


const arr4 = ["kawin", "kumar", "ragul", "gopi", "mohan"];
const arr5=arr4.copyWithin(2, 0, 2);
console.log("2 copyWithin",arr5)


console.log("3 entities")
const arr6 = ["Banana", "Orange", "Apple", "Mango"];
const  arr7 = arr6.entries();

for(let a of arr7)
{
    console.log(a)
}


const even = [12, 22, 31, 41];

console.log("4.every",even.every(checkEven))

function checkEven(even) {
  return even%2==0;
}


const arr8 = ["kawin", "kumar", "ragul", "gopi", "mohan"];
arr8.fill("sai",0,3)
console.log("5.fill",arr8)


const even1 = [12, 21, 32,42]
const res = even1.filter(checkEven)
console.log("6.filter ",res)


const even2 = [11, 22, 32, 42]
const res1 = even2.find(checkEvenFind)
function checkEvenFind(even2)
{
    return even2%2==0
}
console.log("7.find",res1)


const even3 = [11, 22, 32, 42]
const res2 = even3.findIndex(checkEvenFindIndex)
function checkEvenFindIndex(even2)
{
    return even2%2==0
}
console.log("8.findindex",res2)


console.log("9.for each")
const numbers = [1,2,3,4,5,6];
numbers.forEach(myFunction)

function myFunction(value, index, arr9) {
  arr9[index] = value * 10;
  console.log(arr9[index])
}


const arr10 = Array.from("kawin")
console.log("10.Arrayfrom ",arr10)


var arr11 = ["kawin", "kumar", "ragul", "gopi", "mohan"];
console.log("11.includes",arr11.includes("kumar",1))


const arr12 = ["kawin", "kumar", "ragul", "gopi", "kumar"];
let index = arr12.indexOf("kumar",3);
console.log("12.index",index)


const arr13 = ["kawin", "kumar", "ragul", "gopi", "kumar"];
let result = Array.isArray(arr13);
console.log("13.isarray",result)


const arr14 = ["kawin", "kumar", "ragul", "gopi", "kumar"];
let result1 = arr14.join();
console.log("14.isarray",result1)


const arr15 = ["kawin", "kumar", "ragul", "gopi", "kumar"];
const keys = arr15.keys();

let text = "";
for (let x of keys) {
  text += x ;
}
console.log("15.keys",text)


const arr16 = ["kawin", "kumar", "ragul", "gopi", "gopi"];
let index1 = arr16.lastIndexOf("gopi");
console.log("16.lastIndexOf",index1)


const arr17 = ["kawin", "kumar", "ragul", "gopi", "mohan"];
let length = arr17.length;
console.log("17.length",length)


const arr18 = [1,2,3,4,5];
const newArr = arr18.map(myfunction)

function myfunction(num) {
  return num * 10;
}
console.log("18.map ",newArr)




const arr19 = ["kawin", "kumar", "ragul", "gopi", "mohan"];
arr19.pop();
console.log("19.pop ",arr19)


const arr20 = ["kawin", "kumar", "ragul", "gopi"];
arr20.push("mohan");
console.log("20.push ",arr20)


const arr21 = [1,2,3,4,5];
const res3 = arr21.reduce(getSum, 0);

function getSum(total, num) {
  return total + num };
console.log("21.reduce ",res3)


const arr22 = [1,2,3,4,5];
var res4 = arr22.reduceRight(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log("22.reduce right ",res4)


const arr23 = [1,2,3,4,5];
var output = arr23.reverse();
console.log("23.reverse ",output);


const arr24 = ["kawin", "kumar", "ragul", "gopi"];
arr24.shift()
console.log("24.shift ",arr24)


const arr25= ["kawin", "kumar", "ragul", "gopi"];
const citrus = arr25.slice(1, 3);
console.log("25.shift ",citrus)


const even4 = [12, 22, 32, 42];

console.log("26.some",even4.some(checkEven))



const even5 = ["kawin", "kumar", "ragul", "gopi"];
even5.sort();
console.log("27.sort",even5)


const arr26 = ["kawin", "kumar", "ragul", "gopi"];

arr26.splice(2, 0, "saran", "aravi");
console.log("28.splice",arr26)


const arr27 = ["kawin", "kumar", "ragul", "gopi"];
res4=arr27.toString();
console.log("29.toString",res4);


const arr28 = ["kawin", "kumar", "ragul", "gopi"];
arr28.unshift("saran","aravi");
console.log("30.unshift",arr28);


const arr29 = ["kawin", "kumar", "ragul", "gopi"];
const res5= arr29.valueOf();
console.log("31.valueOf",res5);
