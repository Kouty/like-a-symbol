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
      expect(JSON.stringify(LikeASymbol('description'))).to.equal('"LikeASymbol(description)"')
    });
  });

  describe('parsing', () => {
    it('should provide a convenient static function fromString', () => {
      const symbol = LikeASymbol('(a)');
      expect(LikeASymbol.fromString(symbol.toJSON()).toString()).to.equal(symbol.toString());
    });

    it('should consider "LikeASymbol(description)" parsable', () => {
      expect(LikeASymbol.isParsable('LikeASymbol(description)')).to.equal(true);
    });

    it('should consider "LikeASymbol(" NOT parsable', () => {
      expect(LikeASymbol.isParsable('LikeASymbol(')).to.equal(false);
    });

    it('should throw an exception if the given value is not parsable', () => {
      expect(LikeASymbol.fromString.bind(LikeASymbol, 'A string')).to.throw(SyntaxError);
    });
  });

  it('should return itself as valueOf', () => {
    const symbol = LikeASymbol();
    expect(symbol.valueOf()).to.equal(symbol);
  });

  it('should have a length of 0', () => {
    expect(LikeASymbol.length).to.equal(0);
  });

});