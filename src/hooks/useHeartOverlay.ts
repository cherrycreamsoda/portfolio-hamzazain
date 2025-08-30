// src/hooks/useHeartOverlay.ts
import { useEffect, useState } from "react";

type OverlayState = {
  docLeft: number; // page px for container top-left
  docTop: number; // page px for container top-left
  width: number; // container pixel width
  height: number; // container pixel height
  viewBoxWidth: number;
  originalHeight: number;
  X: number;
  heartPath: string;
};

export function useHeartOverlay(containerRef: React.RefObject<HTMLDivElement>) {
  const [state, setState] = useState<OverlayState | null>(null);

  useEffect(() => {
    const el = containerRef?.current;
    if (!el) return;

    let mounted = true;

    function compute() {
      if (!mounted || !el) return;

      const rect = el.getBoundingClientRect();
      const width = el.offsetWidth || rect.width || window.innerWidth;
      const height = el.offsetHeight || rect.height || window.innerHeight;

      const originalWidth = 36;
      const originalHeight = 17.12;
      const viewBoxWidth = originalWidth;

      const scaleFactor = width / viewBoxWidth;
      const scaledHeight = originalHeight * scaleFactor;
      const extraHeightPx = Math.max(0, height - scaledHeight);
      const X = extraHeightPx / scaleFactor;

      // exact same heart math you had
      const heartY1 = 15.065 + X;
      const heartY2 = 11.698 + X;
      const heartY3 = 8.331 + X;
      const heartY4 = 8.623 + X;
      const heartY5 = 8.331 + X;
      const heartY6 = 11.698 + X;

      const heartPath = `M35.952 ${heartY1}
              32.317 ${heartY2}
              A1 1 0 0135.722 ${heartY3}
              L36 ${heartY4}
              36.278 ${heartY5}
              A1 1 0 0139.683 ${heartY6}Z`;

      const docLeft = rect.left + window.scrollX;
      const docTop = rect.top + window.scrollY;

      setState({
        docLeft,
        docTop,
        width,
        height,
        viewBoxWidth,
        originalHeight,
        X,
        heartPath,
      });
    }

    compute();

    // keep it in sync: ResizeObserver + window events
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);
    window.addEventListener("scroll", compute, { passive: true });

    return () => {
      mounted = false;
      try {
        ro.disconnect();
      } catch {}
      window.removeEventListener("resize", compute);
      window.removeEventListener("scroll", compute);
    };
  }, [containerRef]);

  return state;
}
