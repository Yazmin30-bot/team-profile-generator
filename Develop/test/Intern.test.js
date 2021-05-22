const Intern = require('../lib/Intern');

test('Set school with constructor arguments', () => {
  const test = 'TEC';
  const obj = new Intern('Yazmin', 10, 'yaz@yaz.com', test);
  expect(obj.school).toBe(test);
});

test('Set get School with method getSchool()', () => {
  const test = 'TEC';
  const obj = new Intern('Yazmin', 10, 'yaz@yaz.com', test);
  expect(obj.getSchool()).toBe(test);
});

test('getRole() should return "Intern"', () => {
  const test = "Intern";
  const obj = new Intern('Yazmin', 10, 'yaz@yaz.com', 'TEC');
  expect(obj.getRole()).toBe(test);
});


