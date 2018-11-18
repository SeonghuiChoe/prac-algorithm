var inputs = (require('fs').readFileSync('/dev/stdin')+'').match(/[^\n$]+/g).map(parser);
function parser(x) {
    return x.split(' ').map(Number);
}

function f(n, k) {
    if (Math.floor(n / k) === 0) return 0;
    return Math.floor(n / k) + f(Math.floor(n / k) + (n % k), k);
}

inputs.forEach(function (input) {
    console.log(f(input[0] * input[1], input[1]));
});
