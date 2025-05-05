import './styles/index.css'
import Lenis from 'lenis';

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

// Initialize Lenis
const lenis = new Lenis()

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf);

gsap.registerPlugin(SplitText);

//    gsap.set("h1", { opacity: 1 });

let heroText = SplitText.create("#heroText", { type: "chars" });
gsap.from(heroText.chars, {
  y: 15,
  autoAlpha: 0,
  stagger: 0.02,
  delay: 0.2,
});

let backstageText = SplitText.create("#backstageText", { type: "chars" });
gsap.from(backstageText.chars, {
  y: 25,
  autoAlpha: 0,
  stagger: 0.1,
  delay: 0.1,
});
