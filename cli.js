#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var progressbar = require('./');

require('taketalk')({
  init: function (percentageValue, options) {
    console.log(progressbar(percentageValue, options));
  },
  help: function () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    progressbar <percentage>',
      '    progressbar <percentage> --color red',
      '    progressbar <percentage> --design ♫',
      '    progressbar <percentage> --sizeInColumns 20',
      '',
      '  Example',
      '    progressbar 10',
      progressbar('10')
    ].join('\n'));
  },
  version: pkg.version
});
