function findMatching(array_driver, string_argument){
  return array_driver.filter(function (driver){
    return driver === string_argument || driver === string_argument.toLowerCase()
  })
}

function fuzzyMatch(array_driver, string_argument){
  return array_driver.filter(function (driver){
    return driver.slice(0, string_argument.length) === string_argument
  })
}

function matchName(array_driver, string_argument){
  return array_driver.filter(function (name){
    return name['name'] === string_argument
  })
}
