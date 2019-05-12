function findMatching(users, string) {
  return users.filter(
    function (user) { return user.toLowerCase() === string.toLowerCase(); }
  );
}

function fuzzyMatch(users, string) {
  return users.filter(
    function (user) {
      // console.log(user.slice(0, string.length), string);
      return user.slice(0, string.length) === string;
    }
  );
}

function matchName(drivers, string) {
  return drivers.filter(
    function (driver) {
      return driver.name === string;
    }
  );
}
