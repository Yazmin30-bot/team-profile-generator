const Engineer = require('../lib/Engineer');

test('Set github with constructor arguments', () => {
  const test = 'Yazmin30-bot';
  const obj = new Engineer('Yazmin', 10, 'yaz@yaz.com', test);
  expect(obj.github).toBe(test);
});

test('Set get GitHub with method getGithub()', () => {
  const test = 'Yazmin30-bot';
  const obj = new Engineer('Yazmin', 10, 'yaz@yaz.com', test);
  expect(obj.getGithub()).toBe(test);
});
 
test('getRole() should return "Engineer"', () => {
  const test = "Engineer";
  const obj = new Engineer('Yazmin', 10, 'yaz@yaz.com', 'Yazmin30-bot');
  expect(obj.getRole()).toBe(test);
});

