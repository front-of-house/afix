const fs = require('fs')
const path = require('path')
const { premove } = require('premove')
const { customAlphabet } = require('nanoid')

type Filepath = string
type Content = string
type Fixtures = { [alias: string]: [Filepath, Content] }
type Files = { [alias: string]: { path: string; content: string } }

function afix(fixtures: Fixtures) {
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

module.exports = { afix }
