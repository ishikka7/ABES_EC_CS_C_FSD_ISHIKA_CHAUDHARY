{
    var a = 20;
    let b = 30;
    const pi = 3.14;
    console.log("Block Scope:");
    console.log("Value of a in global scope: ", a);
    console.log("Value of b in global scope: ", b);
    console.log("Value of pi in global scope: ", pi);
}
function callValues(a, b, c) {
    console.log("Outside the block:");
    console.log("Value of a outside the function : ", a);
    console.log("Value of b outide the function : ", b); //error
    console.log("Value of c outide function : ", c);  //error
}
callValues(a, b, pi);