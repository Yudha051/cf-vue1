import { Hono } from "hono";

const app = new Hono();

app.get("/api", (c) => {
  return c.text("hello");
});

app.get("/api/users", async (c) => {
  const { results } = await c.env.DB.prepare(
    "SELECT * FROM users"
  ).all();

  return c.json(results);
});

// SPA fallback
app.get("*", async (c) => {
  const req = c.req.raw;
  const asset = await c.env.ASSETS.fetch(req);

  if (asset.status !== 404) {
    return asset;
  }

  const url = new URL(req.url);
  return c.env.ASSETS.fetch(
    new Request(`${url.origin}/index.html`, req)
  );
});

export default app;