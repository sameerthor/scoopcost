import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ResponsiveCarousel({
  items = [],
  idPrefix = "carousel",
  responsiveConfig = { xs: 1, sm: 1, md: 1 }
}) {
  const [itemsPerSlide, setItemsPerSlide] = useState(responsiveConfig.md || 3);
  const [groupedItems, setGroupedItems] = useState([]);
  const [carouselId] = useState(`${idPrefix}-${uuidv4()}`);

  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 576) setItemsPerSlide(responsiveConfig.xs || 1);
    else if (width < 768) setItemsPerSlide(responsiveConfig.sm || 2);
    else setItemsPerSlide(responsiveConfig.md || 3);
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    const groups = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      groups.push(items.slice(i, i + itemsPerSlide));
    }
    setGroupedItems(groups);
  }, [itemsPerSlide, items]);

  return (
    <div id={carouselId} className="carousel slide mb-5" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        {groupedItems.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {groupedItems.map((group, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <div className="d-flex">
              {group.map((item, i) => (
                <div key={i} style={{ minWidth: "200px", flex: "1" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev carouselControl"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg>
      </button>
      <button
        className="carousel-control-next carouselControl"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
        </svg>
      </button>
    </div>
  );
}
