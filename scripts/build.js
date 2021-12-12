const path = require('path')

const pkg = require('../package.json')

require('esbuild').buildSync({
  entryPoints: ['lib/index.ts'],
  outdir: path.join(__dirname, '../'),
  bundle: false,
  minify: true,
  platform: 'node',
  target: 'node12',
  logLevel: 'info',
})
