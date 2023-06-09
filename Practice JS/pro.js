let name ={
   firstname:"Aakruti",
   lastname:"Dwivedi"
}

let printName = function(){
   console.log(this.firstname + " " + this.lastname);

}

let printMyName =printName.bind(name);
printMyName();


Function.prototype.mybind = function(...args){
let obj=this
return function(){
   obj.call(args[0])
}
}
 

let printMyName2 =printName.mybind(name);
printMyName2();

let multiply =function(x,y){
console.log(x*y);
}

let multiplyByTwo =multiply.bind(this,2);
multiplyByTwo(9);

document.querySelector("#grandparent")
.addEventListener('click',()=>{
console.log("Grandparent Clicked!!!");
},true) //capturing


document.querySelector("#parent")
.addEventListener('click',()=>{
console.log("Parent Clicked!!!");
},false) //bubbling


document.querySelector("#child")
.addEventListener('click',()=>{
console.log("Child Clicked!!!");
},true) //capturing  

document.querySelector("#category")
.addEventListener('click', (e)=>{
   console.log("I am Cllicked?????");
   window.location.href ="/" + e.target.id;
})

//Sum(1)(2)(3)(4)....() // 10
let sum=function(a){
   return function(b){
      if(b){
         return sum(a+b);
      }
      return a;
   }
}

let sum2 =a => b => b ? sum(a+b) : a;

console.log(sum(1)(2)(3)(4)());


console.log(sum2(11)(2)(3)(4)());

let arr =[11,645,976,49];
let arr6 =[111,224,336,449];
let arr7 =[1,2,6,9];
let txt = arr.toString();
console.log(txt);

let b =arr.join("#");
console.log(b, typeof b);

let r=arr.pop();
console.log(arr,r);

let p=arr.push(21);
console.log(arr,r);

let t = arr.shift();
console.log(t);

let y = arr.unshift(79);
console.log(y,arr);

delete arr[3];
console.log(arr);
console.log(arr.length); //Array length remains same 

let newarr = arr.concat(arr6,arr7);
console.log(newarr);

arr.sort(); // Sorts in alphabetical order
console.log(arr);

let compare =(a,b)=>{
return b-a;
}
arr.sort(compare);
console.log(arr);

arr.reverse();
console.log(arr);



const array = [32,56,7,90,12,65,23,15];
const removed = array.splice(2, 2,34,19);
console.log(array);    // Output: [1, 2, 5]
console.log(removed);  // Output: [3, 4]

//Arrays

let awt = [45,67,89,12];

/*The forEach() method calls a function (a callback function) once for each array element.
Note that the function takes 3 arguments:

The item value
The item index
The array itself */


awt.forEach((element) => {
console.log(element+element);
})   // cannot be used for html collections 

/*Array.from() - Used to create an array from any other object .
Converts string to array
         NodeList to array 
 Mapping elements during conversion */


 let o = "MONA";
 let h =Array.from(o)
 console.log(h);

 console.log(this);


 const nup =[1,2,3,4];
 let i= nup.slice(-1);
 console.log(i);
 
