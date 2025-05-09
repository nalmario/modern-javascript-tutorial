// alert('hello, world');

/* console.log(1);
console.log(2); */


// // let - variable assignment
// //     - use camelCase (don't start name with a number or use keywords)
// let myAge = 25;
// let year = 2019;

// console.log(myAge, year);

// myAge = 30;
// console.log(myAge);

// // const - variables that will not be changing
// const points = 100;
// // points = 50;
// console.log(points);

// // var - the old way of variable assignment (before let + const)
// var score = 75;
// console.log(score);


// // strings
// console.log('hello, world');

// let email = 'noahralmario@gmail.com';
// console.log(email);

// // string concatenation
// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // getting characters
// console.log(fullName[2]); // square brackets will grab the character at the provided index

// // string length
// console.log(fullName.length);

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// // common string methods
// result = email.lastIndexOf('o');
// result = email.slice(0,5);
// result = email.substr(4, 8)
// result = email.replace('n', 'w'); // only replaces first instance of 'n' in string
// console.log(result);


// // numbers
// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// // math operators +, -, *, /, **, %
// // REMEMBER BEDMAS
// console.log(10 / 2);
// // let result = radius % 3
// let result = pi * radius**2

// console.log(result)

// let likes = 10

//likes = likes + 1;
//likes++;
//likes--
//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

//console.log(likes);

// NaN - not a number
// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);


// // template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// // template string "concatenating"
// let result = `The blog called ${title} by ${author} has ${likes} likes.`;
// console.log(result);

// // creating html templates
// let html = `
//   <h2>${title}</h2>
//   <p>By ${author}</p>
//   <span>This blog has ${likes} likes</span>
// `;
// console.log(html);


// // arrays
// let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken'; // array override per position
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2])

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array methods
// let result = ninjas.join(','); // joins array into string, seperated by comma
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']); // adds array to end of ninjas array
// let result = ninjas.push('ken'); // returns length of the array, adds item 'ken'
// let result = ninjas.pop(); // removes last item in array, returns the removed item
// console.log(ninjas);


// booleans & comparisons
// console.log(true, false);

// methods can return booleans
// let email = 'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad']

// let result = email.includes('@'); // checks if a character is included in a string, will return true or false
// let result = names.includes('luigi');
// console.log(result);

// comparison operators
// let age = 25;
// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age >= 25);
// console.log(age <= 25);

// let name = 'shaun';
// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal'); // true, s comes later than c in the alphabet
// console.log(name > 'Shaun'); // true, lowercase letters are greater than any uppercase letter
// console.log(name > 'Crystal'); // true


// loose comparison (diff types can still be equal)
// let age = 25
// console.log(age == 25)
// console.log(age == '25'); // string is converted to number first bts
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (diff types cannot be equal, no type conversion bts)
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');


// type conversion
// let score = '100';
// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// console.log(result); // NaN

// let result = String(50);
// console.log(result, typeof result);

// positive and negative numbers are "truthy", 0 is "falsey"
// let result = Boolean(100);
// console.log(result, typeof result);

// empty strings are "falsey", else "truthey"
// let result = Boolean('100');
// console.log(result, typeof result);
