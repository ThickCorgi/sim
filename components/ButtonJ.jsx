'use client'
import React, { useState, useEffect } from 'react';
import { BiSolidUpArrowAlt } from 'react-icons/bi';

export default function ButtonJ() {
  const [showIcon, setShowIcon] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  return (
    <div className="flex flex-col items-center mb-10" style={{ pointerEvents: 'none' }}>

      <button 
        className="m-2 border border-slate-800 px-2" 
        onClick={() => setShowIcon(!showIcon)}
        style={{ pointerEvents: 'auto' }}
      >
        j arrow
      </button>

      {showIcon && (
        <div
          className="flex items-end " 
          style={{
            position: 'absolute',
            top: position.y + 'px',
            left: position.x + 'px',
            cursor: isDragging ? 'grabbing' : 'grab',
            pointerEvents: 'auto'
          }}
          onMouseDown={handleMouseDown}
        >
          <BiSolidUpArrowAlt size={60} color='red'/> j
        </div>
      )}
    </div>
  );
}
