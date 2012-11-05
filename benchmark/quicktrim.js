/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

"use strict";

var trim = require(__dirname + '/../').trim;
var Benchmark = require('benchmark');

var cases = '   \t\r i am so glad to hear about you.  ';

var suite = new Benchmark.Suite();
suite
.add(' quicktrim()', function () {
  trim(cases);
})

.add('String.trim()', function () {
  cases.trim();
})

.on('cycle', function (evt, bench) {
  console.log(String(evt.target));
})

.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})

.run();

