/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

var should = require('should');
var trim = require(__dirname + '/../');

describe('quicktrim', function() {

  it('should_quick_trim_works_fine', function () {
    trim.trim(' i am so glad ...\t\n').should.eql('i am so glad ...');
  });

});
