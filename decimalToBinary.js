var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    var decimal = parseInt(line)
    // console.log(`initial decimal: ${decimal}`)

    var quotient = Math.floor(decimal / 2)
    // console.log(`initial quotient: ${quotient}`)

    var remainder = decimal % 2
    // console.log(`initial remainder: ${remainder}`)

    var outputArray = []
    outputArray.push(remainder)
    // console.log(`initial outputArray: ${outputArray}`)

    while (quotient > 0) {
        remainder = quotient % 2
        // console.log(`remainder: ${remainder}`)

        quotient = Math.floor(quotient / 2)
        // console.log(`quotient: ${quotient}`)

        outputArray.push(remainder)
    }

    console.log(outputArray.reverse().join(''))
    rl.close()
})