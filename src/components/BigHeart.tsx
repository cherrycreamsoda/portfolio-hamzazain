// src/components/BigHeart.tsx
"use client";
import React from "react";
import { createPortal } from "react-dom";
import { useHeartOverlay } from "../hooks/useHeartOverlay";

type Props = {
  containerRef: React.RefObject<HTMLDivElement>;
  zIndex?: number;
};

export default function BigHeart({ containerRef, zIndex = 9999 }: Props) {
  const state = useHeartOverlay(containerRef);

  // don't render on server or until we have measurements
  if (!state || typeof document === "undefined") return null;

  const {
    docLeft,
    docTop,
    width,
    height,
    viewBoxWidth,
    originalHeight,
    X,
    heartPath,
  } = state;

  // portal an overlay svg whose top-left == container top-left so viewBox coords are identical
  return createPortal(
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${originalHeight + X}`}
      style={{
        position: "absolute",
        left: `${Math.round(docLeft)}px`,
        top: `${Math.round(docTop)}px`,
        overflow: "visible",
        pointerEvents: "none",
        zIndex,
      }}
      aria-hidden
    >
      <path d={heartPath} fill="#ef4444" />
    </svg>,
    document.body
  );
}
