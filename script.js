// 1 map dogs

var animals = [
    { name: 'Flyffykins',   species: 'rabbit' },
    { name: 'Caro',         species: 'dog' },
    { name: 'Hamilton',     species: 'dog' },
    { name: 'Harold',       species: 'fish' },
    { name: 'Ursula',       species: 'cat' },
    { name: 'Jimmy',        species: 'fish' },
]

// Map with arrow functions

var names = animals.map(animal => animal.name + ' is a ' + animal.species)



// map creates new array

// var names = animals.map(function(animal) {
//     return animal.name + ' is a ' + animal.species
// })


// usual loop get names of all animals

// var names = []
// for (var i = 0; i < animals.length; i++) {
//     names.push(animals[i].name)
// }

console.log(names)
console.log(animals)