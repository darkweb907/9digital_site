import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { explore2Img, exploreVideo, explore1Img } from "../utils";
import { animateWithGsap } from "../utils/animation";

const Features = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    animateWithGsap(
      "#videoImg",
      {
        scale: 1,
        opacity: 1,
      },
      { scrub: 5.5 },
    );

    //working on the features text

    animateWithGsap(".feature-text",{
         opacity: 1,
      y: 0,
    })

    gsap.to("#feature", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".feature",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
  });
  return (
    <section className="feature common-padding  bg-zinc">
      <div className="w-full mb-12 scrim-max-width">
        <h1 id="feature" className="section-heading">
          Explore the full story.
        </h1>
        <div className="text my-42">
          <h2 className="text-5xl lg:text-7xl font-semibold">Iphone</h2>
          <h3 className="text-5xl lg:text-7xl font-semibold">
            Forged in titanium.
          </h3>
          <div className="video w-full h-full mt-23">
            <video autoPlay muted playsInline loop src={exploreVideo}></video>
          </div>
          <div className="video-img w-full overflow-hidden">
            <div className="flex gap-5">
              <div className="flex-1 h-[50vh] overflow-hidden">
                <img
                  id="videoImg"
                  className="h-full object-fit-cover feature-video g_grow"
                  src={explore1Img}
                  alt="explore1Img"
                />
              </div>
              <div className="flex-1 w-full h-[50vh] overflow-hidden">
                <img
                  id="videoImg"
                  className="h-full object-fit-cover feature-video g_grow"
                  src={explore2Img}
                  alt="explore2Img"
                />
              </div>
            </div>
          </div>
          <div className=".feature-text-container w-full m-23">
            <div className=" flex overflow-hidden">
              <div className="flex-1">
                <p className=" feature-text">
                  iPhone 15 Pro is{" "}
                  <span className="text-white">
                    the first iPhone to feature an aerospace‑grade titanium
                    design,
                  </span>
                  using the same alloy that spacecraft use for missions to Mars.
                </p>
              </div>
              <div className="flex-1">
                <p className="feature-text">
                  Titanium has one of the best strength‑to‑weight ratios of any
                  metal, making these our
                  <span className="text-white">lightest Pro models ever</span>. You’ll notice the
                  difference the moment you pick one up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
