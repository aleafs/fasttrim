/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

"use strict";

/**
 * @ function call will cost some cpu time, so ...
 */
exports.trim = function (s) {
  var m = s.length;
  for (var i = 0; i < m; i++) {
    if (s.charCodeAt(i) > 32) {
      break;
    }
  }

  for (var j = m - 1; j > i; j--) {
    if (s.charCodeAt(j) > 32) {
      break;
    }
  }

  return s.substring(i, j + 1);
};

exports.ltrim = function (s) {
  for (var i = 0, m = s.length; i < m; i++) {
    if (s.charCodeAt(i) > 32) {
      break;
    }
  }
  return s.substring(i);
};

exports.rtrim = function (s) {
  for (var i = s.length - 1; i > 0; i--) {
    if (s.charCodeAt(i) > 32) {
      break;
    }
  }
  return s.substring(0, i + 1);
};

