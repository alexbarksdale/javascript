const scores = [10, 30, 15, 25, 50, 40, 5];

const users = [
    { name: 'alex', premium: true },
    { name: 'yoshi', premium: false },
    { name: 'mario', premium: false },
    { name: 'bob', premium: true }
];

// ! filter method
const premiumUsers = users.filter((user) => user.premium);
console.log(premiumUsers);

// ! map method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];
const salePrices = prices.map((price) => price / 2);

console.log(salePrices);

const products = [
    { name: 'gold star', price: 20 },
    { name: 'apple', price: 40 },
    { name: 'banana', price: 30 },
    { name: 'grape', price: 10 },
    { name: 'red shell', price: 50 }
];

const productSale = products.map((product) => {
    if (product.price >= 30) {
        return { name: product.name, price: product.price / 2 };
    } else {
        return product;
    }
});

console.log(productSale);

// ! reduce method
// const scores_two = [10, 40, 15, 65, 50, 40, 5];
// const result = scores_two.reduce((accumulator, currrent) => {
//     if (currrent >= 50) {
//         accumulator += 1;
//     }
//     return accumulator;
// }, 0);

// console.log(result);
const scores_three = [
    { player: 'alex', score: 30 },
    { player: 'yoshi', score: 50 },
    { player: 'mario', score: 60 },
    { player: 'bob', score: 70 },
    { player: 'alex', score: 300 },
    { player: 'yoshi', score: 50 },
    { player: 'mario', score: 60 },
    { player: 'bob', score: 70 },
    { player: 'alex', score: 100 },
    { player: 'yoshi', score: 50 },
    { player: 'mario', score: 60 },
    { player: 'bob', score: 70 }
];

const alex_total = scores_three.reduce((acc, curr) => {
    if (curr.player === 'alex') {
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(alex_total);

// ! find method
const scores_four = [20, 10, 30, 25, 15, 40, 80, 5];
const firstHighScore = scores_four.find((score) => score > 50);
console.log(firstHighScore);

// ! sort method
// sorting strings
const names = ['mario', 'alex', 'bob', 'ryan'];
// names.sort().reverse();
// console.log(names);

// sorting numbers
const scores_five = [20, 10, 30, 25, 15, 40, 80, 5];
// scores_five.reverse();
// console.log(scores_five);
scores_five.sort((a, b) => b - a); // a -b to small to largest
console.log(scores_five);

// sorting objects
const players = [
    { player: 'alex', score: 100 },
    { player: 'yoshi', score: 50 },
    { player: 'mario', score: 60 },
    { player: 'bob', score: 70 }
];

// players.sort((a, b) => {
//     if (a.score > b.score) {
//         return -1;
//     } else if (b.score > a.score) {
//         return 1;
//     } else {
//         return 0; // if both are even
//     }
// });
// same ^
players.sort((a, b) => b.score - a.score);

console.log(players);

// ! Chaninging array methods
const products = [
    { name: 'gold star', price: 100 },
    { name: 'apple', price: 50 },
    { name: 'green', price: 60 },
    { name: 'butter', price: 70 }
];
