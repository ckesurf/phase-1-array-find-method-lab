const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
];
// what is the shape of this thing?
// what is the shape of this object?

// @param [Array of Objects] Array of objects, with years and results as keys
// @return [String] year when win occured, or undefined
function superbowlWin(yearsAndResults) {
  // uses find() to see if any obj.result is a "W"
  //        this is returning an obj, NOT what we want.
  //        how do we make this return the year?
  // e.g. {year: '2017', result: 'W'}
  const obj = yearsAndResults.find(isWin);

  return obj.year;

  // return yearsAndResults.find(isWin).year;
}

function isWin(gameData) {
  // was this a win or not?
  if (gameData.result === "W") {
    return true;
  } else {
    return false;
  }
}

const year = superbowlWin(record);

// simple example of how find?

const trees = [
  { name: "birch", count: 4 },
  { name: "maple", count: 5 },
  { name: "oak", count: 2 },
];

function isOakTree(tree) {
  // tree => tree.name === "oak"
  if (tree.name === "oak") {
    return true;
  } else {
    return false;
  }
}

// const result = trees.find(isOakTree);
