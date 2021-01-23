import KoaRouter from 'koa-router';

import BoardCtrl from './board.ctrl';

class Board {
  private router: KoaRouter;

  constructor() {
    this.router = new KoaRouter();

    this.setAPI();
  }

  private setAPI(): void {
    this.router.post('/create', BoardCtrl.create);
    this.router.get('/read', BoardCtrl.read);
    this.router.post('/update', BoardCtrl.update);
    this.router.post('/delete', BoardCtrl.delete);
    this.router.get('/list', BoardCtrl.list);
  }

  public getRouter(): KoaRouter {
    return this.router;
  }
}

export default new Board().getRouter();