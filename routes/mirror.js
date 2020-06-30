var express    = require("express"),
    router     = express.Router(),
    flash      = require('express-flash'),
    sql        = require('mysql'),
    path       = require('path');
    dotenv     = require('dotenv')

/*
FF_DB_SERVER=farmers-fight.cvutgb8jajf0.us-east-2.rds.amazonaws.com
FF_DB_USER=sa
FF_DB_PASS=SFkqlYNvcmjiXrEVKtuC
FF_MMAPI_USER=K98T31PFE8R2BXBR0ZL221_enTQYwBBmsGO-2CBuQQoHl8abA
FF_MMAPI_PASS="w1tlLQDfNq9KXGr65"
*/

dotenv.config();

router.get('/', (req, res) => {
	var team = {};
	team['name'] = 'Farmers Fight';
	res.render('index', { team: team })
});


var connection = sql.createConnection({
  host     : "farmers-fight.cvutgb8jajf0.us-east-2.rds.amazonaws.com",
  user     : "sa",
  password : "SFkqlYNvcmjiXrEVKtuC"
});

connection.connect(function(err) {
  if (err) {
    console.error('Attempting DB Connection: [ERR]\n\n ' + err.stack);
    return;
  }
    console.log('Attempting DB Connection: [OK]');
    var estimates = [9,"TX",1.023,3.02,0.01256,3.2548];
    //change column each time
    var quer = `use "farmers-fight"; INSERT INTO "projected-growth" (mcg,state,"projected-sales-yoy-low","projected-sales-yoy-high","projected-sales-mom-low","projected-sales-mom-high") VALUES (`+estimates[0]+`),(`+estimates[1]+`),(`+ estimates[2]+`),(`+estimates[3]+`),(`+estimates[4]+`),(`+estimates[5]+`) RETURNING *`;
      connection.query(quer, function(err, result) {
          if (err) throw err;
          console.log("1 record inserted");
      });
});

module.exports = router;
getStateTwoDigitCode = function (stateFullName) {
return this.stateList[stateFullName];
}




//every 24 hours @3am -cole but dont actually implement, just leave code commented out
//query api, upload to current data, move old current data into historical --we aren't doing this cause api is poo poo, maybe implement but comment out


//run analysis on historical data and repopulate projected-growth
/* what is analysis?
  look in historical data at past months numbers for the current month (sales/trans yoy, mom)
  average

  for each industry
  for each state
  look at the average of mom for current month
  compare to current mom +-3 = unaffected
average of all yoy -
  average of mom for march

  Health Scale
  1- less than -5 from projected
  2- up to -5 from projected
  3- unaffected - +- 1 from projected
  4 - up to +5 from projected
  5- greater than +5 from projected

  historical data is ideally last 5 years
  How to calculate projected
  get average sales mom, yoy

for each industry
for each state

  if min/max is more than +-average/2, go through data and check recent months to see if sharp change in recent month, if sharp decline do projected -averagemom/yoy, if sharp increase do projected +averagemom/yoy
  projected mom = average mom (current month) +- average yoy/2 (averageyoy if sharp increase or decline)
  projected yoy = average yoy (current month) +- .average mom/2 (averagemom if sharp increase or decline)



  min(length-3), max(length-2), avg(length-1)
  REAL projected mom = average the past (2-3) mom of the current month +- avg of past 6 months/2
  REAL projected yoy = average yoy of past (2-3) of current month +- avg of sales yoy of past 6 months/2


  push mcg, state, pyoy-max/min,pmom-max/min into table

*/
//use projected growth vs current data to update industry health
//if inside min/max, level 3 ->push into table
//if below min, is it more than 2(max-min) below? yes, give it a 1, no give it a 2
//if above max, is it more than 2(max-min) above? yes, give it a 5, no give it a 4
//color code map based on industry health table --cole
