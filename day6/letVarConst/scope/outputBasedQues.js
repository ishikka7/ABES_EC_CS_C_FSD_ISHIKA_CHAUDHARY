console.log(a);
var a;
function fun() {
    console.log(a);
    var a = 10;
    console.log(a);
}
fun();
a = 30;
console.log(a);
