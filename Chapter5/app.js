//! #########################
//! Do While Loops
//! #########################

// let i = 2;

// do {
//     console.log(`Val of i is: ${i}`);
//     i++;
// } while (i < 5);

//! #########################
//! Callbacks and Foreach
//! #########################

// const myFunc = callbackFunc => {
//     let value = 50;
//     callbackFunc(value)
// }

// myFunc(value => {
//     console.log(value);
// })

// let people = ['Alex', 'Noah', 'Namo', 'Sean'];

//* V1
// const logPerson = (person, index) => {
//     console.log(`${index} - Hello, ${person}`);
// };

// people.forEach(logPerson);
//* V2
// people.forEach((person, index) => {
//     console.log(`Name: ${person}, Index: ${index}`);
// });

// #--------------------------------------------------------
// const ul = document.querySelector('.people');

// const friends = ['Alex', 'Noah', 'Daman', 'Nirmal'];

// let html = ``;

// friends.forEach(person => {
//     html += `<li style="color: red">${person}</li>`;
// });

// ul.innerHTML = html; // Adds to the DOM

//! #########################
//! Object Literal
//! #########################
// //* Object in Array
// // const blogs = [
// //     { title: 'VSCode is King', likes: 30 },
// //     { title: 'Why fries are good', likes: 10 }
// // ];
// //* Object
// let user = {
//     name: 'Alex',
//     age: 19,
//     email: 'test@gmail.com',
//     localtion: 'San Fran',
//     // Object in Array
//     blogs: [
//         { title: 'VSCode is King', likes: 30 },
//         { title: 'Why fries are good', likes: 10 }
//     ],
//     login() {
//         console.log('The user logged in');
//     },
//     logout() {
//         console.log('The user has logged out');
//     },
//     logBlogs() {
//         console.log(`Writtens the following blogs:`);
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         });
//     }
// };

// // console.log(user.name); // V1
// // const test = 'name';
// // console.log(user[test]); // V2

// // user.login();
// // user.logout();

// user.logBlogs();

//! #########################
//! Math Objects
//! #########################

// const AREA = 7.1;

// console.log(Math.round(AREA));
// console.log(Math.floor(AREA));
// console.log(Math.ceil(AREA));
// console.log(Math.trunc(AREA));

// // random numbers
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100)); // Random # from 1 to 100

//! #########################
//! Primitive & Reference Values
//! #########################

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log('PRIMITIVES VALUES:');
// console.log(`scoreOne: ${scoreOne} scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne} scoreTwo: ${scoreTwo}`);

// console.log('\n');

// const userOne = { name: 'ru', age: 30 };
// const userTwo = userOne;

// console.log('REFERENCE VALUES:');
// console.log(userOne, userTwo);

// userOne.age = 40;
// console.log(userOne, userTwo);
