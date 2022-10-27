class Game {
    rolls;
    score;

    constructor() {
        this.rolls = [];
        this.score = 0;
    }

    roll = (pins) => {
        this.rolls.push(pins);
    }

    calculateScore = () => {
        let rollIndex = 0;
        for(let frame=0;frame<10;frame++) {
            const isStrike = this.rolls[rollIndex] === 10;
            const isSpare = this.rolls[rollIndex] + this.rolls[rollIndex+1] === 10;
            if (isStrike) {
                this.countStrike(rollIndex);
                rollIndex += 1;
            }
            else if (isSpare) {
                this.countSpare(rollIndex);
                rollIndex += 2;
            }
            else {
                this.score += this.rolls[rollIndex] + this.rolls[rollIndex+1];
                rollIndex += 2;
            }
        }
        return this.score;
    }

    countSpare = (rollIndex) => {
        this.score += this.rolls[rollIndex] + this.rolls[rollIndex+1] + this.rolls[rollIndex+2];
    }

    countStrike = (rollIndex) => {
        this.score += this.rolls[rollIndex] + this.rolls[rollIndex+1] + this.rolls[rollIndex+2];
    }
}

module.exports = Game;