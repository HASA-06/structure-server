import KoaRouter from 'koa-router';

import OrderFormCtrl from './orderForm.Ctrl';

class OrderForm {
  private router: KoaRouter;

  constructor() {
    this.router = new KoaRouter();

    this.setAPI();
  }

  private setAPI(): void {
    this.router.get('/test', OrderFormCtrl.test);
  }

  public getRouter(): KoaRouter {
    return this.router;
  }
}

export default new OrderForm().getRouter();