import React from "react";
import { useRef, useEffect } from "react";

const AnimateOnScroll = ({children, threshold = 0.5}) => {
  const animateRef = useRef(null);

  useEffect(() => {
    const animateElem = animateRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          animateElem.classList.add("text-rise-animation");
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    observer.observe(animateElem);

    return () => {
      observer.unobserve(animateElem);
    };
  }, []);
  return (
    <>
      <div ref={animateRef}>{children}</div>
    </>
  );
};

export default AnimateOnScroll;
