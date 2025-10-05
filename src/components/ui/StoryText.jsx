const StoryText = ({ children }) => {
  return (
    <div className="bg-white text-black p-[30px] max-w-[600px] text-[18px] leading-[1.8] z-[1] mb-[30px] rounded-[15px] border-4 border-black">
      {children}
    </div>
  );
};

export default StoryText;