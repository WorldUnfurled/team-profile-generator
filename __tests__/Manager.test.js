const Manager = require('../lib/Manager');

describe("Manager", () => {

    describe('getName', () => {
        it("should return the manager's name", () => {
            let manager = new Manager('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(manager.getName()).toEqual('Brooks');
        });
    });

    describe('getId', () => {
        it("should return the manager's id", () => {
            let manager = new Manager('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(manager.getId()).toEqual(22);
        });
    });

    describe('getEmail', () => {
        it("should return the manager's email", () => {
            let manager = new Manager('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(manager.getEmail()).toEqual('brooks@gmail.com');
        });
    });

});