import ConsoleStamp from 'console-stamp';

ConsoleStamp(console, {
  pattern: 'yyyy/mm/dd HH:MM:ss'
});

import App from './app';
import database from 'libs/database';
import ObjectRelationMapping from 'models/index';

try {
  (async () => {
    const app = new App();

    const orm = new ObjectRelationMapping(database);

    console.log('::: STRUCTURE SERVER DATABASE :::\n');
    console.log('- Model list\n')
    await orm.setSubModels();
    console.log('=> Models are injected\n');

    console.log('- Connection test\n');
    await database.sync();
    console.log('=> Database has connected\n');

    app.startServer();
  })();
} catch (error) {
  console.log(`::: STRUCTURE SERVER :::\n`);
  console.log('Server run has failed\n');
  console.log(`=>Error :: ${ error }`)
}
