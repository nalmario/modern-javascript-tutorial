// // querySelector()
// const para = document.querySelector('div.error'); // grabs the tag that comes first
// console.log(para.innerHTML);

// // querySelectorAll()
// const paras = document.querySelectorAll('p'); // grabs all tags inputted
// console.log(paras[0]);

// paras.forEach(para => {
//   console.log(para.innerHTML);
// })

// const errors = document.querySelectorAll('.error');
// console.log(errors)


// // get an element by ID
// const title = document.getElementById('page-title'); // html ids must be unique
// console.log(title)

// // get elements by class name
// const errors = document.getElementsByClassName('error');
// console.log(errors)


// // get elements by tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);


// // change inner text
// const para = document.querySelector('p');
// console.log(para.innerText); // innerText grabs the text inside of the tag
// para.innerText = 'ninjas are awesome';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' new text';
// })

// // change inner HTML (includes tags)
// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>'

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`
// })


// // get and set attributes
// const link = document.querySelector('a'); // anchor tag
// console.log(link.getAttribute('href')); // gets the attribute we want, href in this case
// link.setAttribute('href', 'https://www.thenetninja.co.uk'); // setAttribute('attribute to change', 'what to change it to')
// link.innerText = 'The Net Ninja Website'

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green;'); // can also apply new attributes to tags


// attribute setting when one is already in place
const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px'); // this will overwrite an already defined attribute

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = ''; // deletes or removes the property