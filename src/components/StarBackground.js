import React from 'react';

const StarBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(100)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full"
        style={{
          width: Math.random() * 2 + 'px',
          height: Math.random() * 2 + 'px',
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
        }}
      />
    ))}
  </div>
);

export default StarBackground;