# Bit Calculator

[![Build Status](https://img.shields.io/travis/vadimgoncharov/bit-calculator/master.svg)](https://travis-ci.org/vadimgoncharov/bit-calculator)
[![Coverage Status](https://img.shields.io/coveralls/vadimgoncharov/bit-calculator/master.svg)](https://coveralls.io/r/vadimgoncharov/bit-calculator)

Function arguments are two bit representation of numbers `('101', '1', '10'...)`, and must return their sum in decimal representation.

## Requirements

* Not allowed to use `parseInt` and `toString` methods

## Examples

```js
console.assert(calculate('10', '10') === 4);
console.assert(calculate('10', '0') === 2);
console.assert(calculate('101', '10') === 7);
```
