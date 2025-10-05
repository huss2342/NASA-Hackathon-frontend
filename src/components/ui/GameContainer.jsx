const GameContainer = ({ children }) => {
  return (
    <div className="
      w-[800px] h-[600px] 
      bg-[#0f3460] 
      border-8 border-[#16213e] 
      shadow-[0_0_40px_rgba(0,0,0,0.8)] 
      relative
      [image-rendering:pixelated]
    ">
      {children}
    </div>
  );
};

export default GameContainer;
