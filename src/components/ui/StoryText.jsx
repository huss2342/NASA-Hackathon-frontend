const StoryText = ({ children }) => {
  return (
    <div className="
      bg-[rgba(22,33,62,0.9)] text-[#f1f1f1] 
      p-8 border-4 border-[#16213e] 
      max-w-[600px] text-lg leading-relaxed 
      z-10 shadow-[0_8px_0_#16213e] mb-8
      font-['Courier_New',_monospace]
    ">
      {children}
    </div>
  );
};

export default StoryText;
