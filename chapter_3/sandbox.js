// // for loops
// for(let i = 0; i < 5; i++){
//   console.log('in loop:', i)
// }
// console.log('loop complete');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//   // console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }


// // while loops
// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;
// while(i < 5){
//   console.log('in loop: ', i);
//   i++;
// }

// while(i < names.length){
//   console.log(names[1]);
//   i++;
// }


// // do while loops
// let i = 5;

// do{
//   console.log('val of i is: ', i);
//   i++
// }
// while(i < 5)


// // if statements
// const age = 25;

// if(age > 20){
//   console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi']

// if(ninjas.length > 4){
//   console.log("that's a lot of ninjas");
// }

// const password = 'p@ss';

// if(password.length >= 12){
//   console.log('password is mighty strong!')
// } else if(password.length >= 8) {
//   console.log('that password is long enough!')
// } else {
//   console.log('password is not long enough!')
// }


// // logical operators - OR || AND &&
const password = 'p@ss12';

if(password.length >= 12 && password.includes('@')){
  console.log('password is mighty strong!')
} else if(password.length >= 8 || password.includes('@') && password.length >= 5) {
  console.log('that password is strong enough!')
} else {
  console.log('password is not strong enough!')
}