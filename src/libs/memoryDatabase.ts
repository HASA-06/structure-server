import AsyncRedis from 'async-redis';

class MemoryDatabase {
  private redisClient: any;

  constructor() {
    this.redisClient = AsyncRedis.createClient({
      host: process.env.REDIS__HOST as string
    });

    this.redisClient.on('error', (error: string) => {
      throw error;
    });

    this.redisClient.on('connect', () => {
      console.log(`::: REDIS CLIENT :::\n`);
      console.log(`=> Host is ${ process.env.REDIS__HOST }\n`);
    });
  }

  public saveSignOutToken = async (userId: number, accessToken: string) => {
    try {
      await this.redisClient.set(userId.toString(), accessToken);
      await this.redisClient.expire(userId.toString(), 60 * 30);
    } catch (error) {
      throw error;
    }
  }

  public checkSignOutToken = async (userId: number, accessToken: string) => {
    try {
      return accessToken === await this.redisClient.get(userId.toString());
    } catch (error) {
      throw error;
    }
  }
}

export default MemoryDatabase;