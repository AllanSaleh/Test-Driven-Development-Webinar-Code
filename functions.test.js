const functions = require("./functions");

test("properly adds 2 + 2 and equals 4", () => {
  expect(functions.add(2, 2)).toBe(4);
  expect(functions.add(2,2)).not.toBe(5);
});

test("returns new user with firstName Allan", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Allan",
    lastName: "Saleh",
  });
});
