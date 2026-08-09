// api/track.js
// Vercel serverless function — tracks unique visitors using Upstash Redis
// Uses IP + User-Agent hash as unique visitor fingerprint

export default async function handler(req, res) {
  // Allow only GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;

    if (!url || !token) {
      return res.status(500).json({ error: "Redis not configured" });
    }

    // Build visitor fingerprint from IP + User-Agent
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.headers["x-real-ip"] ||
      req.socket?.remoteAddress ||
      "unknown";

    const userAgent = req.headers["user-agent"] || "unknown";
    const raw = `${ip}::${userAgent}`;

    // Simple hash function (no crypto module needed)
    let hash = 0;
    for (let i = 0; i < raw.length; i++) {
      const char = raw.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    const visitorId = Math.abs(hash).toString(36);

    // Check if this visitor has been seen before (expire after 24h)
    const isNewRes = await fetch(`${url}/setnx/visitors:${visitorId}/1`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const isNewData = await isNewRes.json();
    const isNew = isNewData.result === 1; // 1 = key was new, 0 = already existed

    // Set 24h expiry on the visitor key so they count again after a day
    if (isNew) {
      await fetch(`${url}/expire/visitors:${visitorId}/86400`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Increment the total unique view counter
      await fetch(`${url}/incr/portfolio:views`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }

    // Get current total count
    const countRes = await fetch(`${url}/get/portfolio:views`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const countData = await countRes.json();
    const count = parseInt(countData.result) || 0;

    // Cache: don't cache this response
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({ count, isNew });

  } catch (err) {
    console.error("Track error:", err);
    return res.status(500).json({ error: "Internal error", count: 0 });
  }
}