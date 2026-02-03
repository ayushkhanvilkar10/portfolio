'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  SpringOptions,
} from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({
  className,
  size = 200,
  springOptions = { stiffness: 200, damping: 20 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, springOptions);
  const spotlightY = useSpring(mouseY, springOptions);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute rounded-full bg-gradient-radial from-white/50 via-white/20 to-transparent"
        style={{
          width: size,
          height: size,
          x: spotlightX,
          y: spotlightY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </motion.div>
  );
}
