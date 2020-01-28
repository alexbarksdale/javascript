// date and times
const now = new Date();
const before = new Date('February 1 2019 7:30:59');

console.log(now);

// year month day times
console.log(`getFullYear: ${now.getFullYear()}`);
console.log(`getMonth: ${now.getMonth()}`);
console.log(`getDate: ${now.getDate()}`);
console.log(`getDay: ${now.getDay()}`);
console.log(`getHours: ${now.getHours()}`);
console.log(`getMinutes: ${now.getMinutes()}`);
console.log(`getSeconds: ${now.getSeconds()}`);

// Date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// Timestamps
console.log(`Timestamp: ${now.getTime()}`);

// console.log(now.getTime(), before.getTime());
const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(`Mins: ${mins}`);
console.log(`Hours: ${hours}`);
console.log(`Days: ${days}`);
console.log(`The blog was posted ${days} days ago`);

// Convert timestamps to date objects
const TIMESTAMP = 168_582_839_992;
console.log(new Date(TIMESTAMP));
