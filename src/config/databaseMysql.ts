require('../helpers/dontenv');

module.exports = {
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_bin',
    timestamps: false,
    quoteIdentifiers: false,
    freezeTableName: false,
  },
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  seedersPath: './dist/database/seeders',
};
