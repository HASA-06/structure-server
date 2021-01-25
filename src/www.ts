import ConsoleStamp from 'console-stamp';

ConsoleStamp(console, {
  pattern: 'yyyy/mm/dd HH:MM:ss'
});

import App from './app';
import sequelize from 'libs/sequelize';
import ObjectRelationMapping from 'models/index';
import Mybatis from 'libs/mybatis';
import { redis } from 'libs/redis';

import asyncLogger from 'utils/asyncLogger';

try {
  (async () => {
    const app = new App();

    const orm = new ObjectRelationMapping(sequelize);

    console.info('::: MISTER MEAT DATABASE :::\n');
    await asyncLogger(
      'Sequelize Model list',
      'sub models are injected',
      [orm.setSubModels()]
    );

    await asyncLogger(
      'Connection test',
      'Database has connected',
      [sequelize.sync({
        logging: false
      })]
    );

    await asyncLogger(
      'Mybatis-mapper xml file list',
      'Mappers are injected',
      [new Mybatis().setMapperFiles()]
    );

    await asyncLogger(
      'Redis set',
      'Redis will be injected',
      [redis]
    );

    await app.startServer();
  })();
} catch (error) {
  console.info(`::: MISTER MEAT SERVER :::\n`);
  console.info('Server run has failed\n');
  console.log(`=>Error :: ${ error }`)
}
