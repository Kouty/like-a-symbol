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
  });


});