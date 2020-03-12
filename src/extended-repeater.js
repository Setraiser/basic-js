module.exports = function repeater(str, options ) {

    if (options.repeatTimes === undefined) options.repeatTimes = 1;
    if (options.separator === undefined) options.separator = '+';
    if (options.addition === undefined) options.additionRepeatTimes = 0;
    if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
    if (options.additionSeparator === undefined) options.additionSeparator = '';
    
    let newStr = '';

    for (let i = 0; i < options.repeatTimes; i++) {
        newStr += str;
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            newStr += options.addition;
            if (j < options.additionRepeatTimes - 1) newStr += options.additionSeparator;
        }

        if (i < options.repeatTimes - 1) newStr += options.separator;
    }
    return newStr;
    
    
};
  