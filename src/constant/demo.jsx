import React, { useRef, useState, useEffect } from "react";
import { hightlightsSlides } from "../../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VideoCarousel = () => {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Play current video whenever index changes
  useEffect(() => {
    const video = videoRefs.current[currentIndex];

    if (video) {
      video.currentTime = 0;
      video.play().catch((err) => {
        console.log("Play failed:", err);
      });
    }
  }, [currentIndex]);

  // Animate carousel when index changes
  useGSAP(
    () => {
      gsap.to(sliderRef.current, {
        xPercent: -100 * currentIndex,
        duration: 0.8,
        ease: "power2.inOut",
      });
    },
    { dependencies: [currentIndex] }
  );

  const handleVideoEnd = () => {
    setCurrentIndex((prev) =>
      prev === hightlightsSlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="overflow-hidden w-full">
      <div ref={sliderRef} className="flex">
        {hightlightsSlides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative"
          >
            <div className="w-full h-[600px] rounded-3xl overflow-hidden">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={slide.video}
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-[10%] left-[7%]">
              {slide.textLists.map((text, textIndex) => (
                <p
                  key={textIndex}
                  className="font-bold md:text-2xl text-white"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;