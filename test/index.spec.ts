import * as Koa from 'koa';
import * as request from 'supertest';
import 'should';

import redis from '../src';

describe('koa static', () => {

  it('it works with the default helmet call', async () => {
    const app = new Koa();
    app.use(redis());

    app.use((ctx) => {
      ctx.redis.should.not.null();
      ctx.body = 'Hello, World!';
    });

    const re = request(app.listen());

    await re
      .get('/')
      .expect(200, 'Hello, World!');

    await re
      .get('/')
      .expect(200, 'Hello, World!');

    await re
      .get('/hi')
      .expect(200, 'Hello, World!');
  });
});
