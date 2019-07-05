// Implementasikan function di atas agar mengembalikan key yang memiliki value saja (bukan undefined)

function deleteUndefinedKeys(object) {

    for (const i in object) {
        if (typeof object[i] === 'undefined') {
            delete object[i];
        }
    }
    return object
}

console.log(deleteUndefinedKeys({
    age: undefined,
    email: 'dimitri@mail.com'
}));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(deleteUndefinedKeys({
    name: undefined,
    age: 23,
    email: undefined
}));
// {}