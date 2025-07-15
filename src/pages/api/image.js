import gis from 'async-g-i-s';

export default async function handler(req, res) {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Missing query' });
  }

  try {
    const results = await gis(query);
    if (results.length === 0) {
      return res.status(404).json({ error: 'No images found' });
    }

    res.status(200).json({ image: results[0].url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch image' });
  }
}
