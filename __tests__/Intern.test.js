  
const Intern = require("../lib/Intern");

test("Get school via constructor", () => {
  const testValue = "Temple";
  const e = new Intern("Jack", 1, "blank@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Jack", 1, "blank@gmail.com", "Temple");
  expect(e.getRole()).toBe(testValue);
});

test("Get school via getSchool()", () => {
  const testValue = "Temple";
  const e = new Intern("Jack", 1, "blank@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});