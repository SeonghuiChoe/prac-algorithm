function binaryGap(a) {
    let binary = '';
    do {
        binary = (a % 2) + binary;
    } while (a = Math.floor(a/2));

    let max = 0;
    let zeros = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0')
            zeros +=1;
        else {
            max = max > zeros ? max : zeros;
            zeros = 0;
        }
    }
    return max;
}

console.log(binaryGap(41)); // return 2