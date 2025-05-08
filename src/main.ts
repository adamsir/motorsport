import './styles/index.css'
import Lenis from 'lenis';

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(SplitText);

// Preload website
document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.getElementById('preloader');

  window.scrollTo(0, 0);
  if (preloader) {
    preloader.classList.add('fade-out');
    preloader.addEventListener('transitionend', () => {
      preloader.remove();
    });
  }
  document.body.classList.remove('not-revealed');
});

// Initialize Lenis
const lenis = new Lenis();

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf);



//    gsap.set("h1", { opacity: 1 });

let heroText = SplitText.create("#heroText", { type: "chars" });
gsap.from(heroText.chars, {
  y: 15,
  autoAlpha: 0,
  stagger: 0.02,
  delay: 1.4,
});

let backstageText = SplitText.create("#backstageText", { type: "chars" });
gsap.from(backstageText.chars, {
  y: 25,
  autoAlpha: 0,
  stagger: 0.1,
  delay: 1.8,
});

// Sync ScrollTrigger with Lenis
lenis.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value: number | undefined) {
    return arguments.length ? lenis.scrollTo(value as number) : window.scrollY
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  pinType: document.body.style.transform ? 'transform' : 'fixed'
})

// const startY = 0;
// const moveY = -20;
// const coinsFigure = '.section--promo';
// gsap.set(coinsFigure, { opacity: 0 });
// gsap.to(coinsFigure, {
//   x: 0, // moves from translateX(100px) → translateX(600px)
//   y: 200,
//   opacity: 1,
//   ease: "elastic",
//   scrollTrigger: {
//     trigger: '.section--promo',
//     scrub: true,
//     onUpdate: self => {
//       const progress = self.progress
//       gsap.set(coinsFigure, { y: startY + progress * moveY});
//     }
//   }
// });
gsap.set('.scroll-indicator', { opacity: 1, });
gsap.to('.scroll-indicator', {
  x: 0, // moves from translateX(100px) → translateX(600px)
  y: 0,
  opacity: 0,
  ease: "elastic",
  scrollTrigger: {
    trigger: '.section--promo',
    scrub: true,
  }
});


gsap.set('.section--promo', { opacity: 0, });
gsap.to('.section--promo', {
  x: 0, // moves from translateX(100px) → translateX(600px)
  y: -150,
  opacity: 1,
  ease: "elastic",
  scrollTrigger: {
    trigger: '.section--promo',
    scrub: true,
  }
});