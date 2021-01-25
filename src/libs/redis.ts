import asyncRedis from 'async-redis';

const redis = asyncRedis.createClient({
  host: process.env.REDIS__HOST as string
}).on('error', (error: string) => {
  throw error;
});

const saveSignOutToken = async (userId: number, accessToken: string) => {
  try {
    redis.set(userId.toString(), accessToken);
    redis.expire(userId.toString(), 60 * 30);
  } catch (error) {
    throw error;
  }
}

const checkSignOutToken = async (userId: number) => {
  try {
    return redis.get(userId.toString());
  } catch (error) {
    throw error;
  }
}

export {
  redis,
  saveSignOutToken,
  checkSignOutToken
};