import { useState } from 'react';

const ComputerIcon = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute top-4 left-4 z-[100] cursor-pointer transition-transform hover:scale-110"
    >
      <img 
        src="/computer.gif" 
        alt="Computer"
        className="w-[80px] h-[80px]"
      />
      {isHovered && (
        <div className="absolute top-full left-0 mt-2 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap">
          Check NASA Data
        </div>
      )}
    </button>
  );
};

export default ComputerIcon;