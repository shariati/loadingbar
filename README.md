# Progress Bar [![npm version](https://badge.fury.io/js/progressbar.svg)](https://badge.fury.io/js/progressbar)[![Build Status](https://travis-ci.org/shariati/progressbar.svg?branch=master)](https://travis-ci.org/shariati/progressbar)[![Coverage Status](https://coveralls.io/repos/github/shariati/progressbar/badge.svg?branch=master)](https://coveralls.io/github/shariati/progressbar?branch=master)
Masks the input strings

![](screenshot.png)


## Install

```
$ npm install --save progressbar
```


## Usage

```js
const progressbar = require('progressbar');

progressbar('20');

```


## CLI

```
$ npm install --global progressbar
```

```
$ progressbar --help

  Usage
    progressbar <percentage>
    progressbar <percentage> --color red
    progressbar <percentage> --design ♫
    progressbar <percentage> --sizeInColumns 20

  Example
    progressbar 10
    progressbar 10 --color red
    progressbar 10 --color blue --design #
    progressbar 10 --color blue --design # --sizeInColumns 20
