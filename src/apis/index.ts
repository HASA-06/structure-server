import { Context } from 'koa';
import KoaRouter from 'koa-router';

import V1 from './v1s';

class API {
  private router: KoaRouter;

  constructor() {
   this.router = new KoaRouter();

   this.setSubURL();
   this.setAPI();
  }

  private setSubURL(): void {
    this.router.use('/v1', V1.routes());
  }

  private setAPI(): void {
    this.router.get('/status', (ctx: Context) => {
      ctx.status = 200;
      ctx.body = {
        message: 'Success'
      };
    });
  }

  public getRouter(): KoaRouter {
    return this.router;
  }
}

export default new API().getRouter();