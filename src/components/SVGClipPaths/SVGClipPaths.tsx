export default function SVGClipPaths() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <clipPath id="notchClip" clipPathUnits="objectBoundingBox">
          <path
            d="
            M 0.35,0
            Q 0.25,0 0.25,0.1
            V 0.25
            Q 0.25,0.35 0.15,0.35
            H 0.1
            Q 0,0.35 0,0.45
            V 0.9
            Q 0,1 0.1,1
            H 0.9
            Q 1,1 1,0.9
            V 0.1
            Q 1,0 0.9,0
            Z
          "
          />
        </clipPath>
        <clipPath id="roundedClip" clipPathUnits="objectBoundingBox">
          <path
            d="
            M 0.1,0
            H 0.9
            Q 1,0 1,0.1
            V 0.9
            Q 1,1 0.9,1
            H 0.1
            Q 0,1 0,0.9
            V 0.1
            Q 0,0 0.1,0
            Z
          "
          />
        </clipPath>
      </defs>
    </svg>
  )
}
