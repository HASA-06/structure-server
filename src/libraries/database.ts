import { Dialect, Sequelize } from 'sequelize';

import Environment from 'utils/environment';

Environment;

const database: Sequelize = new Sequelize(
  process.env.DATABASE__SCHEMA as string,
  process.env.DATABASE__USERNAME as string,
  process.env.DATABASE__PASSWORD as string,
  {
    host: process.env.DATABASE__HOST as string,
    port: parseInt(process.env.DATABASE__PORT as string),
    dialect: process.env.DATABASE__DIALECT as Dialect,
    timezone: '+09:00',
    dialectOptions: {
      charset: 'utf8mb4',
      dateStrings: true,
      typeCast: true,
    }
  }
);

export default database;