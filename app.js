var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy; 

passport.use(new LocalStrategy( 
  function(username, password, done) { 
    Account.findOne({ username: username }, function (err, user) { 
      if (err) { return done(err); } 
      if (!user) { 
        return done(null, false, { message: 'Incorrect username.' }); 
      } 
      if (!user.validPassword(password)) { 
        return done(null, false, { message: 'Incorrect password.' }); 
      } 
      return done(null, user); 
    }); 
  }));
require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var donutRouter = require('./routes/donut');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var donut = require("./models/donut");
var resourceRouter = require('./routes/resource');
var app = express();


// passport config 
// Use the existing connection 
// The Account model  

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({ 
  secret: 'keyboard cat', 
  resave: false, 
  saveUninitialized: false 
})); 
app.use(passport.initialize()); 
app.use(passport.session());

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/donut', donutRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);




 

 

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await donut.deleteMany();
  let instance1 = new donut({"donut_name":"crispy","donut_size":100,"donut_type":"large"});
  let instance2 = new donut({"donut_name":"baked","donut_size":200,"donut_type":"medium"})
  let instance3 = new donut({"donut_name":"hand tossed","donut_size":300,"donut_type":"small"})
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
  
  instance2.save( function(err,doc) {
      if(err) return console.error(err);
      console.log("Second object saved")
      });
  
  instance3.save( function(err,doc) {
      if(err) return console.error(err);
      console.log("Third object saved")
          });
  }
  let reseed = true;
  if (reseed) { recreateDB();}
 


  var Account =require('./models/account'); 

 
 


passport.use(new LocalStrategy(Account.authenticate())); 
passport.serializeUser(Account.serializeUser()); 
passport.deserializeUser(Account.deserializeUser()); 




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
