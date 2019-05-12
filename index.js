function findMatching(drivers,name) {
  return drivers.filter(function(driverName){return driverName.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(drivers,letters) {
  let lettersLength = letters.length;

  return drivers.filter(function(driverLetters){return driverLetters.slice(0,lettersLength) === letters})
}


function matchName(drivers, name) {
  return drivers.filter(function(driver){return driver.name.toLowerCase() === name.toLowerCase()})
}