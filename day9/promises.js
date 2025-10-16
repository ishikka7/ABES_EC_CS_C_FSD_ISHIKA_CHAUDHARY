// const orderCoffee = () => {
//     setTimeout (() => {
//         console.log("Make some order");
//         setTimeout (() => {
//             console.log("Start the machine");
//             setTimeout (() => {
//                 console.log("Grinding the beans");
//                 setTimeout (() => {
//                     console.log("Boiling the water");
//                     setTimeout (() => {
//                         console.log("Mixing the coffee");
//                         setTimeout (() => {
//                             console.log("Pouring in the cup");
//                             setTimeout (() => {
//                                 console.log("Adding sugar and milk");
//                                 setTimeout (() => {
//                                     console.log("Coffee is ready!");
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 4000)
// }

const waitfun = (time,msg) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log(msg);
            resolve();
        }, time)
    })
}
const orderCoffee = async () => {
    await waitfun(4000,"Make some order");
    await waitfun(2000,"Start the machine");
    await waitfun(3000,"Grinding the beans");
    await waitfun(1000,"Boiling the water");
    await waitfun(2000,"Mixing the coffee");
    await waitfun(4000,"Pouring in the cup");
    await waitfun(1000,"Adding sugar and milk");
    await waitfun(1100,"Coffee is ready!");
}