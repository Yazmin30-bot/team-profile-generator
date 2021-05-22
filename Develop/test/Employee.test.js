const Employee = require('../lib/Employee');

test('Can create Employee object', () => {
	const obj = new Employee();
	expect(typeof obj).toBe('object');
});

test('Set name with constructor arguments', () => {
	const name = 'Yazmin';
	const obj = new Employee(name);
	expect(obj.name).toBe(name);
});

test('Set name with constructor arguments', () => {
	const test = 10;
	const obj = new Employee('Yazmin', test);
	expect(obj.id).toBe(test);
});

test('Set email with constructor arguments', () => {
	const test = 'yaz@yaz.com';
	const obj = new Employee('Yazmin', 10, test);
	expect(obj.email).toBe(test);
});

test('Set get name with method getName()', () => {
	const test = 'Yazmin';
	const obj = new Employee(test);
	expect(obj.getName()).toBe(test);
});

test('Set get id with method getId()', () => {
	const test = 10;
	const obj = new Employee('Yazmin', test);
	expect(obj.getId()).toBe(test);
});

test('Set get email with method getEmail()', () => {
	const test = 'yaz@yaz.com';
	const obj = new Employee('Yazmin', 10, test);
	expect(obj.getEmail()).toBe(test);
});

test('getRole() should return "Employee"', () => {
	const test = 'Employee';
	const obj = new Employee('Yazmin', 10, 'yaz@yaz.com');
	expect(obj.getRole()).toBe(test);
});
