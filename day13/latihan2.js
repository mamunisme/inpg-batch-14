function square(number) {
    return number * number
}

function pi() {
    return Math.PI.toFixed(2)
}

var luasarea = pi() * square(7);
var area = Match.round(luasarea);

console.log(area); // 154