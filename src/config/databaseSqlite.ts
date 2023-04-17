require('../helpers/dontenv');

module.exports = {
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_bin',
    timestamps: false,
    quoteIdentifiers: false,
    freezeTableName: false,
  },
  dialect: 'sqlite',
  storage: process.env.SQLITE_DB_NAME,
  seedersPath: './dist/database/seeders',
};
