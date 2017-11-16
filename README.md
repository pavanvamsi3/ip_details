<p align="center"><img src="https://image.ibb.co/dQ9oCb/mathematica_logo.png" alt="mathematica_logo" border="0"></p>
<hr></hr>

IP Address Details [![Build Status](https://travis-ci.org/pavanvamsi3/ip_details.svg?branch=master)](https://travis-ci.org/pavanvamsi3/ip_details) [![Coverage Status](https://coveralls.io/repos/github/pavanvamsi3/ip_details/badge.svg?branch=master)](https://coveralls.io/github/pavanvamsi3/ip_details?branch=master) 
========
Get all (almost) details of a particular IP address

<p align="center">
<img src="https://ci4.googleusercontent.com/proxy/yOBwdsWDo0FpfFEnDYizoCdEz2CEPU-sncAOd5UA0uToNEUCckLQTz8qVF4G7cr6iDP4EDvssWmF-8c5cQyiu0iXgczQFBYmQ0q89G7Vj5c_X8fHv8EzmVAuY4FC1r_fCkBvCpRwu32wQMJmm_kHAHW_bLzvXCOBFa2DQds=s0-d-e1-ft#https://gallery.mailchimp.com/65bd5a1857b73643aad556093/images/1f3a8645-c856-4427-acc7-bd1df9833c87.gif">
</p>

### Installation

  `npm install ip_details`
  
### Usage
```javascript
var ipDetails = require('@pavanvamsi/ip_details');

ipDetails.getIp(function(ipAddress) {
    console.log(ipAddress) // Your IP Address
}

ipDetails.isValidIp('127.0.0.1') // return true or false
```

### Tests

`npm test`

### Like it? :see_no_evil:

:star: the repo and share.

 [Link to npm package](https://www.npmjs.com/package/ip_details)

### To do

- Location (City, Country)
- Pincode
- Lat Long
- Org
 
### License

[MIT](https://github.com/pavanvamsi3/ip_details/blob/master/LICENSE) Copyright (c) [pavanvamsi](https://twitter.com/pavanvamsi)

