/* Date Object Methods

1) getFullYear() - Returns the year of the Date Object;
2) getMonth() - Returns the month of the Date Object. Note that JavaScript considers January to be month zero and December to be month 11, so to get the exact month you need to add 1 in the function (getMonth() + 1);
3) getDate() - Returns the day of the Date Object;
4) getDay() - Returns the day of the week of the Date Object. Note that JavaScript considers Sunday to be day of the week zero and Saturday to be day of the week 6;
5) getHours() - Returns the time of the Date Object;
6) getMinutes() - Returns the minutes of the Date Object.

*/

const curDate = new Date();
console.log(curDate);

console.log("\nYear: ", curDate.getFullYear());
console.log("Month: ", curDate.getMonth() + 1);
console.log("Day: ", curDate.getDate());
console.log("Day of the week: ", curDate.getDay());
console.log("Hour: ", curDate.getHours());
console.log("Minutes: ", curDate.getMinutes());