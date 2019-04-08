#!/usr/bin/env node
'use strict'
const pkg = require('./package.json')
const loadingbar = require('./')

require('taketalk')({
  init (percentageValue, options) {
    console.log(loadingbar(percentageValue, options))
  },
  help () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    loadingbar <percentage>',
      '    loadingbar <percentage> --color red',
      '    loadingbar <percentage> --design ♫',
      '    loadingbar <percentage> --sizeInColumns 20',
      '',
      '  Example',
      '    loadingbar 10',
      loadingbar('10')
    ].join('\n'))
  },
  version: pkg.version
})
