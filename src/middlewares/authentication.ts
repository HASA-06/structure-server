import { Context, Next } from 'koa';

import { Token, Payload, Option } from 'libs/token';
import MemoryDatabase from 'libs/memoryDatabase';

const tokenLib = new Token();
const memoryDatabaseLib = new MemoryDatabase();

class Authentication {
  public check = async (ctx: Context, next: Next) => {
    let accessToken = ctx.headers.authorization;

    if(!accessToken) {
      ctx.status = 400;
      ctx.body = {
        message: 'Fail',
        detail: 'Not authorized'
      };

      return;
    }

    if(accessToken.startsWith('Bearer ')) {
      accessToken = accessToken.slice(7, accessToken.length);
    }

    try {
      const decodedAccessToken: any = await tokenLib.decodeToken(accessToken);

      if(await memoryDatabaseLib.checkSignOutToken(decodedAccessToken.userId, accessToken)) {
        ctx.status = 400;
        ctx.body = {
          message: 'Fail',
          detail: 'This token has sign-out'
        };

        return;
      }
    } catch (error) {
      let status = 400;
      let message = '';

      switch (error.message) {
        case 'jwt must be provided':
          status = 400;
          message = '토큰이 전송되지 않았습니다';
          break;
        case 'jwt malformed':
        case 'invalid token':
        case 'invalid signature':
          status = 401;
          message = '위조된 토큰입니다';
          break;
        case 'jwt expired':
          status = 410;
          message = '토큰이 만료되었습니다';
          break;
        default:
          status = 500;
          message = '다시 시도해 주세요';
          break;
      }

      if (status === 500) {
        throw error;
      }

      ctx.status = status;
      ctx.body = {
        message: 'Fail',
        detail: message
      };

      return;
    }

    await next();
  }
}

export default Authentication;