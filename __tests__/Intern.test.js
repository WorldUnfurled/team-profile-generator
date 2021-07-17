const Intern = require('../lib/Intern');

describe("Intern", () => {

    describe('getName', () => {
        it("should return the intern's name", () => {
            let intern = new Intern('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(intern.getName()).toEqual('Brooks');
        });
    });

    describe('getId', () => {
        it("should return the intern's id", () => {
            let intern = new Intern('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(intern.getId()).toEqual(22);
        });
    });

    describe('getEmail', () => {
        it("should return the intern's email", () => {
            let intern = new Intern('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(intern.getEmail()).toEqual('brooks@gmail.com');
        });
    });
    
});