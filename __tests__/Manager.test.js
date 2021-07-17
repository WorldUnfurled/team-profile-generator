const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe('name', () => {
        it("should return the name of the manager", () => {
            let employee = new Manager('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(employee.getName()).toEqual('Brooks');
        });
    });
});