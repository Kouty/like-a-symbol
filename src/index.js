(function (exports) {
  'use strict';

  function LikeASymbol(_description) {
    var description = _description === undefined ? '' : _description;

    return {
      toString: function () {
        return 'LikeASymbol(' + description + ')';
      }
    };
  }

  exports.LikeASymbol = LikeASymbol;
})(module && module.exports || self);
