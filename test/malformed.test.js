var rewire = require('rewire');
var should = require('should');

describe('malformed.test.js', function () {
  var malformed = rewire('../lib/malformed.js');
  describe('mockURL', function () {
    var mockURL = malformed.__get__('mockURL');
    it('mockURL should be ok', function () {
      mockURL('http://cnodejs.org').should.be.equal('http://cnodejs.org/?_malformed=%malformed');
    });
    it('mockURL should be ok', function () {
      mockURL('http://cnodejs.org?key1=key1').should.be.equal('http://cnodejs.org/?key1=key1&_malformed=%malformed');
    });
  });

  describe('mockBody', function () {
    var mockURL = malformed.__get__('mockBody');
    it('mockURL should be ok when null', function () {
      mockURL(null).should.be.eql({_malformed: '%malformed'});
    });

    it('mockURL should be ok when undefined', function () {
      mockURL(undefined).should.be.eql({_malformed: '%malformed'});
    });

    it('mockURL should be ok when empty', function () {
      mockURL({}).should.be.eql({_malformed: '%malformed'});
    });
  });
});