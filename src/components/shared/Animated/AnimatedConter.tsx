import { useState, useRef, useEffect } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  triggered: boolean;
  delay?: number;
}

function AnimatedCounter({
  end,
  suffix = "",
  triggered,
  delay = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ran = useRef(false);
  const DURATION = 1800; // ms

  useEffect(() => {
    if (!triggered || ran.current) return;

    const timer = setTimeout(() => {
      ran.current = true;
      let t0: number | null = null;

      const step = (ts: number) => {
        if (!t0) t0 = ts;
        const progress = Math.min((ts - t0) / DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
        setCount(Math.round(eased * end));
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timer);
  }, [triggered, end, delay]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
export default AnimatedCounter;