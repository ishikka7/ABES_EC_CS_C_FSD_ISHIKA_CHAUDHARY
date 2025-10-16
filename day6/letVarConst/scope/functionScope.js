function fun() {
    var a = 20;
    let b = 30;
    const pi = 3.14;
    console.log("Global Scope:");
    console.log("Value of a inside the function: ", a);
    console.log("Value of b inside the function: ", b);
    console.log("Value of pi inside the function: ", pi);
}
fun();
console.log("Outside Function");
console.log("Value of a outside the function : ", a);
console.log("Value of b outside the function : ", b);
console.log("Value of pi outside the function : ", pi);