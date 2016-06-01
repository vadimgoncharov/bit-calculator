const test          = require('tape');
const bitCalculator = require('../');

test('calculate 2 args', function (t) {
    t.equal(bitCalculator('10', '10'), 2 + 2, '10 + 10 == 4');
    t.equal(bitCalculator('10', '0'), 2 + 0, '10 + 0 == 2');
    t.equal(bitCalculator('101', '10'), 5 + 2, '101 + 10 == 7');
    t.equal(bitCalculator('111', '11'), 7 + 3, '111 + 11 == 10');
    t.equal(bitCalculator('1', '1100'), 1 + 12, '1 + 1100 == 13');

    t.end();
});

test('calculate 3 args', function (t) {
    t.equal(bitCalculator('01', '10', '111'), 1 + 2 + 7, '01 + 10 + 111 == 10');

    t.end();
});

test('calculate 1 arg', function (t) {
    t.equal(bitCalculator('11101'), 29, '11101 == 29');
    
    t.end();
});

test('calculate 3 args with invalid arg type', function (t) {
    t.throws(() => {
        bitCalculator('10101', [], '1111');
    }, 'Should throw TypeError');
    t.end();
});

test('calculate args with invalid arg values', function (t) {
    t.throws(() => {
        bitCalculator('1013110', '1111');
    }, 'Should throw RangeError');
    t.end();
});
