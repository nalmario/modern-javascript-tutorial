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
const blogs = [
  { title: 'why mac and cheese rules', likes: 30 },
  { title: '10 things to make with marmite', likes: 50 }
];

// console.log(blogs);

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    { title: 'why mac and cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
  ],
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  },
  logBlogs(){
    // console.log(this.blogs)
    console.log('this user has written the following blogs:')
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    })
  }
};

user.logBlogs();
