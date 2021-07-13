const removeSNames = (names) => {
  return names.filter((name) => name.toLowerCase().charAt(0) !== "s");
};
//   let expectedOutput = names;
//   names.forEach((name) => {
//     if (name.toLowerCase().charAt(0) === "s") {
//       const index = expectedOutput.indexOf(name);
//       expectedOutput.splice(index, 1);
//     }
//   });
//   return expectedOutput;

module.exports = removeSNames;
