/* eslint-disable @typescript-eslint/no-var-requires */
import { Sequelize } from 'sequelize-typescript';

import TypesBeers from '../models/TypesBeers';
const databaseSqlite = require('../config/databaseSqlite');
const databaseMySql = require('../config/databaseMysql');
require('../helpers/dontenv');

const sequelize = new Sequelize(
  process.env.DB_TYPE === 'sqlite' ? databaseSqlite : databaseMySql,
);

const models = [TypesBeers];

sequelize.addModels(models);

export default sequelize;
