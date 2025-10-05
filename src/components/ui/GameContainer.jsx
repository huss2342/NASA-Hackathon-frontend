const GameContainer = ({ children }) => {
  return (
    <div className="w-[1200px] h-[800px] bg-[#0f3460] shadow-[0_0_40px_rgba(0,0,0,0.8)] relative [image-rendering:pixelated]">
      {children}
    </div>
  );
};

export default GameContainer;
