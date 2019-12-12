module.exports = {
  server: {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
  },
  db: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimitMax: 10,
    connectionLimitMin: 0,
    dialect: 'mysql',
    idle: 60 * 1000,
    charset: 'utf8mb4',
  },
};
