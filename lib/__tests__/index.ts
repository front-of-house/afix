import fs from 'fs'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { afix } from '../'

test('afix', async () => {
  const fixture = afix({
    a: ['a.js', 'export default "foo"'],
  })

  assert.ok(fs.existsSync(fixture.files.a.path))

  fixture.cleanup()
})

test.run()
