const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    describe('getName', () => {
        it("should return the engineer's name", () => {
            let engineer = new Engineer('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(engineer.getName()).toEqual('Brooks');
        });
    });

    describe('getId', () => {
        it("should return the engineer's id", () => {
            let engineer = new Engineer('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(engineer.getId()).toEqual(22);
        });
    });

    describe('getEmail', () => {
        it("should return the engineer's email", () => {
            let engineer = new Engineer('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(engineer.getEmail()).toEqual('brooks@gmail.com');
        });
    });

    describe('getGithub', () => {
        it("should return the engineer's github username", () => {
            let engineer = new Engineer('Brooks', 22, 'brooks@gmail.com', 'WorldUnfurled');
    
            expect(engineer.getGithub()).toEqual('WorldUnfurled');
        });
    });

});