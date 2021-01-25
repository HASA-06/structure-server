import KoaRouter from 'koa-router';

import User from './users';
import Board from './boards';
import Token from './tokens';

import Authentication from 'middlewares/authentication';

const authentication = new Authentication();


class V1 {
  private router: KoaRouter;

  constructor() {
    this.router = new KoaRouter();

    this.setSubURL();
  }

  private setSubURL(): void {
    this.router.use('/user', User.routes());
    this.router.use('/board', authentication.check, Board.routes());
    this.router.use('/token', Token.routes());
  }

  public getRouter(): KoaRouter {
    return this.router;
  }
}

export default new V1().getRouter();