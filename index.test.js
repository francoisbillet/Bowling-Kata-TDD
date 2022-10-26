const calculateScore = require("./index");

it('should return the score for 2 normal throws', () => {
    expect(calculateScore([2,3])).toBe(5);
})

it('should return the score for a strike followed by 2 normal throws', () => {
    expect(calculateScore([10,2,3])).toBe(20);
})

it('should return the score for a spare followed by a normal throws', () => {
    expect(calculateScore([7,3,5])).toBe(20);
})

it('should return the score for a strike followed by a spare (3 and 7) and 2 normal throws', () => {
    expect(calculateScore([10,3,7,5])).toBe(40);
})

it('should return the score for a strike followed by a spare (0 and 10) and 2 normal throws', () => {
    expect(calculateScore([10,0,10,5])).toBe(40);
})

it('should return the score for a 10th frame of 2 normal throws', () => {
    expect(calculateScore([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,4])).toBe(9);
})

it('should return the score for a 10th frame of a spare and a normal throw', () => {
    expect(calculateScore([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5])).toBe(15);
})