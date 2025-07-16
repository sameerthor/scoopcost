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
        const [rawTitle, rawPrice,image] = line.split(' - ');
        console.log(image)
        const title = rawTitle.trim();
        const price = rawPrice?.match(/\$[\d.]+/)?.[0] ?? '';
        current = { title, price,image, description: '' };
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

function DealBox({ title, price,image, description,affURL }) {
  const [imageUrl, setImageUrl] = useState(image);
console.log(image)

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
