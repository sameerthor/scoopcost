// pages/api/gift-store-slugs.js (or .ts)

export default async function handler(req, res) {
  const { title, store_name } = req.query;

  if (!title && !store_name) {
    return res.status(400).json({ detail: 'Missing title or store_name' });
  }

  const params = new URLSearchParams();
  if (title) params.append('title', title);
  if (store_name) params.append('store_name', store_name);

  try {
    const djangoRes = await fetch(`https://admin.scoopcost.com/gift-store-slugs/?${params.toString()}`, {
      headers: {
        'x-api-key': process.env.SECRET_KEY,
      },
    });

    const data = await djangoRes.json();
    return res.status(djangoRes.status).json(data);
  } catch (err) {
    console.error('Proxy error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
