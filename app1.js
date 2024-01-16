function greet(name) {
    console.log(`Hello`${ name })
}
greet('sam')
greet('Ross')
greet('Max')

function runFnunction(functionArg) {
    functionArg()
}

runFnunction(function () { console.log(`im being run by another function`) })
runFnunction(callBackFunc)

function callBackFunc() {
    console.log(`im also being run`)
}