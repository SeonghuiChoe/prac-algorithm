function solution(A) {
    const filtered = A.filter(x => x > 0);
    let counter = 1;
    while (A.find(a => a === counter)) {
        counter += 1;
    }
    return counter;
}

console.log(solution([1, 2, 3, 4, 6]));
