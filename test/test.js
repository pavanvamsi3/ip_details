'use strict';

/*global describe it require:true */

var expect = require('chai').expect;
var ipInfo = require('../index');

describe('#ipInfo', function() {
    it('IP Address', function() {
        ipInfo.getIp(function(result) {
            let validIp = ipInfo.isValidIP(result);
            expect(validIp).to.equal(true);
        });
    });

    it ('isValidIP', function() {
        var result = ipInfo.isValidIP('8.8.8.8');
        expect(result).to.equal(true);
    });

    it('City', function() {
        ipInfo.getCity('8.8.8.8', function(result) {
            expect(result).to.equal('Mountain View, California');
        });
    });

    it('City', function() {
        ipInfo.getCountry('8.8.8.8', function(result) {
            expect(result).to.equal('United States');
        });
    });
});
