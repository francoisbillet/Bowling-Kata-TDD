const calculateScore = (throws) => {
    let sum = 0;
    let firstThrow = true;
    let secondThrow = false;

    for (let i=0; i<throws.length; i++) {
        const strike = firstThrow && throws[i] === 10;
        const spare = secondThrow && (throws[i-1] + throws[i] === 10);

        if (firstThrow && !strike) {
            firstThrow = false;
            secondThrow = true;
        }
        else if (secondThrow && !spare) {
            firstThrow = true;
            secondThrow = false;
        }
        const additionalPoints = calculateAdditionalPoints(throws, i, strike, spare);
        sum += throws[i] + additionalPoints;
    }
    return sum;
}

const calculateAdditionalPoints = (throws, i, strike, spare) => {
    let additionalPoints = 0;
    if (strike) {
        additionalPoints = throws[i+1] + throws[i+2];
    }
    else if (i != 0 && spare) {
        additionalPoints = throws[i+1];
    }
    return additionalPoints;
}

module.exports = calculateScore;