# afix

[![npm version](https://img.shields.io/npm/v/afix?style=flat&colorA=4488FF&colorB=4488FF)](https://www.npmjs.com/package/afix) [![test coverage](https://img.shields.io/coveralls/github/sure-thing/afix?style=flat&colorA=223355&colorB=223355)](https://coveralls.io/github/sure-thing/afix?branch=main) [![npm bundle size](https://badgen.net/bundlephobia/min/afix?color=223355&labelColor=223355)](https://bundlephobia.com/result?p=afix)

Tiny fixture utility.

```
npm i afix
```

## Usage

Each call to `afix()` creates a new directory in `process.cwd()` and writes
files within the new directory.

```typescript
import fs from 'fs'
import { afix } from 'afix'

const fixture = afix({
  config: ['config.js', 'export default { foo: true }'],
  nested: ['some/path/file.js'],
})
const dir = fixture.mkdir('/some/dir')

fs.existsSync(fixture.root) // true

fs.existsSync(fixture.files.config.path) // true
assert.equal(fs.readFileSync(fixture.files.config.path, 'utf8'), fixture.files.config.content)

fs.existsSync(fixture.files.nested.path) // true
assert.equal(fs.readFileSync(fixture.files.nested.path, 'utf8'), fixture.files.nested.content)

fs.existsSync(dir) // true

// remove fixture.root
fixture.cleanup()

fs.existsSync(fixture.root) // false
```

Plus, fixtures are automaticaly removed when the process exits.

## License

MIT License © [Sure Thing](https://github.com/sure-thing)
