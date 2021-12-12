# afix

[![npm version](https://img.shields.io/npm/v/afix?style=flat&colorA=4488FF&colorB=4488FF)](https://www.npmjs.com/package/afix) [![test coverage](https://img.shields.io/coveralls/github/sure-thing/afix?style=flat&colorA=223355&colorB=223355)](https://coveralls.io/github/sure-thing/afix?branch=main) [![npm bundle size](https://badgen.net/bundlephobia/min/afix?color=223355&labelColor=223355)](https://bundlephobia.com/result?p=afix)

Tiny fixture utility.

```
npm i afix
```

## Usage

Afix creates directories and files within `__dirname` of the calling file. Be
sure to call `cleanup()` at the end of each test to remove all your fixtures.

```typescript
import fs from 'fs'
import assert from 'assert'
import baretest from 'baretest'
import { afix } from 'afix'

const test = baretest('afix')

test('afix', async () => {
  const fixture = afix({
    config: ['config.js', 'export default { foo: true }'],
  })

  assert(fs.existsSync(fixture.files.config.path))
  assert.equal(fs.readFileSync(fixture.files.config.path), fixture.files.config.content)

  fixture.cleanup()
})
```

## License

MIT License © [Sure Thing](https://github.com/sure-thing)
