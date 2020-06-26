var express    = require("express"),
    router     = express.Router(),
    flash      = require('express-flash'),
    sql        = require('mysql'),
    path       = require('path');

router.get('/', (req, res) => {
	res.render('index')
});

/*router.get("/terms-and-conditions", function(req, res){
	res.render("terms-and-conditions");
});

router.get("/privacy-policy", function(req, res){
	res.render("privacy-policy");
});

router.get('/sitemap.xml', function(req, res) {
	res.sendFile(path.join(__dirname, '../sitemap.xml'));
});

router.get('/robots.txt', function(req, res) {
	res.sendFile(path.join(__dirname, '../robots.txt'));
});*/

module.exports = router;
