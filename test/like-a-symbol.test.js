const { LikeASymbol } = require('../src/index');
const expect = require('chai').expect;

describe('LikeASymbol', () => {
  it('should return a different instance each time', () => {
    expect(LikeASymbol()).not.to.equal(LikeASymbol());
  });

  describe('toString', () => {
    it('should return "LikeASymbol()"', () => {
      expect(LikeASymbol().toString()).to.equal('LikeASymbol()');
    });

    it('should return "LikeASymbol(description)" when using LikeASymbol("description")', () => {
      expect(LikeASymbol('description').toString()).to.equal('LikeASymbol(description)');
    });

    it('should return "LikeASymbol(null)" when using LikeASymbol(null)', () => {
      expect(LikeASymbol(null).toString()).to.equal('LikeASymbol(null)');
    });

    it('should return "LikeASymbol()" when using LikeASymbol(undefined)', () => {
      expect(LikeASymbol(undefined).toString()).to.equal('LikeASymbol()');
    });
  });

  describe('JSON', () => {
    it('should serialize with JSON.stringify() to "LikeAString(description)"', () => {
      console.log(JSON.stringify({ a: LikeASymbol() }));
      expect(JSON.stringify(LikeASymbol('description'))).to.equal('"LikeASymbol(description)"')
    });

    it('should provide a convenient static function fromString', () => {
      const symbol = LikeASymbol('(a)');
      expect(LikeASymbol.fromString(symbol.toJSON()).toString()).to.equal(symbol.toString());
    });

    xit('should consider "LikeASymbol(description)" parsable', () => {
      expect(LikeASymbol.isParsable('LikeASymbol(description)')).to.equal(true);
    });

  });

});