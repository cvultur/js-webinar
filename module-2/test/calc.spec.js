'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator

    it("should have proper initial value", () => {
        return expect(calc(3).add(5).v).to.equal(8);
    });

    it("should add 2 numbers", () => {
        return expect(calc(3).add(5).v).to.equal(8);
    });

    it("should substract 2 numbers", () => {
        return expect(calc(3).minus(2).v).to.equal(1);
    });

    it("should calculate the square root value", () => {
        return expect(calc(4).sqrt().v).to.equal(2);
    });

    it("should multiply 2 numbers", () => {
        return expect(calc(3).times(10).v).to.equal(30);
    });

    it("should divide 2 numbers", () => {
        return expect(calc(10).divide(2).v).to.equal(5);
    });

    it("should calculate modulo", () => {
        return expect(calc(10).modulo(5).v).to.equal(0);
    });

    it("should throw error when dividing to 0", () => {
        return expect(() => calc(5).divide(0)).to.throw;
    });

    it("should throw error when calculating the square root of negative number", () => {
        return expect(() => calc(-3).sqrt).to.throw;
    });

    it("should perfrom multiple operations", () => {
        return expect(calc(3)
            .add(4)
            .minus(3)
            .times(6)
            .v).to.equal(24);
    });

});



