var object = {
    nama: 'hactiv8',
    course: ['javascript', 'phyton']
}

var keyYangPertama = 'nama'

console.log(object.nama)
console.log(object['nama'])

console.log(object.course)

object.course.push('abab')

console.log(object.course)


var object1 = {
    nama: 'hactiv8',
    course: ['javascript', 'phyton'],
    batch: 3
}


//cara menampilkan iterasi object

var getKeys = Object.keys(object)
var getValue = Object.values(object)
var getEntries = Object.entries(object)

console.log(getKeys)
console.log(getValues)
console.log(getEntries)

for (var i = 0; i < getKeys.length; i++) {

}