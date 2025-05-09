// // object literals
// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs: ['why mac and cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// // user.age = 35;
// console.log(user.age);

// console.log(user['email']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);


// // object methods and 'this'
// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs: ['why mac and cheese rules', '10 things to make with marmite'],
//   login(){
//     console.log('the user logged in');
//   },
//   logout(){
//     console.log('the user logged out');
//   },
//   logBlogs(){
//     // console.log(this.blogs)
//     console.log('this user has written the following blogs:')
//     this.blogs.forEach(blog => {
//       console.log(blog);
//     })
//   }
// };

// // user.login();
// // user.logout();
// user.logBlogs();


// // objects in arrays
// const blogs = [
//   { title: 'why mac and cheese rules', likes: 30 },
//   { title: '10 things to make with marmite', likes: 50 }
// ];

// console.log(blogs);

// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs: [
//     { title: 'why mac and cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
//   ],
//   login(){
//     console.log('the user logged in');
//   },
//   logout(){
//     console.log('the user logged out');
//   },
//   logBlogs(){
//     // console.log(this.blogs)
//     console.log('this user has written the following blogs:')
//     this.blogs.forEach(blog => {
//       console.log(blog.title, blog.likes);
//     })
//   }
// };

// user.logBlogs();


// // Math object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area)); // round to closest whole
// console.log(Math.floor(area)); // floor it to whole number
// console.log(Math.ceil(area)); // raise it to whole number
// console.log(Math.trunc(area)); // takes away decimal, leaves integer

// // random number gen
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100)) // will generate random number between 1 and 100


// // primitive values
// let scoreOne = 50;
// let scoreTwo = scoreOne;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // changing scoreOne doesn't affect scoreTwo in the stack

// // reference values
const userOne = { name: `ryu`, age: 30 };
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo); // both variables are changed because it points to the same object in heap memory