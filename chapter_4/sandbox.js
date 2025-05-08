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
const speak = function(name = 'luigi', time = 'night'){
  console.log(`good ${time}, ${name}`);
};

speak('mario', 'morning');
speak();