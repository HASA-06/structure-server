import { Context } from "koa";

import database from 'libs/database';
import { Token, Payload, Option } from 'libs/token';

import Validate from 'utils/validate';

const databaseLib = database;
const tokenLib = new Token();

const validateUtil = new Validate();

class BoardCtrl {
  public create = async (ctx: Context) => {
    const {
      title,
      content
    } = ctx.request.body;

    const accessToken: string = ctx.headers.authorization;

    if(validateUtil.check('text', title) || validateUtil.check('text', content)) {
      ctx.status = 400;
      ctx.body = {
        message: 'Fail',
        detail: 'Not enough input'
      };

      return;
    }
    
    try {
      const decodedAccessToken: any = await tokenLib.decodeToken(accessToken);
    
      await databaseLib.model('board').create({
        title: title,
        content: content,
        userId: decodedAccessToken.userId
      });

      ctx.status = 200;
      ctx.body = {
        message: 'Success'
      };

      return;
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        message: 'Fail',
        detail: error
      };

      return;
    }
  }

  public read = async (ctx: Context) => {
    const {
      boardId
    } = ctx.params;

    try {
      const data = await databaseLib.model('board').findByPk(parseInt(boardId));

      if(!data) {
        ctx.status = 400;
        ctx.body = {
          message: 'Fail',
          detail: 'No board'
        };

        return;
      }

      ctx.status = 200;
      ctx.body = {
        message: 'Success',
        data: data
      };

      return;
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        message: 'Fail',
        detail: error
      };

      return;
    }
  }

  public update = async (ctx: Context) => {
    const {
      title,
      content
    } = ctx.request.body;

    const {
      boardId
    } = ctx.params;

    const accessToken: string = ctx.headers.authorization;

    if((validateUtil.check('text', title) || validateUtil.check('text', content))) {
      ctx.status = 400;
      ctx.body = {
        message: 'Fail',
        error: 'Not enough input'
      };

      return;
    }

    try {
      const decodedAccessToken: any = await tokenLib.decodeToken(accessToken);

      const data: any = await databaseLib.model('board').findByPk(boardId);

      if(!data) {
        ctx.status = 400;
        ctx.body = {
          message: 'Fail',
          detail: 'No board'
        };

        return;
      }

      if(data.dataValues.userId !== decodedAccessToken.userId) {
        ctx.status = 400;
        ctx.body = {
          message: 'Fail',
          detail: 'Not authorized'
        };

        return;
      }

      await databaseLib.model('board').update(
        {
          title : !validateUtil.check('text', title) ? title : data.dataValues.title,
          content: !validateUtil.check('text', content) ? content: data.dataValues.cotent
        },
        {
          where: {
            board_id: boardId
          }
        }
      );

      ctx.status = 200;
      ctx.body = {
        message: 'Success'
      };

      return;
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        message: 'Fail',
        detail: error
      };

      return;
    }
  }

  public delete = async (ctx: Context) => {
    const {
      boardId
    } = ctx.params;

    const accessToken: string = ctx.headers.authorization;

    try {
      const decodedAccessToken: any = await tokenLib.decodeToken(accessToken);

      const data: any = await databaseLib.model('board').findByPk(boardId);

      if(!data) {
        ctx.status = 400;
        ctx.body = {
          message: 'Fail',
          detail: 'No board'
        };

        return;
      }

      if (data.dataValues.userId !== decodedAccessToken.userId) {
        ctx.status = 400;
        ctx.body = {
          message: 'Fail',
          detail: 'Not authorized'
        };

        return;
      }

      await databaseLib.model('board').destroy({
        where: {
          board_id: boardId
        }
      });

      ctx.status = 200;
      ctx.body = {
        message: 'Success',
      };

      return;
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        message: 'Fail',
        detail: error
      };

      return;
    }
  }

  public list = async (ctx: Context) => {
    
  }
}

export default new BoardCtrl();