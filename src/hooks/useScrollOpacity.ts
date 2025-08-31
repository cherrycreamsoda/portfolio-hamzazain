"use client";

import { useEffect, useState, useCallback } from "react";

export function useScrollOpacity(maxScroll = 300) {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const newOpacity = Math.max(0, 1 - scrollY / maxScroll);
    setOpacity(newOpacity);
  }, [maxScroll]);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  return opacity;
}
