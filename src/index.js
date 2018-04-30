(function (exports) {
  'use strict';

  var parseRegex = /^LikeASymbol\((.*)\)$/;

  function LikeASymbol(_description) {
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
    return new LikeASymbol(match[1]);
  };

  exports.LikeASymbol = LikeASymbol;
})(module && module.exports || self);
