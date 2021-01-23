import crypto from 'crypto';

interface EncryptedResult {
  salt: string;
  encryptedPassword: string;
}

class Password {
  public encryption = async (originalPassword: string) => {
    try {
      const salt = crypto.randomFillSync(Buffer.alloc(64)).toString('hex');
      const encryptedPassword = crypto.scryptSync(originalPassword, salt, 64).toString('hex');

      const encryptedResult: EncryptedResult = {
        salt,
        encryptedPassword
      };

      return encryptedResult;
    } catch (error) {
      throw error;
    }
  }

  public check = async (salt: string, originalPassword: string, encryptedPassword: string) => {
    try {
      return encryptedPassword === crypto.scryptSync(originalPassword, salt, 64).toString('hex');
    } catch (error) {
      throw error;
    }
  }
}

export {
  EncryptedResult,
  Password
}