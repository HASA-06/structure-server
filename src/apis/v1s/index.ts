import KoaRouter from 'koa-router';

import User from './users';
import OrderForm from './order-forms';

class V1 {
  private router: KoaRouter;

  constructor() {
    this.router = new KoaRouter();

    this.setSubURL();
  }

  private setSubURL(): void {
    this.router.use('/order-form', OrderForm.routes());
    this.router.use('/user', User.routes());
  }

  public getRouter(): KoaRouter {
    return this.router;
  }
}

export default new V1().getRouter();