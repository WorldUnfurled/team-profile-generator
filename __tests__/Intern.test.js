const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe('name', () => {
        it("should have a function that returns the name of the intern", () => {
            let employee = new Intern('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled', 'Berry');
    
            expect(employee.getName()).toEqual('Brooks');
        });
    });
});