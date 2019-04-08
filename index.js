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

  let progressBarColor = PROGRESS_BAR_COLOR
  let progressBarSize = PEOGRESSBAR_SIZE
  let progressBarCharacterDesign = PROGRESS_BAR_CHARACTER_DESIGN
  let counter = 0

  if (options.sizeInColumns) {
    progressBarSize = options.sizeInColumns
  }
  if (options.color) {
    progressBarColor = options.color
  }
  if (options.design) {
    progressBarCharacterDesign = options.design.charAt(0)
  }
  let progressBar = ''
  if (progressBarSize > process.stdout.columns || progressBarSize < 1) {
    progressBarSize = MAXIMUM
  }
  if (percentageValue > 100) {
    percentageValue = 100
  }
  if (percentageValue < 0) {
    percentageValue = 0
  }
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
    process.stdout.write(`\n`)
  } else {
    process.stdout.cursorTo(progressBarSize + 1)
    process.stdout.write(` `)
  }
}
