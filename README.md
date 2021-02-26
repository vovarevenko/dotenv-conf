# dotenv-conf

## Installation

Install with [yarn](https://yarnpkg.com):

```bash
$ yarn add dotenv-conf
```

Install with [npm](https://npmjs.com):

```bash
$ npm install dotenv-conf
```

## Usage

Create `.env` file:

```dosini
ENV=development

HTTP_HOST=127.0.0.1
HTTP_PORT=8080

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

Create `config.ts` file:

```typescript
import { parse } from 'dotenv-conf'

const data = parse(`${__dirname}/.env`)

export const env = data.ENV
export const isDev = env === 'development'
export const isProd = env === 'production'

export const http = {
  host: data.HTTP_HOST || '127.0.0.1',
  port: parseInt(data.HTTP_PORT) || 8080,
}

export const redis = {
  host: data.REDIS_HOST || '127.0.0.1',
  port: parseInt(data.REDIS_PORT) || 6379,
}
```

Use `config` module in any file of your project:

```typescript
import { env, isDev, http } from './config'

console.log(env) // string: development
console.log(isDev) // boolean: true

console.log(http.host) // string: 127.0.0.1
console.log(http.port) // number: 8080
```

```typescript
import * as redis from 'redis'
import { redis as cfg } from './config'

redis.createClient(cfg)
```
