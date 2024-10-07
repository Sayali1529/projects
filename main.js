//console.log('Hello from main.js')

//let age=25
//console.log(age)

//const salary=8000
//console.log(salary)

// const name='Sayali'
// const language='Javascript'
// const channel='Codevalution'

// const total =0
// const PI= 3.14

// const isPrimaryNumber = true
// const isNewUser = false

// let result
// console.log(result)

// const res = null
// const data = null

// const person = {
//     firstName: 'Sayali',
//     lastName:'Kurade',
//     age:25,
// }
// console.log(person.firstName)

// const oddNumbers = [1,3,5,7,9]
// console.log(oddNumbers[2])

// let a=10
// a='sayali'
// a=true
// console.log(a)

// let x=10
// let y=5

// console.log(x%y)
// console.log(++x)
// console.log(--y)

// console.log (x==y)
// console.log (x!=y)
// console.log (x===y)
// console.log (x>y)
// console.log (x<y)

// console.log(true + '3')
// console.log('4' + '3')
// console.log('4' - '3')
// console.log('4' * '3')
// console.log('4' / '3')
// console.log('Sayali' + 'Kurade')
// console.log('Sayali' - 'Kurade')

//const num = -5
// if (num>0){
//     console.log('Number is positive')
// }else{
//     console.log('Number is not positive')
// }
// const num = 5
// if (num>0){
// console.log('Number is positive')
// }
// else if (num<0){
// console.log('Number is negative')
// }else{
//     console.log('Number is zero')
// }

// const color=10

// switch (color){
//     case 'red':
//         console.log('Color is red')
//         break
//         case 'blue':
//         console.log('Color is blue')
//         break
//         case 'green':
//         console.log('Color is green')
//         break
//         default:
//             console.log('not a valid color')
// }

// for (let i=1;i<=5;i++){
//     console.log('Iteration number'+i)
// }

// let i=1
// while(i<=5){
//     console.log('Iteration number'+i)
//     i++
// }

// let i=0;
// do{
//     console.log(i)
//     i++;
// }while (i<5);

// let arr=['a','b','c']
// for (let value of arr){
//     console.log(value)
// }

// let a =10
// function outer(){
//     let b=20
//     function inner(){
//         let c =30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()

// function greet(name) {
//     function sayHello() {
//       console.log("Hello, " + name + "!");
//     }
//     sayHello();
//   }
  
//   greet("Alice");
  
  // function multiplyByTwo(number) {
  //   function multiply() {
  //     return number * 2;
  //   }
  //   return multiply();
  // }
  
  // console.log(multiplyByTwo(5));  // Output: 10

  // const person = {
  //   name: 'SayaliKurade',
  //   greet: function() {
  //     console.log(this.name);
  //   }
  // };
  
  // person.greet();
  
  // function show() {
  //   console.log(this);
  // }
  
  // show(); 
  
  // const person = {
  //   name: 'Sayali',
  //   greet: () => {
  //     console.log(this.name);
  //   }
  // };
  
  // person.greet();

  // const person = {
  //   name: 'Rohan',
  //   greet: function() {
  //     console.log(this.name); // 'this' refers to the object 'person'
  //   }
  // };
  
  // person.greet(); 
  
//   let age = 20;

// if (age >= 18) {
//   console.log('Adult');
// } else {
//   console.log('Minor');
// }

// let day = 2;
// switch(day) {
//   case 1: console.log('Monday'); break;
//   case 2: console.log('Tuesday'); break;
//   default: console.log('Unknown');
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i); 
// }

// let count = 0;
// while (count < 3) {
//   console.log(count); 
//   count++;
// }

// function greet(name) {
//   return 'Hello, ' + name;
// }

// console.log(greet('Sayali')); 

// // Arrow function (ES6)
// const add = (a, b) => a + b;
// console.log(add(2, 3)); 

// let fruits = ['Apple', 'Banana', 'Mango'];

// console.log(fruits[1]); // Output: Banana

// fruits.push('Orange'); // Adds 'Orange'
// // console.log(fruits); 

// let car = {
//   brand: 'Toyota',
//   model: 'Corolla',
//   year: 2020,
//   start: function() {
//     console.log('Car started');
//   }
// };

// console.log(car.brand); // Output: Toyota
// car.start();

// let name = 'sayali';
// let message = `Hello, ${name}!`;
// console.log(message); 

// let person = { name: 'Alice', age: 25 };
// let { name, age } = person;
// console.log(name, age); 

// async function fetchData() {
//   let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   let data = await response.json();
//   console.log(data);
// }

// fetchData();

// console.log("Start");

// setTimeout(() => {
//     console.log("Executed after 2 seconds");
// }, 2000);

// console.log("End");

// let count = 0;

// let intervalId = setInterval(() => {
//     count += 1;
//     console.log(`Executed ${count} times`);

//     if (count === 5) {
//         clearInterval(intervalId);  // Stops the interval after 5 executions
//     }
// }, 1000);

function fetchData(callback) {
  setTimeout(() => {
      console.log("Data fetched");
      callback();
  }, 2000);
}

console.log("Start fetching");
fetchData(() => {
  console.log("Finished");
});


