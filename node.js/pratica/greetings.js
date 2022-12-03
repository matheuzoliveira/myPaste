const getFlags = require('./flags')

console.log(`hello ${getFlags('--name')}. ${getFlags('--greeting')} `)