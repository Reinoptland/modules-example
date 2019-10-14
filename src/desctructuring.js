const hero = {
    name: 'Batman',
    health: 10,
    heroic: true,
    inventory: []
}

// We can do this:
// const name = hero.name
// const health = hero.health
// const pet = hero.pet // undefined

// Like this:
// Destructuring assignment
const { name, inventory, heroic, health, pet } = hero

console.log(`
    Our hero is ${name}, 
    he has ${health} hp, 
    he has ${inventory.length} items
`)

console.log(pet)