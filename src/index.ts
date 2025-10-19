import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Galang!')
})

app.get('/budi', (c) => {
  return c.text('Hello Budi!')
})

app.get('/roshan', (c) => {
  return c.text('Roshan Spawn!')
})

app.get('/aegis',(c) => {
  return c.text('Aegis Stolen')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
