const express        = require('express'),
      session        = require('express-session'),
      app            = express(),
      bodyParser     = require('body-parser'),
      methodOverride = require('method-override'),
      sql            = require('mysql'),
      bcrypt         = require('bcrypt'),
      passport       = require('passport'),
      flash          = require('express-flash'),
      indexRoutes    = require("./routes/index"),
      apiRoutes    = require("./routes/api"); // api testing routes

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(flash());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

// DB Connection
var connection = sql.createConnection({
  host     : process.env.FF_DB_SERVER,
  user     : process.env.FF_DB_USER,
  password : process.env.FF_DB_PASS
});
 
connection.connect(function(err) {
  if (err) {
    console.error('Attempting DB Connection: [ERR]\n\n ' + err.stack);
    return;
  }
 
  console.log('Attempting DB Connection: [OK]');
});

app.use(indexRoutes);

// temporary routing convention for API testing
app.use('/api', apiRoutes);

app.get('/*', (req, res) => {
    res.render('404')
});

app.listen(process.env.PORT || 8080, () => {
    console.log('App Listening: [OK]')
});
