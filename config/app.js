require('dotenv').config();

module.exports = {
    appKey: process.env.APP_KEY,
    appUrl: process.env.APP_URL,
    appPort: process.env.APP_PORT,
    dbhost: process.env.DB_HOST
};
