require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')
var db = require('./config/dbConnection');
const initDatabase = require('./config/dbInitTables');

// Main app
var app = express();

/// Init auto swagger 
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "beta",
      title: "FoosballTracker API",
      description: "FoosballTracker API Information",
      contact: {
        name: "Music Room Team !"
      },
      servers: ["http://localhost:3000/docs"]
    }
  },
  // ['.routes/*.js']
  apis: ['./api/routes/*.js', './api/models/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Logs
app.use(logger('dev'));


// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Fix CORS errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
    return res.status(200).json({});
  };
  next();
});

// Routes
var indexRouter = require('./api/routes/index');
var playerRouter = require('./api/routes/player');
var gameRouter = require('./api/routes/game');

// Database tables initiation
initDatabase.initDatabaseTables(db)

// Catch errors on database connection failure
db.on('error', function (err) {
  console.log('Error while connecting to database: ', err)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Call routes API
app.use('/', indexRouter);
app.use('/api/v1/players', playerRouter);
app.use('/api/v1/games', gameRouter);

//Use hamlet 
app.use(helmet())

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
