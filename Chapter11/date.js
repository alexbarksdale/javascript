console.log('\n');
const presentDay = new Date();
console.log(dateFns.isToday(now));

// Formatting options
console.log(dateFns.format(now, 'YYYY YY'));
console.log(dateFns.format(now, 'MMMM MM M'));
console.log(dateFns.format(now, 'D d dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'));

// Comparing dates
const beforeDay = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(presentDay, beforeDay, { addSuffix: true }));
