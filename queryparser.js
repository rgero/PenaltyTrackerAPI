function parseInput(inputString){
    if (inputString)
    {
        return inputString.split(',');
    }
    return undefined;
}

module.exports.parseInput = parseInput;