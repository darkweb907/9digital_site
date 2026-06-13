import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (value , animate , initial) => {
  gsap.to(value, {
    ...animate,
    scrollTrigger: {
      trigger: value,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
      ...initial
    },
  });
};
