/**
 * Примеры для дополнительного задания
 * Чтобы новый коммит был
 */

var check = require('../src/check');

check.init();

var person = { name: 'John', age: 20 };
var numbers = [1, 2, 3];
var func = function (a, b) {};
var str = 'some string';

console.log(
    person.check.hasKeys(['name', 'age']), // true
    person.check.hasValueType('name', String), // true

    numbers.check.hasKeys(['0', '1', '2']), // true
    numbers.check.hasLength(3), // true

    numbers.check.hasValues([2, 1]), // false
    // Из условия - "только" заданные значения

    func.check.hasParamsCount(2), // true

    str.check.hasWordsCount(2) // true
);
