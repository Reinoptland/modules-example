// Exporting

function oneSmallStep(){
    console.log('One small step for man');
    console.log('One giant leap for mankind');
}

function happyWife(){
    console.log('Happy wife happy life')
}

module.exports // {}

module.exports.oneSmallStep = oneSmallStep
module.exports.happyWife = happyWife

// { oneSmallStep: [Function] }
