/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

"use strict";

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

  return s.slice(i, j + 1);
};

