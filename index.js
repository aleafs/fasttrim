/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

"use strict";

/**
 * @ function call will cost some cpu time, so ...
 */
exports.trim = function (s) {
  var m = s.length;

  for (var i = 0; i < m && s.charCodeAt(i) < 33; i++) {
  }
  for (var j = m - 1; j > i && s.charCodeAt(j) < 33; j--){
  }

  return s.substring(i, j + 1);
};

exports.ltrim = function (s) {
  for (var i = 0, m = s.length; i < m && s.charCodeAt(i) < 33; i++) {
  }
  return s.substring(i);
};

exports.rtrim = function (s) {
  for (var i = s.length - 1; i > 0 && s.charCodeAt(i) < 33; i--) {
  }
  return s.substring(0, i + 1);
};

