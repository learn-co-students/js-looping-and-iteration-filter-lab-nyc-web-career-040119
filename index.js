// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
  let matchArr =[];
  for (let i=0; i < drivers.length; i++) {
    let driverName = drivers[i];
    if (driverName === name) {
      matchArr = matchArr.concat(`${driverName}`);
    } else if (driverName.toLowerCase() === name.toLowerCase()) {
      matchArr = matchArr.concat(`${driverName}`);
    }
  }
  return matchArr;
}




function fuzzyMatch(list, string) {
  let stringLength = string.length;
  let fuzzyArr = [];

  for (let i=0; i<list.length;i++) {
    let word = list[i];
    let letters = word.slice(0, stringLength);
    if (letters === string) {
      fuzzyArr = fuzzyArr.concat(`${word}`);
    }
  }
  return fuzzyArr;// fuzzyMatch-1. Iterate through list
}


function matchName(driversArr, name) {
  let nameArr = [];
  for (let object of driversArr) {
      let nameCheck = Object.values(object).indexOf(name) >= 0
      if (nameCheck===true) {
        nameArr = nameArr.concat(object)
      }
    }
    return nameArr;

}
