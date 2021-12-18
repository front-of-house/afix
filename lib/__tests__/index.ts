import fs from 'fs'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { afix } from '../'

test('afix', async () => {
  const fixture = afix({
    a: ['a.js', 'export default "foo"'],
  })

  assert.ok(fs.existsSync(fixture.root))
  assert.ok(fs.existsSync(fixture.files.a.path))
  assert.equal(fs.readFileSync(fixture.files.a.path, 'utf8'), fixture.files.a.content)

  await fixture.cleanup()

  assert.not.ok(fs.existsSync(fixture.root))
})

test.run()
