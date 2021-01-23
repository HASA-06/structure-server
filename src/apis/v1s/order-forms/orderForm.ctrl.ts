import { Context } from 'koa';

class OrderFormCtrl {
  public test = async (ctx: Context) => {
    ctx.status = 200;
    ctx.body = {
      message: 'Success'
    };
  };
}

export default new OrderFormCtrl;