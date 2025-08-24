"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./DynamicSvgFrame.module.css";

export default function DynamicSvgFrame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    function updateDimensions() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!dimensions) {
    return <div ref={containerRef} className={styles.container} />;
  }

  const { width: screenWidth, height: screenHeight } = dimensions;

  const originalWidth = 36;
  const originalHeight = 17.12;
  const viewBoxWidth = originalWidth; // No need to add 4 since path is already normalized

  const scaleFactor = screenWidth / viewBoxWidth;
  const scaledHeight = originalHeight * scaleFactor;
  const extraHeightPx = Math.max(0, screenHeight - scaledHeight);
  const X = extraHeightPx / scaleFactor;

  const y1 = 8 + X;
  const y2_x = 31.887;
  const y2_y = 11.905 + X;
  const y3_x = 35.821;
  const y3_y = 15.623 + X;
  const y4 = 17 + X;
  const y5 = 16 + X;
  const y6 = 11 + X; // This gets X added (first part of divided line)
  const y7 = 10.5; // This stays unchanged (second part of divided line)

  const pathData = `M0 1A1 1 0 011 0L10 0A1 1 2 0111 .5 1 1 0 0012 1L22 1A1 1 0 0023 .5 1 1 0 0124 0L30 0A1 1 0 0131 .5 1 1 0 0032 1L35 1A1 1 0 0136 2L36 ${y1}A1 1 0 00${y2_x} ${y2_y}L${y3_x} ${y3_y}A1 1 0 0135 ${y4}L1 ${y4}A1 1 0 010 ${y5}L0 ${y6}L0 ${y7}A1 1 0 011 9.5L13.5 9.5A1 1 0 0014.5 8.5L14.5 5A1 1 0 0013.5 4L1 4a1 1 0 01-1-1Z`;

  return (
    <div ref={containerRef} className={styles.container}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${originalHeight + X}`}
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="marblePattern"
            patternUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <image
              href="/ink-marbling.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        <path d={pathData} fill="url(#marblePattern)" stroke="none" />
      </svg>
      <div className={styles.heartContainer}>
        <svg className={styles.heart} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="#ef4444"
          />
        </svg>
      </div>
    </div>
  );
}
