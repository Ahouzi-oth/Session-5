// exercice : 1

function moyenne(a, b, c) {

    m = (a + b + c) / 3;
}
moyenne(10, 10, 10);
console.log("moyenne", m);

// exercice : 2 

// function max(x, y) {
//     if (x > y) {
//         console.log("maximal", x)
//     } else {
//         console.log("maximal", y)

//     }
// }
// max(10, 12)

function max(x, y) {
    let maximum = x;
    if (y > x) {
        maximum = y;
    }
    console.log("maximum", maximum)
}
max(18, 12)