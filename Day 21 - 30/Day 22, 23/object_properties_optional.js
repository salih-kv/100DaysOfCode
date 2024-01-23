"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = exports.getName = void 0;
const getName = (params) => {
    if (params.last) {
        return `${params.first} ${params.last}`;
    }
    return params.first;
};
exports.getName = getName;
const name = (0, exports.getName)({
    first: "Matt",
});
// optional params - ?:
const getAge = (params) => {
    return params.age;
};
exports.getAge = getAge;
const age = (0, exports.getAge)({
    age: undefined,
});
