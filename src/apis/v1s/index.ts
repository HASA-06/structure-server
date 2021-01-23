import KoaRouter from 'koa-router';

import User from './users';
import Board from './boards';

class V1 {
  private router: KoaRouter;

  constructor() {
    this.router = new KoaRouter();

    this.setSubURL();
  }

  private setSubURL(): void {
    this.router.use('/user', User.routes());
    this.router.use('/board', Board.routes());
  }

  public getRouter(): KoaRouter {
    return this.router;
  }
}

export default new V1().getRouter();