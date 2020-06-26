const express = require('express');
const app = express();
const port = 8080;
const rp = require('request-promise');
const bodyParser = require('body-parser')
var fs = require('fs');

var credentials = {
  userId: "put your user id here",
  password: "put your password here",
  cert: "put the path to the certificate file here",
  key: "put the path to the private key here",
  ca: "put the path to the client certificate file here"
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

headers = {};
headers['Authorization'] = 'Basic ' + new Buffer(credentials.userId + ':' + credentials.password).toString('base64');
headers['Accept'] = 'application/json';

bodyInfo =  
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
    body: bodyInfo,
    json: true
};

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())


app.post('/merchantMeasurement', (req, res) => {
    rp(measurementRequest).then(body => {
      console.log(body)
      res.send(200, body)
    }).catch (err => {
      console.log(err)
      res.send(500, err)
    })
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));