require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { server } = require('./config/config');
const routes = require('./src/routes');
const errorHandler = require('./src/errors-handler');
const { createTables } = require('./src/db');

const { port } = server;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// defining routes
routes(app);

// errors handler. Must be the last of app.use
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  errorHandler(err, res);
});

app.listen(port, async () => {
  console.log(`Server is listening on the port ${port}`);
  await createTables();
});
