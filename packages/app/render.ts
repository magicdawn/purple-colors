import edge from 'edge.js'
import fse from 'fs-extra'
import { PURPLE_COLORS } from 'purple-colors'

async function renderFile() {
  const html = await edge.render(`${import.meta.dirname}/index.html.edge`, { PURPLE_COLORS })
  fse.outputFileSync(`${import.meta.dirname}/dist/index.html`, html)
  console.log('[rendered]:', `${import.meta.dirname}/dist/index.html`)
}

function watch() {
  console.log('[watching]:', `${import.meta.dirname}/index.html.edge`)
  fse.watchFile(`${import.meta.dirname}/index.html.edge`, () => {
    renderFile()
  })
}

await renderFile()
if (process.argv.some((arg) => arg === '-w' || arg === '--watch')) {
  watch()
}
