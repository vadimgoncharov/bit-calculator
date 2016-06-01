function bitCalculator(...args) {
    return args.reduce((totalSum, arg, index) => {
        if (typeof arg !== 'string') {
            throw new TypeError(
                `Argument with index=${index} is not a string, it's ${({}).toString.call(arg)}`
            );
        }

        let bitSum      = 0;
        const bitStr    = arg;
        const bitStrLen = bitStr.length;
        
        for (let i = 0; i < bitStrLen; i += 1) {
            const bit = bitStr[i];
            const power = bitStrLen - i - 1;

            if (bit === '1') {
                bitSum += Math.pow(2, power);
            }
            else if (bit !== '0') {
                throw new RangeError(`Argument with index=${index} has invalid bit value "${bit}"`)
            }
        }

        totalSum += bitSum;

        return totalSum;
    }, 0);
}

module.exports = bitCalculator;
