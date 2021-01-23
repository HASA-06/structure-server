import dotenv from 'dotenv';
import path from 'path';

class Environment {
  constructor() {
    switch (process.env.NODE_ENV) {
      case 'development':
        dotenv.config({ path: path.resolve().concat('/.env.development') });
        return;
      case 'production':
        dotenv.config({ path: path.resolve().concat('/.env.production') });
        return;
      default:
        dotenv.config({ path: path.resolve().concat('/.env.local') });
        return;
    }
  }
}

export default new Environment();