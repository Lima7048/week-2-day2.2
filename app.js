console.log("Hello world !")

// logs a string to the console to tell the user the function was called
function myCallbackFunction() {
    console.log("My callback function was called!");
}

// accepts a function as an argument to run when it has done it's work
function myAwesomeFunction() {
    console.log("Running myAwesomeFunction.... doing complex tasks..");
    console.log("Complex task complete. I will notify the user");
    myCallbackFunction();
}

// run the awesome function, and pass the notifyUser function to it
myCallbackFunction(myAwesomeFunction);

function myAwesomeFunction(onCompleteCallback) {
    console.log("Running myAwesomeFunction... doing complex tasks...");
    console.log("Complex task complete. I will notify the user");
    onCompleteCallback();
}

myAwesomeFunction(function () {
    console.log("notifyUser function was called !");

});

//simplified version this arrow represents function without naming it.
myAwesomeFunction(() => {
    console.log("notifyUser function was called!");
});


function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function myCalculatorFunction(a, b, operationalCallback) {
    console.log("Doing a calculation using the numbers:", a, b);
    console.log("We might have code that saves the result to a log or a database"
    );
    return operationalCallback(a, b);
}

// const result = myCalculatorFunction(1, 2, add);
// console.log(result); // Output: 3

// const result2 = myCalculatorFunction(2, 3, multiply);
// console.log(result2); // Output: 6

// const finalResult = myCalculatorFunction(result, result2, add);
// console.log(finalResult); // Output:9

function divide(s, b) {
    return s / b;
}

function subtract(s, b) {
    return s - b;
}

function myCalculator(s, b, opperation) {
    console.log("doing a calculation using the numbers:", s, b);
    console.log("code may save result to log or database");
    return opperation(s, b);

}

const result = myCalculator(15, 3, divide);
console.log(result); // Output: 

const result2 = myCalculator(2024, 1996, subtract);
console.log(result2); //Output:

const finalResult = myCalculator(result, result2, add);
console.log(finalResult); //Output :