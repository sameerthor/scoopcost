import { useState } from 'react';

function FeedbackComponent({ couponComponentId, storeSlug, totalUsed, setTotalUsed }) {
  const [isWorkedVisible, setIsWorkedVisible] = useState(true);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  async function isWorked(is_worked) {
    setTotalUsed(totalUsed + 1);

    try {
      const response = await fetch('/api/coupon-worked', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ couponComponentId, is_worked, storeSlug }),
      });

      return await response.json();
    } catch (error) {
      console.error('Client tracking failed:', error);
    }
  }

  const handleVote = (worked) => {
    isWorked(worked); // pass true or false
    setIsWorkedVisible(false);
    setIsFeedbackVisible(true);
  };

  return (
    <div className="feedback-container">
      {isWorkedVisible && (
        <div className="isWorked">
          <h4>Did this work?</h4>
          <div className="workedbtn">
            <a href="#" className="btnVote" onClick={() => handleVote("True")}>
              {/* Thumbs Up Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#0ee032" width={16} height={16}>
                <path d="M313.4 32.9c26 5.2...z" />
              </svg>
              Yes
            </a>
            <a href="#" className="btnVote" onClick={() => handleVote("False")}>
              {/* Thumbs Down Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ff5f71" width={16} height={16}>
                <path d="M313.4 479.1c26-5.2...z" />
              </svg>
              No
            </a>
          </div>
        </div>
      )}
      {isFeedbackVisible && (
        <div className="feedBackBox">
          <span>Thanks for your feedback</span>
        </div>
      )}
    </div>
  );
}

export default FeedbackComponent;
