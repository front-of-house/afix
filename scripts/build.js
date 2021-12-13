const path = require('path')

require('esbuild').buildSync({
  entryPoints: ['lib/index.ts'],
  outdir: path.join(__dirname, '../'),
  bundle: false,
  minify: true,
  platform: 'node',
  target: 'node10',
  logLevel: 'info',
})
