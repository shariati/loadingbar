'use strict';

var chalk = require('chalk');

module.exports = function (percentageValue, sizeInColumns, options) {
    options = options || {};

    var MINIMUM = 0;
    var MAXIMUM = process.stdout.columns;
    var PROGRESS_BAR_COLOR = 'green';

    // NOTE: A complete list can be found at https://en.wikipedia.org/wiki/Block_Elements
    var PROGRESS_BAR_CHARACTER_DESIGN = '▄';


    if (options.color) {
        PROGRESS_BAR_COLOR = options.color;
    }

    if (options.design) {
        if(options.design.length > 1) {
            PROGRESS_BAR_CHARACTER_DESIGN = options.design.charAt(0);
        } else {
            PROGRESS_BAR_CHARACTER_DESIGN = options.design;
        }
        
    }

    var progressCharacter = PROGRESS_BAR_CHARACTER_DESIGN;
    var progressBar = '';
    if (sizeInColumns > process.stdout.columns || sizeInColumns < 1) {
        sizeInColumns = MAXIMUM;
    }
    if (percentageValue > 100) {
        percentageValue = 100;
    }
    if (percentageValue < 0) {
        percentageValue = 0;
    }
    for (var counter = 0; counter < sizeInColumns; counter++) {
        progressBar = chalk.gray(progressCharacter);
        process.stdout.write(`${progressBar}`);
    }
    var value = Math.floor((percentageValue * sizeInColumns) / 100);
    for (var counter = 0; counter < value; counter++) {
        progressBar = chalk.blue(progressCharacter);
        switch (PROGRESS_BAR_COLOR) {
            case 'red':
                progressBar = chalk.red(progressCharacter);
                break;
            case 'green':
                progressBar = chalk.green(progressCharacter);
                break;
            case 'yellow':
                progressBar = chalk.yellow(progressCharacter);
                break;
            case 'magenta':
                progressBar = chalk.magenta(progressCharacter);
                break;
            case 'cyan':
                progressBar = chalk.cyan(progressCharacter);
                break;
            case 'white':
                progressBar = chalk.white(progressCharacter);
                break;
            case 'gray':
                progressBar = chalk.gray(progressCharacter);
                break;
            case 'blue':
            default:
                progressBar = chalk.blue(progressCharacter);
                break;
        }
        process.stdout.cursorTo(counter)
        process.stdout.write(`${progressBar}`);
    }

    if (options.hasNewLine) {
        process.stdout.write(`\n`);
    } else {
        process.stdout.cursorTo(sizeInColumns + 1);
        process.stdout.write(` `);
    }

};