const Employee = require('../lib/Employee');

describe("Employee", () => {
    
    describe('getName', () => {
        it("should return the employee's name", () => {
            let employee = new Employee('Brooks', 22, 'brooks@gmail.com');
    
            expect(employee.getName()).toEqual('Brooks');
        });
    });

    describe('getId', () => {
        it("should return the employee's id", () => {
            let employee = new Employee('Brooks', 22, 'brooks@gmail.com');
    
            expect(employee.getId()).toEqual(22);
        });
    });

    describe('getEmail', () => {
        it("should return the employee's email", () => {
            let employee = new Employee('Brooks', 22, 'brooks@gmail.com');
    
            expect(employee.getEmail()).toEqual('brooks@gmail.com');
        });
    });

});