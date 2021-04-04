
const Employee = require("../lib/Employee");

test("Generate employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Generate name", () => {
  const name = "Frank";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Generate id", () => {
  const testValue = 100;
  const e = new Employee("John", testValue);
  expect(e.id).toBe(testValue);
});

test("Generate email", () => {
  const testValue = "blank@gmail.com";
  const e = new Employee("Kev", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Get name via getName()", () => {
  const testValue = "Frank";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Jack", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Get email via getEmail()", () => {
  const testValue = "blank@gmail.com";
  const e = new Employee("Jack", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Frank", 1, "blank@gmail.com");
  expect(e.getRole()).toBe(testValue);
});