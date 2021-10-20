'use strict'

const chalk = require('chalk')

module.exports = function (percentageValue, options) {
  options = options || {}
  process.stdout.cursorTo(0)
  const MAXIMUM = process.stdout.columns
  const PROGRESS_BAR_COLOR = 'green'
  const PEOGRESSBAR_SIZE = 10
  // NOTE: A complete list can be found at https://en.wikipedia.org/wiki/Block_Elements
  const PROGRESS_BAR_CHARACTER_DESIGN = '▄'

  const progressBarColor = options.color ? options.color : PROGRESS_BAR_COLOR
  let progressBarSize = options.sizeInColumns ? options.sizeInColumns : PEOGRESSBAR_SIZE
  const progressBarCharacterDesign = options.design ? options.design : PROGRESS_BAR_CHARACTER_DESIGN
  let counter = 0

  let progressBar = ''
  if (progressBarSize > process.stdout.columns || progressBarSize < 1) {
    progressBarSize = MAXIMUM
  }

  percentageValue = percentageValue > 100 ? 100 : percentageValue
  percentageValue = percentageValue < 0 ? 0 : percentageValue

  for (counter = 0; counter < progressBarSize; counter++) {
    progressBar = chalk.gray(progressBarCharacterDesign)
    process.stdout.write(`${progressBar}`)
  }
  const STEPS = Math.floor((percentageValue * progressBarSize) / 100)
  for (counter = 0; counter < STEPS; counter++) {
    progressBar = chalk.blue(progressBarCharacterDesign)
    switch (progressBarColor) {
      case 'red':
        progressBar = chalk.red(progressBarCharacterDesign)
        break
      case 'green':
        progressBar = chalk.green(progressBarCharacterDesign)
        break
      case 'yellow':
        progressBar = chalk.yellow(progressBarCharacterDesign)
        break
      case 'magenta':
        progressBar = chalk.magenta(progressBarCharacterDesign)
        break
      case 'cyan':
        progressBar = chalk.cyan(progressBarCharacterDesign)
        break
      case 'white':
        progressBar = chalk.white(progressBarCharacterDesign)
        break
      case 'gray':
        progressBar = chalk.gray(progressBarCharacterDesign)
        break
      default:
        progressBar = chalk.blue(progressBarCharacterDesign)
        break
    }
    process.stdout.cursorTo(counter)
    process.stdout.write(`${progressBar}`)
  }
  if (options.hasNewLine) {
    process.stdout.write('\n')
  } else {
    process.stdout.cursorTo(progressBarSize + 1)
    process.stdout.write(' ')
  }
}
