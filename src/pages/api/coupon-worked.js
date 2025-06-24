export default async function handler(req, res) {
  const { couponComponentId, is_worked, storeSlug } = req.body;

  try {
    const response = await fetch(
      `https://admin.scoopcost.com/stores/${storeSlug}/coupon-worked/${couponComponentId}/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.SECRET_KEY, // safe, not exposed
        },
        body: JSON.stringify({ is_worked }),
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Server tracking failed:', error);
    res.status(500).json({ error: 'Tracking failed' });
  }
}
