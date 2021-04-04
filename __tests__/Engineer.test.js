
const Engineer = require("../lib/Engineer");

test("Generate GitHUb account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jack", 1, "blank@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Jack", 1, "blank@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Gets GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jack", 1, "blank@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});