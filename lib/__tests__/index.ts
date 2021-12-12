import assert from 'assert'
import baretest from 'baretest'
import fs from 'fs'

import { afix } from '../'

const test = baretest('afix')

test('', async () => {
  const fixture = afix({
    a: ['a.js', 'export default "foo"'],
  })

  assert(fs.existsSync(fixture.files.a.path))

  fixture.cleanup()
})

!(async () => {
  await test.run()
})()
