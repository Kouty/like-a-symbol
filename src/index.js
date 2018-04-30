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

  LikeASymbol.fromString = function fromJSON(jsonValue) {
    var match = jsonValue.match(parseRegex);
    if (!match) {
      throw new SyntaxError('Cannot parse "' + jsonValue + '"');
    }
    return new LikeASymbol(match[1]);
  };

  LikeASymbol.isParsable = function isParsable(jsonValue) {
    return jsonValue.match(parseRegex) != null;
  };

  exports.LikeASymbol = LikeASymbol;
})(module && module.exports || self);
