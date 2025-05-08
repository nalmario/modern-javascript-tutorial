// // function declaration
// function greet(){
//   console.log('hello there');
// }

// // function expression
// const speak = function(){
//   console.log('good day!');
// };

// greet();
// speak();


// // arguments and parameters
// const speak = function(name = 'luigi', time = 'night'){
//   console.log(`good ${time}, ${name}`);
// };

// speak('mario', 'morning');
// speak();


// // returning values
// const calcArea = function(radius){
//   return 3.14 * radius**2
// };

// const area = calcArea(5);
// console.log(area);

// const calcVol = function(area){
//   // return calculation here
// };

// calcVol(area);


// // arrow function syntax, just a newer and shorter way of writing out functions
// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is:', area);

// // practice
// const greet = function(){
//   return 'hello, world';
// };

// const greet = () => 'hello,world';
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// const bill = (products, tax) => {
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10,15,30], 0.2));


// // functions
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods
// invoked using . notation
// const name = 'shaun';
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);


// // callbacks & foreach
// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello, ${person}`);
// };

// people.forEach(logPerson);

// people.forEach((person, index) => {
//   console.log(index, person);
// });


// // get a reference to the 'ul'
const ul = document.querySelector('.people'); // uses css selector to get the ul element
const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``

people.forEach(person => {
  // create html template
  html += `<li style="color: purple">${person}</li>`
});

console.log(html);
ul.innerHTML = html;