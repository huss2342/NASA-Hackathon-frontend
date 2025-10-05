const ChoiceButton = ({ children, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full text-left
        bg-[#16213e] text-[#f1f1f1] 
        border-4 border-[#0f3460] 
        p-4 mb-3
        font-['Courier_New',_monospace] text-base
        transition-all duration-200
        ${disabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:border-[#e94560] hover:bg-[#1a2642] cursor-pointer'
        }
      `}
    >
      {children}
    </button>
  );
};

export default ChoiceButton;
