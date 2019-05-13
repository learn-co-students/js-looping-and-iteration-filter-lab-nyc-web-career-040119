function findMatching(drivers, str) {
  return drivers.filter(function(driver) {
   return driver.toLowerCase() === str.toLowerCase()
  });
}

function fuzzyMatch(drivers, str) {
  let strLen = str.length;
  return drivers.filter(function(driver) {
    return driver.substring(0,strLen) === str
  });
}


function matchName(drivers, str) {
  return drivers.filter(function(driver){return driver.name.toLowerCase() === str.toLowerCase()})
}
