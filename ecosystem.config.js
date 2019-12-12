/*
  For more information please visit: http://pm2.keymetrics.io/docs/usage/application-declaration/
 */
require('dotenv').config();

const path = require('path');
const { name, main } = require('./package.json');

module.exports = {
  apps: [
    {
      name: `${name}:${process.env.PORT}`,
      script: main,
      exec_mode: 'cluster',
      instances: '1',
      autorestart: true,
      max_restarts: 10,
      min_uptime: '5s',
      watch: false,
      error_file: path.posix.join(process.env.LOGS_FOLDER, `${name}-err.log`),
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};
