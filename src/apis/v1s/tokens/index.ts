import KoaRouter from 'koa-router';

import TokenCtrl from './token.ctrl';

class Token {
  private router: KoaRouter;

  constructor() {
    this.router = new KoaRouter();

    this.setAPI();
  }

  private setAPI(): void {
    this.router.post('/refresh', TokenCtrl.refresh);
  }

  public getRouter(): KoaRouter {
    return this.router;
  }
}

export default new Token().getRouter();