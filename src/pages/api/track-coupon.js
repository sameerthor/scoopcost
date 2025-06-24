export default async function handler(req, res) {
  const { couponComponentId, storeSlug } = req.body;

  try {
    const response = await fetch(
      `https://admin.scoopcost.com/stores/${storeSlug}/track-coupon-usage/${couponComponentId}/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.SECRET_API_KEY, // safe: not exposed to frontend
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Server-side tracking failed:', error);
    res.status(500).json({ error: 'Tracking failed' });
  }
}
