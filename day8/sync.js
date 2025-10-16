// console.log("start");

const waitForSomeTime = (ms) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Do nothing
    }
    
}
const syncUsingTimer = () => {
    waitForSomeTime(4000);
    console.log("Wait has been completed");
}
// syncUsingTimer();
// console.log("end");

const asyncUsingTimer = () => {
    setTimeout(() => {
        console.log("Inside timer");
    }, 4000);
}
console.log("start");
syncUsingTimer();
asyncUsingTimer();
console.log("end");
    