import React, { useState, useEffect } from "react";
import banner1 from "../../../assets/main-banner-1.png";
import banner2 from "../../../assets/main-banner-2.png";
import banner3 from "../../../assets/main-banner-3.png";

const banners = [banner1, banner2, banner3];

export default function StudyBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // 5초마다 자동 전환
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="group relative w-full overflow-hidden rounded-[12px] shadow-sm bg-gray-100 aspect-[16/9] md:aspect-[3/1]">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        /* eslint-disable-next-line */
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((img, index) => (
          <div key={index} className="min-w-full h-full">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="이전 슬라이드"
      >
        <svg
          width="12"
          height="17"
          viewBox="0 0 12 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="10 2 3 8.5 10 15"></polyline>
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="다음 슬라이드"
      >
        <svg
          width="12"
          height="17"
          viewBox="0 0 12 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="2 2 9 8.5 2 15"></polyline>
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`${index + 1}번 슬라이드로 이동`}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? "bg-background w-2 h-2"
                : "bg-background/50 hover:bg-background/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
