const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe('name', () => {
        it("should have a function that returns the name of the employee", () => {
            let employee = new Employee('Brooks', 22, 'brooks@gmail.com');
    
            expect(employee.getName()).toEqual('Brooks');
        });
    });
});