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
const calcArea = function(radius){
  return 3.14 * radius**2
};

const area = calcArea(5);
console.log(area);

const calcVol = function(area){
  // return calculation here
};

calcVol(area);