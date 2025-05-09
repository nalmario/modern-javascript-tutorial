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