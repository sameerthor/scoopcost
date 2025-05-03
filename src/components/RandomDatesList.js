import { useState, useEffect } from 'react';

// Function to generate or retrieve the random future date
function getOrCreateDate(storageKey) {
  const stored = localStorage.getItem(storageKey);
  const now = Date.now();

  if (stored) {
    const { timestamp, date } = JSON.parse(stored);
    if (now - timestamp < 24 * 60 * 60 * 1000) {
      return new Date(date);
    }
  }

  // Generate a random offset (between 5 and 20 days)
  const randomOffset = Math.floor(Math.random() * 16) + 5;
  const futureDate = new Date(Date.now() + randomOffset * 86400000); // ms in a day

  // Save it in localStorage for 24 hours
  localStorage.setItem(
    storageKey,
    JSON.stringify({ timestamp: now, date: futureDate.toISOString() })
  );

  return futureDate;
}

export default function RandomDatesList({ count = 1, uniqueId }) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const generated = [];
    // Generate unique storage key based on the uniqueId passed to each instance
    for (let i = 0; i < count; i++) {
      const key = `${uniqueId}_random_date_${i + 1}`;
      const date = getOrCreateDate(key);
      generated.push(
        date.toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      );
    }
    setDates(generated);
  }, [count, uniqueId]); // Re-run if count or uniqueId changes

  return (
    <span>
      {dates.map((date, index) => (
        <span key={index}> {date}</span>
      ))}
    </span>
  );
}
