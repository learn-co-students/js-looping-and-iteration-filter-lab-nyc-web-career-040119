// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'] ;

function findMatching(drivers, name){
  return drivers.filter( function (driver){
    return driver === name || driver === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, srch){
  return drivers.filter( function(driver){
    return driver.slice(0, srch.length) === srch
  })
}

function matchName(drivers, name){
  return drivers.filter( function(driver){
    return driver['name'] === name
  })
}
