import MainDomainLink from '@/components/MainDomainLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import FeedbackComponent from '../components/FeedbackComponent';

import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const getHeading = (title) => {
  if (!title) return "";

  // Check for percentage discount (e.g., "40% OFF")
  const percentMatch = title.match(/(\d+)%/);
  if (percentMatch) {
      return `${percentMatch[1]}% </br> OFF`;
  }

  // Check for dollar discount (e.g., "$40 OFF")
  const dollarMatch = title.match(/\$(\d+)/);
  if (dollarMatch) {
      return `$${dollarMatch[1]} </br> OFF`;
  }

  // Check for "Free Shipping"
  if (/free shipping/i.test(title)) {
      return "Free </br> Shipping";
  }

  return "";
};
export default function Coupon({ expiryDate, index, coupon, storeImage, storeName, affiliateUrl, homeUrl, storeSlug, storeId, storeCreateTime,usesSubdomain }) {
  const accordionId = `accordion-${index}`;
  const collapseId = `collapse-${index}`;
  const historyAccordionId = `historyAccordionId-${index}`;
  const historyCollapseId = `historyCollapseId-${index}`;
  const [modalOpen, setModalOpen] = useState(false);
  const [copytext, setCopyText] = useState("Copy code");
  const [isExpanded, setIsExpanded] = useState(false);
  const maxChars = 40;
  const showMore = coupon.Content.length > maxChars;

  setTimeout(async () => {
    if (process.browser) {
      let c_id = localStorage.getItem("copied_code");
      if (c_id == coupon.id) {

        await setModalOpen(true);
        setTimeout(() => {
          // Determine the modal to open based on coupon type
          let modalElement = coupon.coupon_type == "Code"
            ? document.getElementById('getCode' + c_id)
            : document.getElementById('getDeal' + c_id);

          if (modalElement) {
            console.log("in")
            const modal = new bootstrap.Modal(modalElement);
            modal.show(); // Show the modal
          }

        }, 800)


        localStorage.removeItem("copied_code");
      }
    }
  }, 800);

  async function trackCouponUsage(couponComponentId) {
    try {
      const response = await fetch(
        `https://admin.coupontix.com/api/stores/${storeId}/coupons/${couponComponentId}/track-usage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      return await response.json();
    } catch (error) {
      console.error('Tracking failed:', error);
    }
  }

  async function isWorked(couponComponentId, is_worked) {
    try {
      const response = await fetch(
        `https://admin.coupontix.com/api/stores/${storeId}/coupons/${couponComponentId}/is-worked`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ is_worked }) // Pass is_worked in the request body
        }
      );

      return await response.json();
    } catch (error) {
      console.error('Tracking failed:', error);
    }
  }


  return (

    <div className="hugecouponBox">
      <div className="coupon-item">
        <div className="discountBox">
          <div className="offBox">
            <div dangerouslySetInnerHTML={{ __html: getHeading(coupon.Title) }}></div>
          </div>
          <div className="isValid">
            <span>Verified</span>
            <span>
              <svg data-bbox="27.999 25 143.499 149.925" viewBox="27.999 25 143.499 149.925" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-label="Verified">
                <g>
                  <path d="M91.301 122.708 71.46 102.867l5.891-5.892 13.95 13.95 30.842-30.842 5.891 5.892-36.733 36.733Zm79.233-6.141-8.608-16.717 8.608-16.558a8.471 8.471 0 0 0 .55-6.542 8.457 8.457 0 0 0-4.283-4.975l-16.792-8.458-2.775-18.467a8.469 8.469 0 0 0-3.408-5.617c-1.858-1.341-4.142-1.891-6.375-1.491l-18.55 3.025-13.1-13.317h-.008c-3.209-3.267-8.875-3.267-12.092 0L80.468 40.808 62.05 37.742c-2.242-.4-4.533.15-6.383 1.491a8.47 8.47 0 0 0-3.408 5.617l-2.85 18.583-16.717 8.342a8.471 8.471 0 0 0-4.275 4.975 8.449 8.449 0 0 0 .541 6.533l8.609 16.709-8.6 16.566a8.416 8.416 0 0 0-.55 6.534 8.448 8.448 0 0 0 4.283 4.983l16.783 8.45 2.776 18.467a8.451 8.451 0 0 0 3.408 5.616 8.475 8.475 0 0 0 6.375 1.5l18.558-3.033 13.1 13.317a8.433 8.433 0 0 0 6.05 2.533c2.292 0 4.433-.9 6.05-2.533l13.233-13.359 18.417 3.075a8.41 8.41 0 0 0 6.375-1.5 8.45 8.45 0 0 0 3.408-5.616l2.859-18.575 16.716-8.342a8.462 8.462 0 0 0 4.275-4.983c.7-2.184.509-4.5-.55-6.525Z" fill-rule="evenodd"></path>
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div className="coupnBox">
          <div className="coupondesc">
            <div>
              <div className="svgBox">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2735 6.60866L7.38683 0.721994C7.14016 0.475327 6.80016 0.335327 6.44683 0.335327H1.66683C0.933496 0.335327 0.333496 0.935327 0.333496 1.66866V6.44866C0.333496 6.80199 0.473496 7.14199 0.726829 7.38866L6.6135 13.2753C7.1335 13.7953 7.98016 13.7953 8.50016 13.2753L13.2802 8.49533C13.8002 7.97533 13.8002 7.13533 13.2735 6.60866ZM3.3335 4.33533C2.78016 4.33533 2.3335 3.88866 2.3335 3.33533C2.3335 2.78199 2.78016 2.33533 3.3335 2.33533C3.88683 2.33533 4.3335 2.78199 4.3335 3.33533C4.3335 3.88866 3.88683 4.33533 3.3335 4.33533Z"
                    fill="#1A1A1A"
                  ></path>
                </svg>
                <span className={coupon.coupon_type === 'Code' ? 'c-code' : 'c-sale'}>
                  {coupon.coupon_type === 'Code' ? 'Code' : 'Deal'}
                </span>
              </div>
              <h3>
                <a title={coupon.Title} rel="nofollow" className="coupon-link" href={affiliateUrl}>
                  {coupon.Title}
                </a>
              </h3>
              <p className="couponDesc">
                {isExpanded ? coupon.Content : coupon.Content.slice(0, maxChars) + (showMore ? "..." : "")}
                {showMore && (
                  <a className="moreBtn" href="#" onClick={(e) => { e.preventDefault(); setIsExpanded(!isExpanded); }}>
                    {isExpanded ? " Show Less" : " Show More"}
                  </a>
                )}
              </p>
              <div className="couponBtndesc">

                {coupon.coupon_type === 'Code' ? (
                  <button onClick={async (e) => {
                    await trackCouponUsage(coupon.id);
                    // Set the copied_code in localStorage (no need to await as it's synchronous)
                    localStorage.setItem('copied_code', coupon.id);

                    // Copy the coupon code to the clipboard
                    navigator.clipboard.writeText(coupon.coupon_code).then(() => {
                      //                                        console.log("Coupon code copied to clipboard");
                    }).catch((error) => {
                      console.error("Error copying to clipboard: ", error);
                    });

                    // Open the store's page in a new tab
                    window.open(`/${storeSlug}/#c=${coupon.id}`, "_blank");

                    // Log the affiliate URL

                    // Open the affiliate URL in the same window after a short delay (to ensure proper sequence)
                    setTimeout(() => {
                      window.open(affiliateUrl, "_self");
                    }, 100);  // Delay added to ensure actions don't overlap

                  }}
                    data-type="code"
                    className="coupon-code coupon-button"
                    href="javscript:void()">
                    <span className="code-text" rel="nofollow">{coupon.coupon_code}</span>
                  </button>
                ) : (
                  <button rel="nofollow" href="javascript:void(0)" className="coupon-deal coupon-button" onClick={async (e) => {
                    await trackCouponUsage(coupon.id);

                    await localStorage.setItem('copied_code', coupon.id)
                    window.open(`/${storeSlug}`, "_blank");
                    setTimeout(() => {
                      window.open(affiliateUrl, "_self");
                    }, 100);
                  }}>
                    Get Deal
                  </button>
                )}

              </div>
            </div>

            <div className="termsBox">
              {coupon.term_condition != "" &&
                <button className="showTncBox tnc tncBtns" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} title="Show T &amp; C">Terms &amp; Conditions</button>
              }
             <button className="showTncBox tnc tncBtns" data-bs-toggle="collapse" data-bs-target={`#${historyCollapseId}`} title="Show T &amp; C">Coupon History</button>
            </div>
          </div>

          <div className="couponBtn">
            {coupon.coupon_type === 'Code' ? (
              <button onClick={async (e) => {
                await trackCouponUsage(coupon.id);
                // Set the copied_code in localStorage (no need to await as it's synchronous)
                localStorage.setItem('copied_code', coupon.id);

                // Copy the coupon code to the clipboard
                navigator.clipboard.writeText(coupon.coupon_code).then(() => {
                  //                                        console.log("Coupon code copied to clipboard");
                }).catch((error) => {
                  console.error("Error copying to clipboard: ", error);
                });

                // Open the store's page in a new tab
const baseDomain = 'coupontix.com';

const url = usesSubdomain
  ? `https://${storeSlug}.${baseDomain}/#c=${coupon.id}`
  : `/${storeSlug}/#c=${coupon.id}`

window.open(url, "_blank");
                // Log the affiliate URL

                // Open the affiliate URL in the same window after a short delay (to ensure proper sequence)
                setTimeout(() => {
                  window.open(affiliateUrl, "_self");
                }, 100);  // Delay added to ensure actions don't overlap

              }}
                data-type="code"
                className="coupon-code coupon-button"
                href="javscript:void()">
                <span className="code-text" rel="nofollow">{coupon.coupon_code}</span>
              </button>
            ) : (
              <button className="coupon-deal coupon-button" onClick={async (e) => {
                await trackCouponUsage(coupon.id);
                await localStorage.setItem('copied_code', coupon.id)
                const baseDomain = 'coupontix.com';

const url = usesSubdomain
  ? `https://${storeSlug}.${baseDomain}/`
  : `/${storeSlug}`

window.open(url, "_blank");
                setTimeout(() => {
                  window.open(affiliateUrl, "_self");
                }, 100);
              }}>
                Get Deal <i className="shop icon"></i>
              </button>
            )}

            <div className="cpnratebx">
              <div className="user-ratting">
                <div className="coupon-vote" onClick={() => isWorked(coupon.id, 'Yes')} data-tooltip="This worked" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>
                </div>
                <div className="coupon-vote" onClick={() => isWorked(coupon.id, 'No')} data-tooltip="This worked" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="termsBox"> <button className="showTncBox tnc tncBtns" data-bs-toggle="collapse" data-bs-target={`#${historyCollapseId}`} title="Show T &amp; C">Coupon History</button></div>
          </div>
        </div>
      </div>
      {coupon.term_condition != "" &&
        <div id={accordionId} className="accordion">
          <div id={collapseId} className="collapse" aria-labelledby={`heading-${index}`} data-bs-parent={`#${accordionId}`}>
            <div className="card-body">
              <div className="tNcBox">
                <div dangerouslySetInnerHTML={{ __html: coupon.term_condition }} />
              </div>
            </div>
          </div>
        </div>
      }
      <div id={historyAccordionId} className="accordion">
        <div id={historyCollapseId} className="collapse" aria-labelledby={`heading-${index}`} data-bs-parent={`#${accordionId}`}>
          <div className="card-body">
            <div className="historyBox tNcBox">
              <ul>
                {coupon.last_used_at && !isNaN(coupon.last_used_at) && coupon.coupon_type == "Code"
                  ? <li>'{coupon.coupon_code}' promo code was used by shoppers {formatDistanceToNow(new Date(Number(coupon.last_used_at)), { addSuffix: true })} {coupon.is_worked && (coupon.is_worked == "Yes" ? "and it worked." : "and it didn't work.")}</li>
                  : ''}
                {coupon.last_used_at && !isNaN(coupon.last_used_at) && coupon.coupon_type == "Sale"
                  ? <li>This deal was used by shoppers {formatDistanceToNow(new Date(Number(coupon.last_used_at)), { addSuffix: true })} {coupon.is_worked && (coupon.is_worked == "Yes" ? "and it worked." : "and it didn't work.")}</li>
                  : ''}
                <li>{`Added ${formatDistanceToNow(storeCreateTime, { addSuffix: true })}`} by {coupon.tested_by}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <>
        {modalOpen && coupon.coupon_type === "Code" && (
          <div
            className="modal fade"
            id={`getCode${coupon.id}`}
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header" style={{ justifyContent: "space-between" }}>
                  <h5 className="modal-title" id="exampleModalLabel">
                    {coupon.title}
                  </h5>
                  <button
                    type="button"
                    className="btn btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setModalOpen(false)}
                  />
                </div>
                <div className="modal-body text-center">
                  <div className="modal-store-logo">
                    <a href={affiliateUrl || "#"}>
                      <img src={storeImage} alt={storeName || "Store"} />
                    </a>
                  </div>
                  <div className="modalCode">
                    <span>{coupon.coupon_code}</span>
                  </div>
                  <div
                    className="codeCopyBtn"
                    onClick={() => {
                      navigator.clipboard.writeText(coupon.coupon_code);
                      setCopyText("Copied");
                    }}
                  >
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-scissors"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                      </svg>
                      {copytext}
                    </button>
                  </div>
                  <div className="storeBtn">
                    <a href={affiliateUrl || "#"}>
                      Visit at {homeUrl || "Store"}
                    </a>
                  </div>
                
                  <FeedbackComponent />
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        )}
      </>
      {/**********************************Coupon Pop-Up GET-deal Modal*********************************************** */}
      <>
        {(coupon.coupon_type == "Sale" && modalOpen) &&
          <div
            className="modal fade"
            id={`getDeal${coupon.id}`}
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" >
                <div className="modal-header" style={{ justifyContent: "space-between" }}>
                  <h5 className="modal-title" id="exampleModalLabel">
                    {coupon.title}
                  </h5>
                  <button
                    type="button"
                    className="btn btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-center">
                  <div className="modal-store-logo">
                    <a href="#00">
                      <img
                        src={`${storeImage}`}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="modalCode d-flex align-items-center justify-content-center">
                    <span>
                      Deal Activated{" "}
                      <svg
                        height={25}
                        width={25}
                        fill="#0ee032"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                    </span>
                  </div>
                  <div className="storeBtn">
                    <a href={`${affiliateUrl}`}>
                      Redeem at {homeUrl}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-double-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                        />
                        <path
                          fillRule="evenodd"
                          d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </a>
                  </div>
                 
                  <FeedbackComponent />
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        }
      </>
    </div>

  );
}