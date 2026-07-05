import { Hono } from 'hono';

const app = new Hono();

app.get('/api', (c) => {
  return c.text('hello');
})

app.get('/api/users', async (c) => {
  let { results } = await c.env.DB.prepare("SELECT * FROM users").all()
  return c.json(results)
})

// SPA fallback: try to serve the requested asset, and if it 404s return index.html
app.get('*', async (c) => {
  const req = c.req.raw;
  // Try to fetch the exact asset first
  const assetResponse = await c.env.ASSETS.fetch(req);
  if (assetResponse.status !== 404) return assetResponse;

  // If asset not found, return index.html so the client-side router can handle the route
  const url = new URL(req.url);
  const indexRequest = new Request(`${url.origin}/index.html`, req);
  return c.env.ASSETS.fetch(indexRequest);
});

export default {
  async fetch(request, env) {
    const { results } = await env.DB.prepare(
      "SELECT * FROM users"
    ).all();

    return Response.json(results);
  }
}

export default app;