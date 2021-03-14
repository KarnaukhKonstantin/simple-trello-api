require('dotenv').config();

const devConfig = {
    client: process.env.DB_CLIENT,
    connection: {
        database: process.env.DB_TABLE,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    migrations: {
        directory: "db/migrations",
        tableName: "migrations"
    }
};

module.exports = {
    development: {
        ...devConfig
    }
};
