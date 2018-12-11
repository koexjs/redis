# redis

[![NPM version](https://img.shields.io/npm/v/@koex/redis.svg?style=flat)](https://www.npmjs.com/package/@koex/redis)
[![Coverage Status](https://img.shields.io/coveralls/koexjs/redis.svg?style=flat)](https://coveralls.io/r/koexjs/redis)
[![Dependencies](https://img.shields.io/david/koexjs/redis.svg)](https://github.com/koexjs/redis)
[![Build Status](https://travis-ci.com/koexjs/redis.svg?branch=master)](https://travis-ci.com/koexjs/redis)
![license](https://img.shields.io/github/license/koexjs/redis.svg)
[![issues](https://img.shields.io/github/issues/koexjs/redis.svg)](https://github.com/koexjs/redis/issues)

> redis for koa extend, based on ioredis.

### Install

```
$ npm install @koex/redis
```

### Usage

```javascript
// See more in test
import redis from '@koex/redis';

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