import { Context } from "koa";

import database from 'libraries/database';

class UserCtrl {
  public signUp = async (ctx: Context) => {
    try {
      const user = await database.model('user').findByPk(1);
      const admin = await database.model('admin').findByPk(1);
      console.log(admin);
      ctx.status = 200;
      ctx.body = {
        message: 'Success',
        data: {
          user: user,
          admin: admin
        }
      }
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        message: 'Fail',
        error: error
      };
    }
  }
}

export default new UserCtrl();