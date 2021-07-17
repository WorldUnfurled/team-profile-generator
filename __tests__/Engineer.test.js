const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe('name', () => {
        it("should have a function that returns the name of the engineer", () => {
            let employee = new Engineer('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(employee.getName()).toEqual('Brooks');
        });
    });

});