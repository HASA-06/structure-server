import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaBody from 'koa-body';
import KoaCors from 'koa-cors';
import KoaStatic from 'koa-static';
import KoaRange from 'koa-range';
import KoaLogger from 'koa-logger';

import api from 'apis';
import Environment from 'utils/environment';

class App {
  private app: Koa;
  private router: KoaRouter;
  private PORT_NUMBER: number;
  private HOST_ADDRESS: string;

  constructor() {
    Environment;

    this.app = new Koa();
    this.router = new KoaRouter();
    this.PORT_NUMBER = parseInt(process.env.SERVER__PORT_NUMBER as string);
    this.HOST_ADDRESS = process.env.SERVER__HOST_ADDRESS as string;
    
    this.setMiddlewares();
  }

  private setCors(): void {
    switch (process.env.NODE_ENV) {
      case 'development':
        this.app.use(KoaCors({
          origin: 'url',
          methods: ['GET', 'PUT', 'POST', 'DELETE'],
          headers: ['Content-Type', 'Authorization']
        }));
        break;
      case 'production':
        this.app.use(KoaCors({
          origin: 'url',
          methods: ['GET', 'PUT', 'POST', 'DELETE'],
          headers: ['Content-Type', 'Authorization']
        }));
        return;
      default:
        this.app.use(KoaCors());
        return;
    }
  }

  private setSubURL(): void {
    this.router.use('/api', api.routes());
  }

  private setMiddlewares(): void {
    this.setSubURL();
    this.app.use(KoaRange);
    this.app.use(KoaLogger());
    this.app.use(KoaBody({ multipart: true }));
    this.app.use(KoaStatic('public'));
    this.setCors();
    this.app.use(this.router.routes())
    this.app.use(this.router.allowedMethods());
  }

  public startServer(): void {
    this.app.listen(3000, () => {
      console.log(`::: MISTER MEAT SERVER:::\n`);
      console.log('- Server is running\n');
      console.log(`Host ${ this.HOST_ADDRESS }`);
      console.log(`Port ${ this.PORT_NUMBER }`);
      console.log(`Mode ${ process.env.NODE_ENV }\n`);
      console.log(`=> You can connecting with below urls\n`);
      console.log(`\nhttp://${ this.HOST_ADDRESS }:${ this.PORT_NUMBER }\nhttp://localhost:${ this.PORT_NUMBER }`);
    });
  }
}

export default App;