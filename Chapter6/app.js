//! #########################
//! Add/Change Page
//! #########################
// const para = document.querySelector('p');

// // console.log(para.innerText);
// // para.innerText = 'Alex is cool'

// const paras = document.querySelectorAll('p');

// // paras.forEach(para => {
// //     console.log(para.innerText);
// //     para.innerText += ` new text`;
// // });

// const content = document.querySelector('.content');

// // console.log(content.innerHTML);
// // content.innerHTML += `<h2> This is a new h2 </h2>`;

// const people = ['Alex', 'Noah', 'Diac'];
// people.forEach(person => {
//     content.innerHTML += `<p>Person: ${person}</p>`;
// });

//! #########################
//! Get and Set Attributes
//! #########################
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'youtube.com');
// link.innerText = 'Youtube';

// const msg = document.querySelector('p');

// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'Success');
// msg.setAttribute('style', 'color:green;');

//! #########################
//! Changing CSS
//! #########################
// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px;');

// title.style.margin = '50px';
// title.style.color = 'crimson';

//! #########################
//! Add and Remove classes
//! #########################

// const content = document.querySelector('p');

// content.classList.add('error');
// // content.classList.remove('error');
// content.classList.add('success');

// const challenge = document.querySelectorAll('p');

// challenge.forEach(item => {
//     if (item.textContent.includes('error')) {
//         item.classList.add('error');
//     } else if (item.textContent.includes('success')) {
//         item.classList.add('success');
//     }
// });

// const title = document.querySelector('.title');

// title.classList.toggle('test'); //sets
// title.classList.toggle('test'); //remove

//! #########################
//! Parents and Children
//! #########################

// const article = document.querySelector('article');

// // Array.from(article.children).forEach(child => {
// //     child.classList.add('article-element');
// // });

// const title = document.querySelector('h2');
// // Parent
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// // Sibling
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// // chaning
// console.log(title.nextElementSibling.parentElement.children);

//! #########################
//! Events
//! #########################

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('test');
// });

// const ul = document.querySelector('ul');
// const items = document.querySelectorAll('li');
// const btn = document.querySelector('button');

// // items.forEach(item => {
// //     item.addEventListener('click', e => {
// //         // e.target.style.textDecoration = 'line-through';
// //         e.stopPropagation(); // stop the bubble up
// //         e.target.remove();
// //     });
// // });

// ul.addEventListener('click', e => {
//     if (e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// });

// btn.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'something new';
//     ul.prepend(li);
// });

//! #########################
//! MISC DOM
//! #########################

// const copy = document.querySelector('.copy-me');
// const box = document.querySelector('.box');

// copy.addEventListener('copy', () => {
//     console.log('Test');
// });

// box.addEventListener('mousemove', e => {
//     console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
// });

// document.addEventListener('wheel', e => {
//     console.log(e.pageX, e.pageY);
// });

//! Left off ep 57
