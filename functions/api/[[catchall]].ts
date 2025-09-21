import { Hono } from 'hono'
import { getCookie } from 'hono/cookie'
import { handle } from 'hono/cloudflare-pages'
import { cors } from 'hono/cors'

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
/*
app.use('*', async (c, next) => {
  console.log(`middleware ${c.req.method} ${c.req.url}`);

  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  c.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  await next();
});
*/
app.use('/*', cors({
  origin: (origin) => origin,          // 来たOriginをそのまま返す
  credentials: true,                   // 資格情報（Cookie等）を許可
  allowMethods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowHeaders: ['Content-Type','Authorization'],
  exposeHeaders: [],
  maxAge: 600,
}))

app.options('*', (c) => c.body(null, 204));

app.get('/api/hello', (c) =>
  noCache(c.json({ ok: true, now: new Date().toISOString() }))
)

app.get('/api/me', (c) => {
  const uid = getCookie(c, 'session_uid')
  if (!uid) {
    return c.json({ auth: false }, 401)
  } else {
    return c.json({ auth: true, uid })
  }
})

// Pages Functions エクスポート（envを渡す形が安全）
export const onRequest = handle(app)
