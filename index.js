'use strict';

var chalk = require('chalk');

module.exports = function (value, max, options) {
    options = options || {};

    var EXPORT_TYPE = 'display';
    var OS = {};
    if (options.color) {

    }

    if (options.hasNewLine) {

    }

    if (options.design) {

    }
  
    console.log('color: '+ color + 'goNewLine: '+ goNewLine);
    var progressCharacter = design;
    var progressBar = '';
    if (max > process.stdout.columns || max < 1) {
        max = process.stdout.columns;
    }
    if (value > max) {
        value = max;
    }
    if (value < 0) {
        value = 0;
    }
    for (var counter = 0; counter < max; counter++) {
        progressBar = chalk.gray(progressCharacter);
        process.stdout.write(`${progressBar}`);
    }
    for (var counter = 0; counter < max; counter++) {
        if (counter < value) {
            progressBar = chalk.blue(progressCharacter);
            switch (color) {
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
            //progressBar = chalk.green(progressCharacter);
            process.stdout.cursorTo(counter)
            process.stdout.write(`${progressBar}`);
        }
    }
    if (!!goNewLine) {
        process.stdout.write(`\n`);
    } else {
        process.stdout.write(` `);
    }

};