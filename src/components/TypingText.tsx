"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  blinkCount?: number;
}

export default function TypingText({
  text,
  speed = 100,
  className,
  style,
  blinkCount = 3,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [blinksRemaining, setBlinksRemaining] = useState(blinkCount * 2);

  // Typing effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isTypingComplete) {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text, speed, isTypingComplete]);

  // Blinking cursor that disappears after a few blinks
  useEffect(() => {
    if (isTypingComplete && blinksRemaining > 0) {
      const blinkTimeout = setTimeout(() => {
        setCursorVisible((prev) => !prev);
        setBlinksRemaining((prev) => prev - 1);
      }, 400);

      return () => clearTimeout(blinkTimeout);
    } else if (blinksRemaining === 0) {
      setCursorVisible(false);
    }
  }, [isTypingComplete, blinksRemaining]);

  return (
    <span className={className} style={style}>
      {displayedText}
      {cursorVisible && <span className="animate-pulse">_</span>}
    </span>
  );
}
