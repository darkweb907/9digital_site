import { useEffect , useState} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo , smallHeroVideo } from "../utils";

const Hero = () => {
  const [resize , setResize] = useState(heroVideo);
  // const container = useRef();

  const handleResize = ()=>{
    if(window.innerWidth < 550){
      setResize(smallHeroVideo);
    }else{
      setResize(heroVideo);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
    });
//gsap animation for the button
    gsap.fromTo('#btn',
      {
        y: 250,
      } ,     
      {
      y: 50,
      opacity:1,
      delay:1,
      duration:1.5,
      ease:"power2.out"
    })
  }, []);

  


  return (
    <section className="w-full nav-height mt-[32px] ">
      <div className="hero h-5/6 flex-center flex-col gap-4 relative">
        <h1 id="hero" className="hero-title opacity-0">
          iPhone 15 Pro
        </h1>
        <div className="md:w-10/12 w-9/12">
          <video src={resize} autoPlay muted playsInline ></video>
        </div>
        <div id="btn" className="price text-white text-center absolute bottom-0  opacity-0">
          <button className="btn">Buy</button>
          <p className=" text-xl">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;