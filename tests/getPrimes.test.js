const expect = require('chai').expect;
const {getPrimes} = require('../app/getPrimes');

describe('getPrimes', () => {
  describe('#function', () => {
    it('should not return null or undefined for numbers', () => {
      expect(getPrimes(8)).to.exist;
    });

    it('should return an array for numbers', () => {
      expect(Array.isArray(getPrimes(1))).to.be.true;
    });

    it('should not return null or undefined for strings', () => {
      expect(getPrimes('22')).to.exist;
    });

    it('should not return null or undefined for objects', () => {
      expect(getPrimes({})).to.exist;
    });

    it('should not return null or undefined for arrays', () => {
      expect(getPrimes([])).to.exist;
    });
  });

  describe('#with empty input', () => {
    it('should return an empty array for empty input', () =>  {
      expect(getPrimes()).to.equal("Invalid input. Number required.");
    });
  });

  describe('#with input not of type "number"', () => {
    it('should return "Invalid input. Number required" for objects', () => {
      expect(getPrimes({})).to.equal("Invalid input. Number required.")
    });

    it('should return "Invalid input. Number required" for strings', () => {
      expect(getPrimes("")).to.equal("Invalid input. Number required.")
    });

    it('should return "Invalid input. Number required" for arrays', () => {
      expect(getPrimes([])).to.equal("Invalid input. Number required.")
    });

    it('should not return "Invalid input. Number required" for numbers', () => {
      expect(getPrimes({})).to.equal("Invalid input. Number required.")
    });
  });

  describe('#input of type "number"', () => {
    it('should return an empty array for 0', () => {
      expect(getPrimes(0)).to.deep.equal([]);
    });

    it('should return an empty array for 1', () => {
      expect(getPrimes(1)).to.deep.equal([]);
    });

    it('should not return an empty array for numbers greater than 1', () => {
      expect(getPrimes(2)).to.not.deep.equal([]);
    });

    it('should return [2] for input 2', () => {
      expect(getPrimes(2)).to.deep.equal([2]);
    });

    it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23] for input 25', () => {
      expect(getPrimes(25)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23]);
    });

    it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] for input 52', () => {
      expect(getPrimes(52)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
    });

    it(`should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 
      71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 
      157, 163, 167, 173, 179, 181, 191, 193, 197, 199] for input 200`, () => {
      expect(getPrimes(200)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181,191, 193, 197, 199]);
    });
  });
});