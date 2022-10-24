const calculateScore = require("./index");

// Calculate sum of a single frame

test('return the sum of ten throws', () => {
    expect(calculateScore([[5,4], [0,7], [8,1], [4,4], [9,0], [1,8], [2,3], [3,4], [8,0], [7,2]])).toBe(80);
})

test('return the sum of two throws with a spare in the first throw', () => {
    expect(calculateScore([[8,2], [5,4]])).toBe(24);
})

test('return the sum of two throws with a strike in the first throws', () => {
    expect(calculateScore([[10,0], [5,4]])).toBe(28);
})

test('return the sum of three throws with a spare in the first throw and a strike in the second', () => {
    expect(calculateScore([[1,9], [10,0], [5,4]])).toBe(48);
})

test('return the sum of three throws with a strike in the first throw and a spare in the second', () => {
    expect(calculateScore([[10,0], [9,1], [5,4]])).toBe(44);
})

test('spare on 10th frame', () => {
    expect(calculateScore([[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [9,1,2]])).toBe(14);
})

// test('return the sum of all strikes', () => {
//     expect(calculateScore([[10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,10,10]])).toBe(300);
// })