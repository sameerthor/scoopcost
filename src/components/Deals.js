'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Deals({ productData, affURL }) {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const lines = productData
      .replace(/\r\n/g, '\n')
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean);

    const parsed = [];
    let current = null;

    lines.forEach((line) => {
      // Match price like $95.00 or $98
      const priceMatch = line.match(/\$[\d,.]+/);

      // Match image URL ending with .jpg, .jpeg, .png, .webp
      const imageMatch = line.match(/https?:\/\/[^\s]+?\.(?:jpg|jpeg|png|webp)/i);

      // Start a new product only if BOTH price and image are present in the line
      if (priceMatch && imageMatch) {
        const price = priceMatch[0];
        const image = decodeURIComponent(imageMatch[0]).replace(/[\r\n]/g, '');
        
        // Remove image and price from title line
        const title = line.split('-')[0]

        current = {
          title,
          price,
          image,
          description: '',
          affURL,
        };

        parsed.push(current);
      } else if (current) {
        // Add any following lines as description
        current.description += line + ' ';
      }
    });

    setDeals(parsed);
  }, [productData, affURL]);

  return (
    <div className="deal-list">
      {deals.map((deal, index) => (
        <DealBox key={index} {...deal} />
      ))}
    </div>
  );
}

function DealBox({ title, price, image, description, affURL }) {
  const [imageUrl, setImageUrl] = useState(image);

  return (
    <div className="deal-box">
      <Image
        src={imageUrl}
        height={100}
        width={100}
        alt={title}
        onError={() => setImageUrl('/fallback.jpg')}
      />
      <div className="deal-content">
        <div className="deal-title">{title}</div>
        <div className="deal-desc">{description.trim()}</div>
        <div className="deal-price">Price: <span>{price}</span></div>
        <a
          href={affURL}
          target="_blank"
          rel="noopener noreferrer"
          className="deal-button"
        >
          GET DEAL
        </a>
      </div>
    </div>
  );
}
