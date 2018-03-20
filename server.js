const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = require('./routes');
let store =  require('./store');

const PORT = 3000;
const app = express();
//middlewares
app.use(bodyParser.json());
app.use(logger('dev'));
app.use((req, res, next) => {
  req.store = store;
  next();
});
app.use(router);

//mount server
app.listen(PORT, () => {
  console.log(`Server is listening at PORT:${PORT}...`);
});
