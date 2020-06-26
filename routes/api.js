var express    = require("express"),
    router     = express.Router(),
    flash      = require('express-flash'),
    sql        = require('mysql'),
    request    = require('request'),
    path       = require('path');

router.get('/merchantMeasurement', (req, res) => {
	headers = {};
	headers['Authorization'] = 'Basic ' + new Buffer('K98T31PFE8R2BXBR0ZL221_enTQYwBBmsGO-2CBuQQoHl8abA' + ':' + 'w1tlLQDfNq9KXGr65').toString('base64');
	headers['Accept'] = 'application/json';

	body =  
	{
		"requestHeader": {
			"messageDateTime": "2020-06-23T17:50:05.327Z",
			"requestMessageId": "6da60e1b8b024532a2e0eacb1af58581"
		},
		"requestData": {
			"naicsCodeList": [
				""
			],
			"merchantCategoryCodeList": [
				"5812"
			],
			"merchantCategoryGroupsCodeList": [
				""
			],
			"postalCodeList": [
				""
			],
			"msaList": [
				""
			],
			"countrySubdivisionList": [
				"PA",
				"NY"
			],
			"merchantCountry": "840",
			"monthList": [
				"201501"
			],
			"accountFundingSourceList": [
				"All"
			],
			"eciIndicatorList": [
				"All"
			],
			"platformIDList": [
				"All"
			],
			"posEntryModeList": [
				"All"
			],
			"cardPresentIndicator": "ALL",
			"groupList": [
				"Standard"
			]
		}
	};
	
	var measurementRequest = {
	    method: 'POST',
	    uri: 'https//sandbox.api.visa.com/merchantmeasurement/v1/merchantbenchmark',
	    key: './resources/key.pem',
	    cert: './resources/cert.pem',
	    ca: './resources/cert.pem',
	    headers: headers,
	    body: body
	};

	request(measurementRequest.uri, function (error, response, body) {
		if (!error){
			console.log(response);
			res.status(200).send(body);
		} else {
			console.log(error);
			res.status(400).send(error);
		}
	});
});

module.exports = router;
