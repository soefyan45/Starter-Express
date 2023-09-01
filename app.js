require("dotenv").config();
let express = require('express');
// var bodyParser = require('body-parser')
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let appsIndex = require('./routes/AppsIndex');
const formidable = require('express-formidable');
const requestIp = require('request-ip');
const cors = require('cors');

var app = express();

app.use(cors());
app.use(
  express.json()
);
// app.use(cors({
//   origin: '*',
//   AccessControlAllowOrigin: '*'
// }));
// app.use(express.urlencoded({ extended: true }));
app.use(formidable())
app.set('trust proxy', true)
app.use(requestIp.mw())
app.use(logger('dev'));
app.use(cookieParser());
app.get('/', (req, res) => {
    console.log('2')
    res.status(404).json()
  })
app.use('/apps', appsIndex);
if(process.env.APP_MODE=='DEV'){
  var port = process.env.PORT || 5008;
  app.listen(port);
  console.log('Listening on localhost Jalan di port:'+ port);
}

module.exports = app;
