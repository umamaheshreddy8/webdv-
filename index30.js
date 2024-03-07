const {addDays, subMonths} = require('data-fns');
const currentDate = new Date();

// adding 5 days to the current date 
const futureDate = addDays(currentDate,5);

//substracting 2 months from the current date
const pastDate = subMonths(currentDate,2);

console.log('Future Date:',futureDate);
console.log('Past Date:',futureDate);
