/*let currentDate = new Date();
currentDate = currentDate.setDate(currentDate.getDate() - 14);
currentDate = new Date(currentDate);
console.log(currentDate)


/!*const fs = require('fs');

const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

const asyncReadFile = async function () {
    const f1 = await readFile('./index.html');
    const f2 = await readFile('./1.txt');
    console.log(f1.toString());
    console.log(f2.toString());
};
asyncReadFile()*!/



function * hello() {
    yield 'hello'
    yield 'test'
    return 'last'
}
const v = hello();
console.log(v.next())
console.log(v.next())
console.log(v.next())


let array = [1]
function push(array, ...items) {
    console.log(array, items)
    array.push(...items);
}
push(array,...[2, 3])
console.log(array)



console.log( ...[{ "name": 123 }, { "name": 456 }])*/



const data = [
    { "name": 1, code: 1 },
    { "name": 2, code: 2 },
    { "name": 3, code: 3 },
    { "name": 4, code: 4 },
]

const newData = data.map(item => {
    return { ...item, code: item.code * 2 }
});
console.log(newData)


