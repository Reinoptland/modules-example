// We declare a variable quotes
// We assign it the value of requiring a file
// By calling require() and passing it the 'path' to a file
// Require file will give us the module.exports 
// of that file

// Simple requiring

const quotes = require('./quotes')
const oneThing = require('./single-thing')
const moreJs = require('../moreJS')

console.log(moreJs)
console.log(oneThing) // func
console.log(quotes) // {}

// const oneSmallStep = quotes.oneSmallStep
// const happyWife = quotes.happyWife
// const hello = moreJs.hello

// Require using destructuring

const { oneSmallStep, happyWife } = quotes
const { hello } = moreJs

function start() {
    console.log('starting program')
    oneSmallStep()
    happyWife()
    oneThing()
    hello()
}

start()