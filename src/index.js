(function (exports) {
  'use strict';

  var parseRegex = /^LikeASymbol\((.*)\)$/;

  function LikeASymbol() {
    var _description = arguments[0];
    var description = _description === undefined ? '' : _description;

    return {
      toString: function () {
        return 'LikeASymbol(' + description + ')';
      },
      toJSON() {
        return this.toString();
      },
    };
  }

  LikeASymbol.fromString = function string(value) {
    var match = value.match(parseRegex);
    if (!match) {
      throw new SyntaxError('Cannot parse "' + value + '"');
    }
    return new LikeASymbol(match[1]);
  };

  LikeASymbol.isParsable = function isParsable(value) {
    return value.match(parseRegex) != null;
  };

  exports.LikeASymbol = LikeASymbol;
})(typeof module !== 'undefined' && module.exports || self);
