import { hightlightsSlides } from "../../constant";
import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const VideoCarousel = () => {
  const VideoRefContainer = useRef(null);
  const videRef = useRef([]);

  //state to track the current video index
  const [playingIndex, setPlayingIndex] = useState(0);

  //change current state if the id of video changes

  useEffect(() => {
    const video = videRef.current[playingIndex];
    if (video) {
      video.play();
    }
  }, [playingIndex]);

  //working on the video end event
  const HandleEnd = () => {
    setPlayingIndex((prev) =>
      prev === hightlightsSlides.length - 1 ? 0 : prev + 1,
    );
  };

  useGSAP(() => {
    gsap.to(VideoRefContainer.current, {
      xPercent: -100 * playingIndex,
      duration: 0.5,
    });
  }, [playingIndex]);

  return (
    <div className="overflow-hidden w-full">
      <div ref={VideoRefContainer} className="flex  mt-10">
        {hightlightsSlides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <div className="w-full md:h-[70vh] sm:h-[50vh] h-[35vh]  bg-black rounded-3xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                ref={(el) => (videRef.current[index] = el)}
                src={slide.video}
                onEnded={() => HandleEnd()}
                muted
              ></video>
            </div>
            <div className="carousel-text absolute  top-[10%] left-[7%]">
              {slide.textLists.map((text, index) => (
                <p key={index} className="font-bold  md:text-2xl">
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

//
