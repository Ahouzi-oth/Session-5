// exercice : 1

function moyenne(a, b, c) {

    m = (a + b + c) / 3;
}
moyenne(10, 10, 10);
console.log("moyenne", m);

// exercice : 2 ; methode : 1

function maximal(d, f) {
    if (d > f) {
        console.log("maximal", d)
    } else {
        console.log("maximal", f)

    }
}
maximal(10, 12)

// exercice : 2 ; methode : 2

function max(x, y) {
    let maximum = x;
    if (y > x) {
        maximum = y;
    }
    console.log("maximum", maximum)
}
max(180, 115)