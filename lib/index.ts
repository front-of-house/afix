import fs from 'fs'
import path from 'path'
import { premove } from 'premove/sync'
import { mkdir } from 'mk-dirs/sync'
import { customAlphabet } from 'nanoid'
import goodbye from 'graceful-goodbye'

export type Filepath = string
export type Content = string
export type Fixtures = { [alias: string]: [Filepath, Content] }
export type Files = { [alias: string]: { path: string; content: string } }

export function afix(fixtures: Fixtures) {
  const files: Files = {}
  const root = path.join(process.cwd(), `./.afix-${customAlphabet('1234567890abcdef', 10)()}`)

  mkdir(root)

  for (const alias of Object.keys(fixtures)) {
    files[alias] = {
      path: path.join(root, fixtures[alias][0]),
      content: fixtures[alias][1],
    }
    mkdir(path.dirname(files[alias].path))
    fs.writeFileSync(files[alias].path, files[alias].content, 'utf8')
  }

  goodbye(() => premove(root))

  return {
    root,
    files,
    cleanup() {
      return premove(root)
    },
  }
}
