(function (exports) {
  'use strict';

  function LikeASymbol(_debugName) {
    var debugName = _debugName === undefined ? '' : _debugName;

    if (this instanceof LikeASymbol) {
      this._dubugName = debugName;
      return this;
    }

    return new LikeASymbol(_debugName);
  }

  LikeASymbol.prototype.toString = function () {
    return 'LikeASymbol(' + this._dubugName + ')';
  };

  exports.LikeASymbol = LikeASymbol;
})(module && module.exports || self);
