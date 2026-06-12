import gsap from 'gsap'
import { useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import {watchImg , rightImg} from  "../utils"
import VideoCarousel from './subcomponent/VideoCarousel'


const Highlight = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.to('#highlights' , {
      opacity:1,
      y:0,
      duration:1.5,
      scrollTrigger:{
        trigger:'#highlights',
        toggleActions: "play reverse play reverse",
      }
    },[]);

    //working on the link animation
    gsap.to('.link', {
      y:0,
      opacity:1,
      stagger:1,
      delay:1.5,
      duration:1.5,
      scrollTrigger:{
        trigger:'#highlights',
        start:'top 80%',
       toggleActions: "play reverse play reverse",
      }
    })
  })
  return (
    <section className="bg-zinccommon-padding ">
      <div className="scrim-max-width overflow-hidden">
        <div className="hignlight flex  justify-between items-center w-full">
          <h1 id="highlights" className="section-heading">Get the highlights.</h1>
          <div className=" flex whitespace-nowrap gap-4">
            <div className="film flex gap-2 link">
              <span >Watch the film</span>
              <img src={watchImg} alt="Watch the film" />
            </div>
            <div className="event flex gap-2 link">
              <span>Watch the event</span>
              <img src={rightImg} alt="Watch the event" />
            </div>
          </div>
        </div>
        <VideoCarousel/>
      </div>

      

    </section>
  )
}

export default Highlight