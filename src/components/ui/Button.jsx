const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-[#e94560] text-white border-none px-10 py-4 
        font-['Courier_New',_monospace] text-xl cursor-pointer 
        shadow-[0_6px_0_#c23b52] z-10 
        transition-all duration-100 uppercase tracking-wider
        hover:bg-[#ff5277]
        active:translate-y-1 active:shadow-[0_2px_0_#c23b52]
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
