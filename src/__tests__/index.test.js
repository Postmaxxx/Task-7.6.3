const reverse = require('../index.js');


describe('Tests for reverse', () => {
    const string1 = `abc`;
    const string2 = `abcdEfg`;
    const string3 = `abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg`;
    const string4 = `abcdefg5f`;
    const string5 = `abcdefg.f`;
    const string6 = `abcdefgЖf`;

    it('Short string', () => {
        expect(reverse(string1)).toBe(`String too short! (${string1.length} symbols)`)
    });
    it('Normal string', () => {
        expect(reverse(string2)).toBe(`gfEdcba`)
    });
    it('Long string', () => {
        expect(reverse(string3)).toBe(`String too long! (${string3.length - 20} symbols excess)`)
    });

    it('Invalid symbols string', () => {
        expect(reverse(string4)).toBe(`String contains ivalid symbols!`)
    });
    it('Invalid symbols string', () => { 
        expect(reverse(string5)).toBe(`String contains ivalid symbols!`)
    });
    it('Invalid symbols string', () => {
        expect(reverse(string6)).toBe(`String contains ivalid symbols!`)
    });

})