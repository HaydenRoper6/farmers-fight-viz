var express    = require("express"),
    router     = express.Router(),
    sql        = require('mysql'),
	rp         = require('request-promise');
	fs         = require('fs');
	dotenv     = require('dotenv'),

dotenv.config();	
var credentials = {
	userId: process.env.FF_MMAPI_USER,
	password: process.env.FF_MMAPI_PASS,

	//Download cert, key, and ca file from google drive
	cert: "Path to CERT file",
	key: "Path to KEY file",
	ca: "Path to CA file"
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

router.post('/merchantMeasurement', (req, res) => {
	headers = {};
	headers['Authorization'] = 'Basic ' + new Buffer(credentials.userId + ':' + credentials.password).toString('base64');
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
		uri: 'https://sandbox.api.visa.com/merchantmeasurement/v1/merchantbenchmark',
		key: fs.readFileSync(credentials.key),
		cert: fs.readFileSync(credentials.cert),
		ca: fs.readFileSync(credentials.ca),
		headers: headers,
		body: body,
		json: true
	};

	rp(measurementRequest).then(body => {
		console.log(body.response.responseData[0])
		res.send(200, body)

	  }).catch (err => {
		console.log(err)
		res.send(500, err)
	  })
});

module.exports = router;
