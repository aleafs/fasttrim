/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

var should = require('should');
var trim = require(__dirname + '/../');

describe('quicktrim', function() {

  it('should_quick_trim_works_fine', function () {
    trim.trim(' i am so glad ...\t\n').should.eql('i am so glad ...');
    trim.ltrim('  i am so glad ..\t\n').should.eql('i am so glad ..\t\n');
    trim.rtrim('  i am so glad ..\t\n').should.eql('  i am so glad ..');
  });

  it('all blank character', function () {
    var blank = [];
    for (var i = 0; i < 33; i++) {
      blank.push(String.fromCharCode(i));
    }

    blank = blank.join('');
    blank.should.have.property('length', 33);
    trim.trim(blank).should.eql('');

  });

});
