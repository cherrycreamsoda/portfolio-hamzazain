'use client'

import { useState, useEffect } from 'react'
import { FloatingBlobs } from '@/components/floating-blobs'

export default function Page() {
  const [displayText, setDisplayText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [fontLoaded, setFontLoaded] = useState(false)
  
  const fullText = 'مرحباً كيف حالك؟'
  const typingSpeed = 200 // milliseconds per character

  // Check if font is loaded
  useEffect(() => {
    const checkFont = async () => {
      try {
        await document.fonts.load('400 1em Alexandria')
        setFontLoaded(true)
      } catch (error) {
        // Fallback if font loading fails
        setTimeout(() => setFontLoaded(true), 2000)
      }
    }
    
    checkFont()
  }, [])

  // Handle loading sequence
  useEffect(() => {
    if (fontLoaded) {
      // Wait a bit more for blobs to initialize
      const timer = setTimeout(() => {
        setIsLoading(false)
        // Start content fade in
        setTimeout(() => {
          setShowContent(true)
        }, 100)
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [fontLoaded])

  // Typing animation
  useEffect(() => {
    if (!showContent) return
    
    let currentIndex = 0
    
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeText, typingSpeed)
      }
    }

    // Start typing after content is visible
    const startDelay = setTimeout(typeText, 800)
    return () => {
      clearTimeout(startDelay)
    }
  }, [showContent])

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}

      {/* Blob Background */}
      <div className={`blob-background ${showContent ? 'fade-in' : ''}`}>
        <FloatingBlobs />
      </div>

      {/* Main Content */}
      <main className={`main ${showContent ? 'fade-in' : ''}`}>
        <div className="typing-container">
          <h1 className="typing-text">
            {displayText}
          </h1>
        </div>
      </main>
    </>
  )
}
