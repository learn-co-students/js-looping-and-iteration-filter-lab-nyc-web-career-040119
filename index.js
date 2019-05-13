// Code your solution in this file
function findMatching (drivers, name) {
  let newdriver =  drivers.filter( function (driver) { driver.toLowerCase() === name.toLowerCase();} );
  return newdriver;
}

function fuzzyMatch (drivers, name) {
  let nameLength = name.length;
  let newdriver= drivers.filter( function (driver) {driver.slice(0..nameLength) === name;});
  return newdrivers;
}

function matchName (driver, name) {
  let newdriver = drivers.filter( function (dirver) {driver.name === name;})
  return newdriver
}
