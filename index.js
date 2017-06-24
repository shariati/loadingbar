'use strict';

const chalk = require('chalk');

module.exports = function (percentageValue, options) {
  options = options || {};
  process.stdout.cursorTo(0);
  const MAXIMUM = process.stdout.columns;
  let PROGRESS_BAR_COLOR = 'green';
  let counter = 0;
  let PEOGRESSBAR_SIZE = 10;

  // NOTE: A complete list can be found at https://en.wikipedia.org/wiki/Block_Elements
  let PROGRESS_BAR_CHARACTER_DESIGN = '▄';

  if (options.sizeInColumns) {
    PEOGRESSBAR_SIZE = options.sizeInColumns;
  }
  if (options.color) {
    PROGRESS_BAR_COLOR = options.color;
  }
  if (options.design) {
    PROGRESS_BAR_CHARACTER_DESIGN = options.design.charAt(0);
  }
  const PROGRESS_CHARACTER = PROGRESS_BAR_CHARACTER_DESIGN;
  let progressBar = '';
  if (PEOGRESSBAR_SIZE > process.stdout.columns || PEOGRESSBAR_SIZE < 1) {
    PEOGRESSBAR_SIZE = MAXIMUM;
  }
  if (percentageValue > 100) {
    percentageValue = 100;
  }
  if (percentageValue < 0) {
    percentageValue = 0;
  }
  for (counter = 0; counter < PEOGRESSBAR_SIZE; counter++) {
    progressBar = chalk.gray(PROGRESS_CHARACTER);
    process.stdout.write(`${progressBar}`);
  }
  const STEPS = Math.floor((percentageValue * PEOGRESSBAR_SIZE) / 100);
  for (counter = 0; counter < STEPS; counter++) {
    progressBar = chalk.blue(PROGRESS_CHARACTER);
    switch (PROGRESS_BAR_COLOR) {
      case 'red':
        progressBar = chalk.red(PROGRESS_CHARACTER);
        break;
      case 'green':
        progressBar = chalk.green(PROGRESS_CHARACTER);
        break;
      case 'yellow':
        progressBar = chalk.yellow(PROGRESS_CHARACTER);
        break;
      case 'magenta':
        progressBar = chalk.magenta(PROGRESS_CHARACTER);
        break;
      case 'cyan':
        progressBar = chalk.cyan(PROGRESS_CHARACTER);
        break;
      case 'white':
        progressBar = chalk.white(PROGRESS_CHARACTER);
        break;
      case 'gray':
        progressBar = chalk.gray(PROGRESS_CHARACTER);
        break;
      case 'blue':
      default:
        progressBar = chalk.blue(PROGRESS_CHARACTER);
        break;
    }
    process.stdout.cursorTo(counter);
    process.stdout.write(`${progressBar}`);
  }
  if (options.hasNewLine) {
    process.stdout.write(`\n`);
  } else {
    process.stdout.cursorTo(PEOGRESSBAR_SIZE + 1);
    process.stdout.write(` `);
  }
};
