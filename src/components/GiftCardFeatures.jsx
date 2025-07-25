'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

// Matches for icon/image assignment
const featureMap = [
  {
    match: /Use Online/i,
    icon: '💻',
  },
  {
    match: /Valid up to/i,
    icon: '📅',
  },
  {
    match: /Can be Clubbed/i,
    icon: '🎁',
  },
  {
    match: /Non-refundable/i,
    image: '/images/non-refundable.svg',
  },
  {
    match: /Use Multiple Cards/i,
    icon: '💳',
  },
];

// Default icon if no match
const defaultIcon = '✨';

export default function GiftCardFeatures({ htmlString }) {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (!htmlString) return;

    const container = document.createElement('div');
    container.innerHTML = htmlString;
    const paragraphs = container.querySelectorAll('p');

    const parsed = [];

    paragraphs.forEach((p) => {
      const html = p.innerHTML || '';
      const [titleRaw, descRaw] = html.split(/<br\s*\/?>/i);
      const title = titleRaw?.trim() || '';
      const desc = descRaw?.trim() || '';

      const matched = featureMap.find((f) => f.match.test(title));

      parsed.push({
        title,
        desc,
        icon: matched?.icon || null,
        image: matched?.image || null,
      });
    });

    setFeatures(parsed);
  }, [htmlString]);

  return (
    <div className="features-grid">
      {features.map((f, idx) => (
        <div className="feature-card" key={idx}>
          <div className="icon-box">
            {f.image ? (
              <Image
                alt={f.title}
                src={f.image}
                width={40}
                height={40}
                style={{ color: 'transparent' }}
              />
            ) : (
              f.icon || defaultIcon
            )}
          </div>
          <div className="feature-text">
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

GiftCardFeatures.propTypes = {
  htmlString: PropTypes.string.isRequired,
};
