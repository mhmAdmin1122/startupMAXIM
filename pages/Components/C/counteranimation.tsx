// 

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const CountingAnimation = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const countingRef = useRef(null);
  const [inViewRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      const duration = 2000; // Animation duration in milliseconds
      const increment = Math.ceil(targetNumber / (duration / 16)); // Update every 16ms for smoother animation

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current <= targetNumber) {
          setCount(current);
        } else {
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, targetNumber]);

  return (
    <div className="counting-container" ref={countingRef}>
      <div ref={inViewRef} />
      <span className="counting-number">{count}</span>
    </div>
  );
};

export default CountingAnimation;
