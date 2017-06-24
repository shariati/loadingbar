#!/usr/bin/env node
'use strict';
let pkg = require('./package.json');
let loadingbar = require('./');

require('taketalk')({
  init: function (percentageValue, options) {
    console.log(loadingbar(percentageValue, options));
  },
  help: function () {
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
    ].join('\n'));
  },
  version: pkg.version
});
