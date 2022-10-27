const Game = require("./index");

let game;

beforeEach(() => {
    game = new Game();
})

it('should create a new game', () => {
    expect(game).toBeDefined();
})

it('should return 0 for a full gutter game', () => {
    rollMany(game, 0, 20);
    checkScore(game, 0);
})

it('should return score for a full one-pin game', () => {
    rollMany(game, 1, 20);
    checkScore(game, 20);
})

// Spares
it('should return score for a spare followed by a normal throw and then only gutter', () => {
    game.roll(6);
    game.roll(4);
    game.roll(3);
    rollMany(game, 0, 17);
    checkScore(game, 16);
})

it('should return score for a game full of spares', () => {
    rollMany(game, 5, 21);
    checkScore(game, 150);
})


// Strikes
it('should return score for a strike followed by 2 normal throws', () => {
    game.roll(10);
    rollMany(game, 3, 2);
    rollMany(game, 0, 16)
    checkScore(game, 22);
})

it('should return score for a perfect game (only strikes)', () => {
    rollMany(game, 10, 12);
    checkScore(game, 300);
})

// Utility functions
const rollMany = (game, pins, throws) => {
    for(let i=0; i<throws; i++) {
        game.roll(pins);
    }
}

const checkScore = (game, score) => {
    expect(game.calculateScore()).toBe(score);
}