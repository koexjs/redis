# koa-redis

[![NPM version](https://img.shields.io/npm/v/@zcorky/koa-redis.svg?style=flat)](https://www.npmjs.com/package/@zcorky/koa-redis)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/koa-redis.svg?style=flat)](https://coveralls.io/r/zcorky/koa-redis)
[![Dependencies](https://david-dm.org/@zcorky/koa-redis/status.svg)](https://david-dm.org/@zcorky/koa-redis)
[![Build Status](https://travis-ci.com/zcorky/koa-redis.svg?branch=master)](https://travis-ci.com/zcorky/koa-redis)
![license](https://img.shields.io/github/license/zcorky/koa-redis.svg)
[![issues](https://img.shields.io/github/issues/zcorky/koa-redis.svg)](https://github.com/zcorky/koa-redis/issues)

> helmet for Koa, wrapper with helmet.

### Install

```
$ npm install @zcorky/koa-redis
```

### Usage

```javascript
// See more in test
import redis from '@zcorky/koa-redis';

import * as Koa from 'koa';
const app = new Koa();

app.use(redis());
app.use(redis({
  port: 6379,          // Redis port
  host: '127.0.0.1',   // Redis host
  family: 4,           // 4 (IPv4) or 6 (IPv6)
  password: 'auth',
  db: 0
}));

app.use(ctx => {
  ctx.body = 'Hello, World!';
});

app.listen(8000, '0.0.0.0', () => {
  console.log('koa server start at port: 8000');
});
```

### Related
* [ioredis](https://github.com/luin/ioredis)
* [egg-redis](https://github.com/eggjs/egg-redis)