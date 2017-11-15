'use strict';

/*global describe it require:true */

var expect = require('chai').expect;
var ipInfo = require('../index');

describe('#ipInfo', function() {
    it('IP Address', function() {
        ipInfo.getIp(function(result) {
            let validIp = ipInfo.isValidIP(result);
            expect(validIp).to.equal(true)
        })
    });
});
