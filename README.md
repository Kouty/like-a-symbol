# like-a-symbol
An alternative to EcmaScript 6 Symbol that can be chained with strings and used with JSON.stringify(...);
## Reason
Symbol() function in JavaScript has some features that can be annoying:
```javascript
const s = Symbol('S');
console.log('I like the symbol ' + s);

// Throws: Uncaught TypeError: Cannot convert a Symbol value to a string
```
```javascript
const vegetable = {label: 'pear', type: Symbol('pear')};
console.log(JSON.stringify(vegetable));
// Outputs: "{"label":"pear"}", type field is lost.
```

## Installation
```
npm install --save like-a-symbol
```

## Syntax
```javascript
LikeASymbol([description])
```
Parameters:
description: String | optional

Optional, string. A description of the symbol which can be used for debugging.

## Description
You can use LikeASymbol to emulate part of the behavior of the ES6 Symbol() avoiding exceptions when
the symbol is put inside a string for debug reasons.

In addition Symbols are not serialized with `JSON.stringify(...)`, whereas with LikeASymbol its
string representation will be serialized and can be parsed back using `LikeASymbol.fromString(value)` function.

```javascript
const s1 = LikeASymbol();
const s2 = LikeASymbol('foo');

LikeASymbol('foo') === LikeASymbol('foo'); // false
console.log('Symbol: ' + LikeASymbol('Foo')); // Symbol: LikeASymbol(Foo)
LikeASymbol('Foo').toString() === 'LikeASymbol(Foo)'; // true

JSON.stringify({ label: 'pear', type: LikeASymbol('pear') }); // {"label":"pear","type":"LikeASymbol(pear)"}
```

## Methods
```javascript
LikeASymbol.fromString(value)
```
Returns LikeASymbol instance from a valid string representation.

Throws a SyntaxError if the given string value is not a valid representation of a LikeASymbol instance.

```javascript
LikeASymbol.isParsable(value)
```
Returns true if value is a parsable string representation of the symbol. Returns false otherwise.

## Keep in mind
Keep in mind that LikeASymbol is not a Symbol, so function like `Object.getOwnPropertySymbols()`
will not return any property defined with LikeASymbol.
Also `LikeASymbol('foo') == 'LikeASymbol(foo)'` will return true.

Symbol() is designed to be unique and not comparable with strings, whereas LikeASymbol is designed to
be loosely linked to its string representation.

Symbol.for(key) and Symbol.keyFor(symbol) are not ported to LikeASymbol. If you need them, you probably
want to use the ECS6 Symbol, and not LikeASymbol.

If you look for a Symbol replacement that works in older browers, google "Symbol polyfill".
