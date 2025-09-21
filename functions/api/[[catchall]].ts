import { Hono } from 'hono'
import { getCookie } from 'hono/cookie'
import { handle } from 'hono/cloudflare-pages'

// Bindings 型（Pages Secrets を使うならここに追加）
type Bindings = {
  // JWT_SECRET: string
}

const app = new Hono<{ Bindings: Bindings }>()

// API はキャッシュ禁止（CDN/ブラウザとも）
const noCache = (res: Response) => {
  res.headers.set('Cache-Control', 'no-store')
  res.headers.set('Pragma', 'no-cache')
  res.headers.set('Expires', '0')
  return res
}

app.use('*', async (c, next) => {
  await next();
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  c.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
});

app.options('*', (c) => c.body(null, 204));

app.get('/api/hello', (c) =>
  noCache(c.json({ ok: true, now: new Date().toISOString() }))
)

app.get('/api/me', (c) => {
  const uid = getCookie(c, 'session_uid') // ← これ！
  if (!uid) return c.json({ auth: false }, 401)
  return c.json({ auth: true, uid })
})

// Pages Functions エクスポート（envを渡す形が安全）
export const onRequest = handle(app)
