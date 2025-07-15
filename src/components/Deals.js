'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Deals({ productData,affURL }) {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const lines = productData.split('\n').filter(Boolean);
    const parsed = [];
    let current = null;

    lines.forEach((line) => {
      if (line.includes('$')) {
        const [rawTitle, rawPrice] = line.split(/[-–]/);
        const title = rawTitle.trim();
        const price = rawPrice?.match(/\$[\d.]+/)?.[0] ?? '';
        current = { title, price, description: '' };
        parsed.push(current);
      } else if (current) {
        current.description += line.trim() + ' ';
      }
      current.affURL=affURL;
    });

    setDeals(parsed);
  }, [productData]);

  return (
    <div className="deal-list">
      {deals.map((deal, index) => (
        <DealBox key={index} {...deal} />
      ))}
    </div>
  );
}

function DealBox({ title, price, description,affURL }) {
  const [imageUrl, setImageUrl] = useState('/images/placeholder.png');

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await fetch(`/api/image?q=${encodeURIComponent(title)}`);
        const data = await res.json();
        if (res.ok && data.image) setImageUrl(data.image);
      } catch (err) {
        console.error(`Failed to fetch image for ${title}`, err);
      }
    }

    fetchImage();
  }, [title]);

  return (
    <div className="deal-box">
      <Image src={imageUrl} height={100} width={100} alt={title} />
      <div className="deal-content">
        <div className="deal-title">{title}</div>
        <div className="deal-desc">{description.trim()}</div>
        <div className="deal-price">Price: <span>{price}</span></div>
        <a href={`${affURL}`}  target='_blank' className="deal-button">GET DEAL</a>
      </div>
    </div>
  );
}
