'use strict';

/*global module:true require:true*/
let request = require('request-promise');

let getIp = (callback) => {
    request('http://ip-api.com/json')
        .then(function(response) {
            callback(JSON.parse(response).query)
        })
        .catch(function(error) {
            callback('Something went wrong!')
        })
}

let isValidIP = (ipAddress) => {
    let validIpRegex = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);

    if (validIpRegex.test(ipAddress))
        return true

    return false
}

module.exports = {
    getIp: getIp,
    isValidIP: isValidIP
}
