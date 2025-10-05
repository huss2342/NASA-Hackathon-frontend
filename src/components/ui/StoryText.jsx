const StoryText = ({ children }) => {
  return (
    <div className="bg-[rgba(210,180,140,0.7)] text-black p-[30px] max-w-[600px] text-[18px] leading-[1.8] z-[1] mb-[30px] rounded-[15px] border-2 border-black">
      {children}
    </div>
  );
};

export default StoryText;