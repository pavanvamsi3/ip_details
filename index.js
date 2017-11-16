'use strict';

/*global module:true require:true*/
let request = require('request-promise');

let getIp = (callback) => {
    request('http://ip-api.com/json')
        .then(function(response) {
            callback(JSON.parse(response).query);
        })
        .catch(function(error) {
            callback(error);
        });
};

let isValidIP = (ipAddress) => {
    let validIpRegex = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);

    if (validIpRegex.test(ipAddress))
        return true;

    return false;
};

let getCity = (ipAddress, callback) => {
    let url = 'http://ip-api.com/json/' + ipAddress;
    request(url)
        .then(function(response) {
            callback(JSON.parse(response).city
                + ', ' + JSON.parse(response).regionName);
        })
        .catch(function(error) {
            callback(error);
        });
};

let getCountry = (ipAddress, callback) => {
    let url = 'http://ip-api.com/json/' + ipAddress;
    request(url)
        .then(function(response) {
            callback(JSON.parse(response).country);
        })
        .catch(function(error) {
            callback(error);
        });
};

module.exports = {
    getIp: getIp,
    isValidIP: isValidIP,
    getCity: getCity,
    getCountry: getCountry
};
