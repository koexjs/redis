import { Context } from 'koa';
import * as ioredis from 'ioredis';

declare module 'koa' {
  export interface Context {
    redis: ioredis.Redis;
  }
}

export default (options?: ioredis.RedisOptions) => {
  const redis = new ioredis(options);

  return async function koexRedis(ctx: Context, next: () => Promise<void>) {
    if (!ctx.redis) {
      ctx.redis = redis;
    }

    await next();
  };
};
