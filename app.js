const express = require('express');
const app = express();

const api = require('./api/endpoints');
const routes = require('./api/routes');
const config = require('./config.json');

const { logger } = require('./utils/winston');
const log = logger();

const appName = config.name
const version = config.version
const port = config.port

app.use(express.json());
app.use(express.static('public'));

app.use(api);
app.use(routes);

app.listen(port, "0.0.0.0", () => {
    log.info(`${appName}`);
    log.info(`Site version: ${version}`);
    log.info(`Website started. Access at 0.0.0.0:${port}`);
});