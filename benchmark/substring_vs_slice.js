/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

"use strict";

var Benchmark = require('benchmark');

var cases = '   \t\r i am so glad to hear about you.  ';

var suite = new Benchmark.Suite();

suite.add('    slice', function () {
  return cases.slice(7, 9);
});

suite.add('substring', function () {
  return cases.substring(7, 9);
});

suite.on('cycle', function (evt, bench) {
  console.log(String(evt.target));
});

suite.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})

suite.run();

