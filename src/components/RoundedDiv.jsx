import React from 'react';

const RoundedDiv = ({ size, width, height }) => (
  <div className="flex justify-start gap-4 my-2">
    {Array.from({ length: size }, (v, index) => (
      <button
        key={index + 1}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className="rounded-full bg-white text-blue-500 flex items-center justify-center font-bold border border-blue-700"
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default RoundedDiv;
