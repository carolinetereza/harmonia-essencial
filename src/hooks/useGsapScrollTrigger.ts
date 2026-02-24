import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapScrollTrigger = () => {
  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll("[data-gsap]");

      elements.forEach((el) => {
        const type = el.getAttribute("data-gsap") || "fadeUp";
        const delay = parseFloat(el.getAttribute("data-gsap-delay") || "0");
        const duration = parseFloat(el.getAttribute("data-gsap-duration") || "1");

        const from: gsap.TweenVars = { opacity: 0 };
        const to: gsap.TweenVars = { opacity: 1, duration, delay, ease: "power3.out" };

        switch (type) {
          case "fadeUp":
            from.y = 50;
            to.y = 0;
            break;
          case "fadeDown":
            from.y = -50;
            to.y = 0;
            break;
          case "fadeLeft":
            from.x = 60;
            to.x = 0;
            break;
          case "fadeRight":
            from.x = -60;
            to.x = 0;
            break;
          case "scaleIn":
            from.scale = 0.9;
            to.scale = 1;
            break;
          case "clipReveal":
            from.clipPath = "inset(0 0 100% 0)";
            to.clipPath = "inset(0 0 0% 0)";
            break;
          default:
            from.y = 50;
            to.y = 0;
        }

        to.scrollTrigger = {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        };

        gsap.fromTo(el, from, to);
      });

      // Horizontal line reveals
      const lines = document.querySelectorAll("[data-gsap-line]");
      lines.forEach((el) => {
        gsap.fromTo(el, { scaleX: 0 }, {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // Force a refresh so ScrollTrigger recalculates positions
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};
