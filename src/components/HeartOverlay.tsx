// hooks/useHeartOverlay.ts
import { useEffect, useState } from "react";

type OverlayState = {
  left: number; // page/document pixels
  top: number; // page/document pixels
  width: number; // container width px
  height: number; // container height px
  viewBoxWidth: number;
  originalHeight: number;
  X: number;
  heartPath: string;
};

export function useHeartOverlay(containerRef: React.RefObject<HTMLDivElement>) {
  const [state, setState] = useState<OverlayState | null>(null);

  useEffect(() => {
    if (!containerRef?.current) return;

    let mounted = true;

    function compute() {
      const el = containerRef.current;
      if (!el || !mounted) return;

      const rect = el.getBoundingClientRect();
      // Use offsetWidth/offsetHeight as you were previously using container dimensions
      const screenWidth = el.offsetWidth;
      const screenHeight = el.offsetHeight;

      const originalWidth = 36;
      const originalHeight = 17.12;
      const viewBoxWidth = originalWidth;

      const scaleFactor = screenWidth / viewBoxWidth;
      const scaledHeight = originalHeight * scaleFactor;
      const extraHeightPx = Math.max(0, screenHeight - scaledHeight);
      const X = extraHeightPx / scaleFactor;

      // same heart Y calculations you used
      const heartY1 = 15.065 + X;
      const heartY2 = 11.698 + X;
      const heartY3 = 8.331 + X;
      const heartY4 = 8.623 + X;
      const heartY5 = 8.331 + X;
      const heartY6 = 11.698 + X;

      // Build the exact same path string you used
      const heartPath = `M35.952 ${heartY1} 
              32.317 ${heartY2}
              A1 1 0 0135.722 ${heartY3}
              L36 ${heartY4} 
              36.278 ${heartY5}
              A1 1 0 0139.683 ${heartY6}Z`;

      // Convert container-local svg coords -> container pixel coords
      // Heart center (in svg units)
      const heartCenterX = 36; // same assumption as you had
      const heartCenterY = (heartY1 + heartY3) / 2;

      const viewportX = (heartCenterX / viewBoxWidth) * screenWidth; // px from container left
      const viewportY = (heartCenterY / (originalHeight + X)) * screenHeight; // px from container top

      // Convert to page / document absolute coordinates (so overlay can be placed at exact same spot)
      const docLeft = rect.left + window.scrollX;
      const docTop = rect.top + window.scrollY;

      const left = docLeft + viewportX;
      const top = docTop + viewportY;

      setState({
        left,
        top,
        width: screenWidth,
        height: screenHeight,
        viewBoxWidth,
        originalHeight,
        X,
        heartPath,
      });
    }

    // initial compute
    compute();

    // listen for changes: resize/scroll + container size changes
    const ro = new ResizeObserver(compute);
    ro.observe(containerRef.current);

    window.addEventListener("resize", compute);
    // scroll can change container.getBoundingClientRect -> so update on scroll
    window.addEventListener("scroll", compute, { passive: true });

    return () => {
      mounted = false;
      try {
        ro.disconnect();
      } catch {}
      window.removeEventListener("resize", compute);
      window.removeEventListener("scroll", compute);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  return state;
}
