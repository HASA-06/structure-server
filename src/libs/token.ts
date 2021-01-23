import jsonwebtoken from 'jsonwebtoken'

interface Payload {
  userId: string;
}

interface Option {
  expiresIn: string;
  issuer: string;
  subject: string;
}

class Token {
  public createAccessToken = async (payload: Payload) => {
    const option: Option = {
      expiresIn: '30m',
      issuer: 'structure-server',
      subject: 'accessToken'
    }

    try {
      return jsonwebtoken.sign(payload, process.env.TOKEN__SECRET_KEY as string, option);
    } catch (error) {
      throw error;
    }
  }

  public createRefreshToken = async (payload: Payload) => {
    const option: Option = {
      expiresIn: '60d',
      issuer: 'structure-server',
      subject: 'refreshToken'
    }

    try {
      return jsonwebtoken.sign(payload, process.env.TOKEN__SECRET_KEY as string, option);
    } catch (error) {
      throw error;
    }
  }

  public decodeToken = async (token: string) => {
    try {
      return jsonwebtoken.verify(token, process.env.TOKEN__SECRET_KEY as string);
    } catch (error) {
      throw error;
    }
  }
}

export {
  Token,
  Payload,
  Option
}