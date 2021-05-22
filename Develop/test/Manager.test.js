const Manager = require('../lib/Manager');


test('Set office phone with constructor arguments', () => {
  const test = 4758;
  const obj = new Manager('Yazmin', 10, 'yaz@yaz.com', test);
  expect(obj.officeNumber).toBe(test);
});

test('Set get office number with method getOfficeNumber()', () => {
  const test = 4758;
  const obj = new Manager('Yazmin', 10, 'yaz@yaz.com', test);
  expect(obj.getOfficeNumber()).toBe(test);
});

test('getRole() should return "Manager"', () => {
  const test = "Manager";
  const obj = new Manager('Yazmin', 10, 'yaz@yaz.com', 4758);
  expect(obj.getRole()).toBe(test);
});


