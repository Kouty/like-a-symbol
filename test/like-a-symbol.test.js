const { LikeASymbol } = require('../src/index');
const expect = require('chai').expect;

describe('LikeASymbol', () => {
  it('should return a different instance each time', () => {
    expect(LikeASymbol()).not.to.equal(LikeASymbol());
  });

  describe('toString', ()=> {
    it('should return "LikeASymbol()"', () => {
      expect(LikeASymbol().toString()).to.equal('LikeASymbol()');
    });

    it('should return "LikeASymbol(debugName)" when using LikeASymbol("debugName")', () => {
      expect(LikeASymbol('debugName').toString()).to.equal('LikeASymbol(debugName)');
    });
  });


});