import fs from 'fs'
import path from 'path'
import { premove } from 'premove'
import { customAlphabet } from 'nanoid'

export type Filepath = string
export type Content = string
export type Fixtures = { [alias: string]: [Filepath, Content] }
export type Files = { [alias: string]: { path: string; content: string } }

export function afix(fixtures: Fixtures) {
  const files: Files = {}
  const root = path.join(__dirname, `./.afix-${customAlphabet('1234567890abcdef', 10)()}`)

  fs.mkdirSync(root)

  for (const alias of Object.keys(fixtures)) {
    files[alias] = {
      path: path.join(root, fixtures[alias][0]),
      content: fixtures[alias][1],
    }
    fs.writeFileSync(files[alias].path, files[alias].content, 'utf8')
  }

  return {
    root,
    files,
    cleanup() {
      return premove(root)
    },
  }
}