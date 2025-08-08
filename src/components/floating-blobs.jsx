"use client"

import { useState, useEffect, useCallback } from "react"

export const FloatingBlobs = () => {
  const [blobs, setBlobs] = useState([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const generateBlobPath = (size) => {
    const numPoints = 8
    const angleStep = (Math.PI * 2) / numPoints
    const points = []

    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep
      const radius = size * (0.8 + Math.random() * 0.4)
      points.push([Math.cos(angle) * radius, Math.sin(angle) * radius])
    }

    let path = `M ${points[0][0]},${points[0][1]}`
    for (let i = 0; i < points.length; i++) {
      const current = points[i]
      const next = points[(i + 1) % points.length]
      const midX = (current[0] + next[0]) / 2
      const midY = (current[1] + next[1]) / 2
      path += ` Q ${current[0]},${current[1]} ${midX},${midY}`
    }
    path += " Z"
    return path
  }

  const createBlob = useCallback(() => {
    const size = Math.random() * 200 + 120 // Much bigger blobs: 120-320px instead of 40-120px
    return {
      id: Math.random(),
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: size,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: (Math.random() - 0.5) * 1.5,
      color: `hsla(${Math.random() * 360}, 70%, 50%, 0.8)`, // Slightly more opaque
      path: generateBlobPath(size),
    }
  }, [dimensions])

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const newBlobs = Array.from({ length: 15 }, createBlob)
    setBlobs(newBlobs)
  }, [dimensions, createBlob])

  useEffect(() => {
    const animateBlobs = () => {
      setBlobs((prevBlobs) =>
        prevBlobs.map((blob) => {
          const newX = blob.x + blob.speedX
          const newY = blob.y + blob.speedY

          if (newX < -blob.size || newX > dimensions.width + blob.size) blob.speedX *= -1
          if (newY < -blob.size || newY > dimensions.height + blob.size) blob.speedY *= -1

          return {
            ...blob,
            x: newX,
            y: newY,
          }
        }),
      )
    }

    const intervalId = setInterval(animateBlobs, 50)
    return () => clearInterval(intervalId)
  }, [dimensions])

  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
      </filter>
      <g filter="url(#goo)">
        {blobs.map((blob) => (
          <g key={blob.id} transform={`translate(${blob.x}, ${blob.y})`}>
            <path d={blob.path} fill={blob.color}>
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.05;1"
                dur="5s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}
      </g>
    </svg>
  )
}
