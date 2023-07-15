const randomColor = require('randomcolor')

module.exports = function() {
    let randomColors = randomColor({
        count: (126 - 32) // Total ASCII - 128 charcters & Till 32 control characters 
    })
    // console.log(randomColors)
    return randomColors
}