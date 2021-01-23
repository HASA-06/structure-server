import { Context } from "koa";
import ms from 'ms';

import { Payload, Option, Token } from 'libs/token';

const tokenLib = new Token();

class TokenCtrl {
  public refresh = async(ctx: Context) => {
    const {
      refreshToken
    } = ctx.request.body;

    try {
      const decodedRefreshToken: any = await tokenLib.decodeToken(refreshToken);
      const remain = decodedRefreshToken.exp * 1000 - new Date().getTime();

      if(decodedRefreshToken.sub !== 'refreshToken') {
        ctx.status = 403;
        ctx.body = {
          message: 'Fail',
          detail: 'Token is incorrect'
        };

        return;
      }

      const payload: Payload = {
        userId: decodedRefreshToken.userId
      };
      const newAccessToken = await tokenLib.createAccessToken(payload);

      if(remain <= ms('30days')) {
        const newRefreshToken = await tokenLib.createRefreshToken(payload);

        ctx.status = 200;
        ctx.body = {
            message: 'Success',
            data: {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            },
        };

        return;
      }

      ctx.status = 200;
      ctx.body = {
        message: 'Success',
        data: {
          accessToken: newAccessToken
        }
      };

      return;
    } catch (error) {
      let status = 400;
      let message = '';

      switch(error.message) {
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
            message,
        };

        return;
    }
  }
}

export default new TokenCtrl();