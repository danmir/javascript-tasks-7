'use strict';

function checkHasKeys(keys) {
    if (Object.keys(this).length !== keys.length) {
        return false;
    }
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            var ind = keys.indexOf(key);
            if (ind === -1) {
                return false;
            }
        }
    }
    return true;
}

function checkContainsKeys(keys) {
    for (var key in keys) {
        if (this.hasOwnProperty(key)) {
            var ind = Object.keys(this).indexOf(keys[key]);
            if (ind === -1) {
                return false;
            }
        }
    }
    return true;
}

function checkHasValueType(key, type) {
    return typeof this[key] === type.name.toLowerCase();
}

function checkHasLength(length) {
    return this.length === length;
}

function checkHasValues(values) {
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            if (values.indexOf(this[key]) === -1) {
                return false;
            }
        }
    }
    return true;
}

function checkContainsValues(values) {
    var mValues = JSON.parse(JSON.stringify(values));
    if (getType(this) === 'array') {
        for (var i = 0; i < values.length; ++i) {
            if (this.indexOf(values[i]) < 0) {
                return false;
            }
        }
        return true;
    }
    if (getType(this) === 'object') {
        for (var key in Object.keys(this)) {
            var sInd = mValues.indexOf(this[key]);
            if (sInd > 0) {
                mValues.splice(sInd, sInd + 1);
            }
        }
        return mValues === 0;
    }
}

function checkHasParamsCount(count) {
    return count === this.length;
}

function checkHasWordsCount(count) {
    return this.split(' ').length === count;
}

function getType(obj) {
    var types = {
        '[object Object]': 'object',
        '[object Array]': 'array',
        '[object String]': 'string',
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object Null]': 'null',
        '[object Function]': 'function'
    };
    return types[Object.prototype.toString.call(obj)];
}

exports.init = function () {
    Object.prototype.checkContainsKeys = checkContainsKeys;

    Object.prototype.checkHasKeys = checkHasKeys;

    Object.prototype.checkHasValueType = checkHasValueType;

    Array.prototype.checkHasLength = checkHasLength;
    String.prototype.checkHasLength = checkHasLength;

    Object.prototype.checkHasValues = checkHasValues;

    Object.prototype.checkContainsValues = checkContainsValues;

    Function.prototype.checkHasParamsCount = checkHasParamsCount;

    String.prototype.checkHasWordsCount = checkHasWordsCount;
};
