import KoaRouter from 'koa-router';

import UserCtrl from './user.ctrl';

class User {
  private router: KoaRouter;

  constructor() {
    this.router = new KoaRouter();

    this.setAPI();
  }

  private setAPI(): void {
    this.router.post('/sign-up', UserCtrl.signUp);
    this.router.post('/sign-in', UserCtrl.signIn);
    this.router.post('/sign-out', UserCtrl.signOut);
  }

  public getRouter(): KoaRouter {
    return this.router;
  }
}

export default new User().getRouter();