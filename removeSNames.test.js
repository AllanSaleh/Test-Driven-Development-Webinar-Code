const removeSNames = require("./removeSNames");

describe("removeSNames", () => {
  test("should remove all S names", () => {
    const names = ["Apple", "Strawberry", "star"];
    expect(removeSNames(names)).not.toContain("Strawberry");
    expect(removeSNames(names)).not.toContain("star");
  });

  test("should not remove other names", () => {
    const names = ["Apple", "Strawberry", "Star", "Pinapple"];
    expect(removeSNames(names)).toContain("Apple");
    expect(removeSNames(names)).toContain("Pinapple");
  });
});
