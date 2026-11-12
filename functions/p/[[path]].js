// Same-origin proxy for Plausible (cookieless statistics on stats.phetast.nu).
//   GET  /p/s.js   → the site's Plausible script (cached for an hour)
//   POST /p/event  → Plausible's event endpoint
// Serving both from meshcore-jkp.se keeps ad blockers and CSP from dropping
// the tracker. The visitor's IP and User-Agent are passed on because
// Plausible builds its daily-salted visitor hash from them; it stores neither.
// PROXY_KEY (a Pages secret) marks the request as ours so the stats server
// trusts X-Forwarded-For from it and from nothing else. stats.phetast.nu sits
// behind Cloudflare Access; a service token (CF_ACCESS_CLIENT_ID/_SECRET,
// Pages secrets) opens exactly these two paths and nothing else.

const UPSTREAM = "https://stats.phetast.nu";
const SCRIPT = "/js/pa-GTM3LiaiEJka-hxir3Dot.js";

function accessHeaders(env) {
  const h = {};
  if (env.CF_ACCESS_CLIENT_ID) h["CF-Access-Client-Id"] = env.CF_ACCESS_CLIENT_ID;
  if (env.CF_ACCESS_CLIENT_SECRET) h["CF-Access-Client-Secret"] = env.CF_ACCESS_CLIENT_SECRET;
  return h;
}

export async function onRequest({ request, params, env }) {
  const path = (params.path || []).join("/");

  if (path === "s.js" && request.method === "GET") {
    const res = await fetch(UPSTREAM + SCRIPT, { headers: accessHeaders(env), cf: { cacheTtl: 3600, cacheEverything: true } });
    return new Response(res.body, {
      status: res.status,
      headers: { "Content-Type": "application/javascript; charset=utf-8", "Cache-Control": "public, max-age=3600" },
    });
  }

  if (path === "event" && request.method === "POST") {
    const headers = new Headers({
      ...accessHeaders(env),
      "Content-Type": request.headers.get("Content-Type") || "text/plain",
      "User-Agent": request.headers.get("User-Agent") || "",
      "X-Forwarded-For": request.headers.get("CF-Connecting-IP") || "",
    });
    if (env.PROXY_KEY) headers.set("X-Proxy-Key", env.PROXY_KEY);
    const res = await fetch(UPSTREAM + "/api/event", { method: "POST", headers, body: request.body });
    return new Response(res.body, { status: res.status, headers: { "Cache-Control": "no-store" } });
  }

  return new Response("Not found", { status: 404 });
}
