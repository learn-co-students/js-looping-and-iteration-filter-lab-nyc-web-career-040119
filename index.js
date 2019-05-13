// Code your solution in this file
function findMatching(object, name) {
  return object.filter(driver => driver.toUpperCase() === name.toUpperCase());
}
function fuzzyMatch(object, letters) {
  return object.filter(driver => driver.startsWith(letters));
}
function matchName(object, name) {
  return object.filter(driver => driver['name'] === name)
}
