'use client'

import { useState, useEffect } from 'react';

const HoverEffect = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div 
      className="relative w-72 h-48 bg-gray-300 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex justify-center items-center w-full h-full transition-colors duration-300
         ${isHovering ? ' text-white' : ''}`}>
        Passe o cursor por cima desta área.
      </div>
      {isHovering && (
        <div 
          className="fixed w-12 h-12 bg-black bg-opacity-50 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
        />
      )}
    </div>
  );
};

export default HoverEffect;
