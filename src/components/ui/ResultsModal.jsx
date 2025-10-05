const ResultsModal = ({ moneyChange, sustainabilityChange, onNext }) => {
  const moneyGif = moneyChange >= 0 ? '/money_increase.gif' : '/money_decrease.gif';
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200]">
      <div className="bg-white rounded-[15px] p-8 max-w-[500px] w-full mx-4">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">Results</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
            <span className="text-black font-bold">Money:</span>
            <div className="flex items-center gap-3">
              <span className={`text-2xl font-bold ${moneyChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {moneyChange >= 0 ? '+' : ''}{moneyChange}
              </span>
              <img src={moneyGif} alt="Money change" className="w-12 h-12" />
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
            <span className="text-black font-bold">Sustainability:</span>
            <span className={`text-2xl font-bold ${sustainabilityChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {sustainabilityChange >= 0 ? '+' : ''}{sustainabilityChange}
            </span>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-[#e94560] text-white px-6 py-3 rounded hover:bg-[#ff5277] font-bold"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default ResultsModal;