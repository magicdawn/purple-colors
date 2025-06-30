import edge from 'edge.js'
import fse from 'fs-extra'
import { PURPLE_COLORS } from 'purple-colors'

const html = await edge.render(`${import.meta.dirname}/index.html.edge`, { PURPLE_COLORS })
fse.outputFileSync(`${import.meta.dirname}/dist/index.html`, html)
