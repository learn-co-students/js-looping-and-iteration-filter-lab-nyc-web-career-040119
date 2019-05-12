// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
//
// function findMatching(list, name) {
//   let results=[];
//   let matchCount;
//   matchCount = nameMatcher(list, n)
//   return results;
// }
function matchName(drivers, name) {
  const matchArr =[];
  for (let i=0; i < drivers.length; i++) {
    if (drivers[i] === 'name') {
      matchArr.push(`${drivers[i]}`)
    }
  }
  return matchArr;
}
// findMatching-1. Iterate through array, find matching names and return count



function fuzzyMatch(list, letters) {
  // fuzzyMatch-1. Iterate through list
}
console.log(Object.keys(drivers));
function stringToArray(str) {
  var i = 0,
    arr = [],
    codePoint;
  while (!isNaN(codePoint = knownCharCodeAt(str, i))) {
    arr.push(String.fromCodePoint(codePoint));
    i++;
  }
  return arr;
}
//let arr = [...str];
//let arr = str.split(/(?!$)/u;

// fuzzyMatch-2. function to divide words into array of individual letters then join back together depending on letters.length.
// while loop is probably best

// console.log(Object.keys(drivers));
matchName(drivers, 'Bobby');
