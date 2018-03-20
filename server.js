const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = require('./routes');

const PORT = 3000;
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(router);

//mount server
app.listen(PORT, () => {
  console.log(`Server is listening at PORT:${PORT}...`);
});
