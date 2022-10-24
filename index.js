const calculateScore = (scores) => {
    let spare = false;
    let strike = false;
    return scores.reduce((acc, next) => {
        // Separate treatment for 10th frame
        const additionalPoints = calculateAdditionalPoints(next, spare, strike);
        spare = false;
        strike = false;

        const sumOfFrame = calculateSum(next) + additionalPoints;
        if (next[0] === 10) strike = true;
        else if (calculateSum(next) === 10) {
            spare = true
        }
        return acc + sumOfFrame
    }, 0);
};

const calculateSum = (array) => {
    return array.reduce((acc, next) => acc + next, 0);
}

const calculateAdditionalPoints = (array, spare, strike) => {
    if (spare) {
        return array[0]
    }

    else if (strike) {
        return calculateSum(array);
    }

    return 0;
}

module.exports = calculateScore;