const arr = ['a','b','c'];
const arrObj = {
    a: 'a',
    1: 'b',
    2: 'c'
};

const b = 'b';

arrObj[b] = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);