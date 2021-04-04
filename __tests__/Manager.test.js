
const Manager = require("../lib/Manager");

test("Generate office number", () => {
  const testValue = 100;
  const e = new Manager("Jack", 1, "blank@gmail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Jack", 1, "blank@gmail.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Gets office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Jack", 1, "blank@gmail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});