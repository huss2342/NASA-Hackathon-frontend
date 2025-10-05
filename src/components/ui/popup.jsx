const Popup = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200]">
      <div className="bg-white rounded-[15px] p-8 max-w-[600px] w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 hover:opacity-70 transition-opacity"
        >
          <img src="/x.png" alt="Close" className="w-full h-full" />
        </button>
        <div className="text-black pr-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;