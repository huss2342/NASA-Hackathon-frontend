import { useState } from 'react';

const ComputerModal = ({ onClose, onSubmit }) => {
  const [action, setAction] = useState(null); // null, 'nothing', or 'raise'
  const [raisePercent, setRaisePercent] = useState(0);

  const calculateScores = () => {
    if (action === 'nothing') {
        money-=100;
        sustainability+=10;
      return { money, sustainability};
    }

    if (action === 'raise') {
      let money = -raisePercent;
      let sustainability = 0;

      // Money calculation
      if (raisePercent < 40) {
        money -= 100; // Extra penalty for not raising enough
      }

      // Sustainability calculation
      if (raisePercent === 0) sustainability +=10;
      if (raisePercent === 10) sustainability = -80;
      else if (raisePercent === 20) sustainability = -90;
      else if (raisePercent === 30) sustainability = -100;
      else if (raisePercent === 40) sustainability = 10;
      else if (raisePercent === 50) sustainability = -10;
      else if (raisePercent === 60) sustainability = -20;
      else if (raisePercent === 70) sustainability = -30;
      else if (raisePercent === 80) sustainability = -40;
      else if (raisePercent === 90) sustainability = -50;
      else if (raisePercent === 100) sustainability = -60;

      return { money, sustainability };
    }

    return { money, sustainability};
  };

  const handleSubmit = () => {
    const scores = calculateScores();
    onSubmit(action, raisePercent, scores);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200]">
      <div className="bg-white rounded-[15px] p-8 max-w-[600px] w-full mx-4 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-black">NASA Flooding Data</h2>
        
        <div className="mb-6 text-black">
          <p className="mb-2">Parameters:</p>
          <ul className="list-disc ml-6 space-y-1 text-sm">
            <li>Location: Monterey, CA</li>
            <li>Flooding Threshold: 1.51 ft above MHHW</li>
            <li>Scenario: Intermediate U.S. Interagency Sea Level Rise projection</li>
          </ul>
          <p className="mt-4 font-bold">Prediction: 3 flooding days in January</p>
        </div>

        <div className="mb-6">
          <p className="text-black font-bold mb-3">What would you like to do?</p>
          
          <button
            onClick={() => setAction('nothing')}
            className={`w-full p-4 mb-3 rounded border-2 text-left ${
              action === 'nothing' 
                ? 'border-[#4ecca3] bg-[#4ecca3] bg-opacity-20' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <span className="text-black font-bold">Do nothing</span>
          </button>

          <button
            onClick={() => setAction('raise')}
            className={`w-full p-4 mb-3 rounded border-2 text-left ${
              action === 'raise' 
                ? 'border-[#4ecca3] bg-[#4ecca3] bg-opacity-20' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <span className="text-black font-bold">Raise the beds</span>
          </button>

          {action === 'raise' && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <label className="text-black font-bold mb-2 block">
                Raise beds by what percentage?
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={raisePercent}
                onChange={(e) => setRaisePercent(Number(e.target.value))}
                className="w-full mb-2"
              />
              <div className="text-center text-2xl font-bold text-black mb-2">
                {raisePercent}%
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-400 text-white px-6 py-3 rounded hover:bg-gray-500"
          >
            CANCEL
          </button>
          <button
            onClick={handleSubmit}
            disabled={action === null}
            className={`flex-1 px-6 py-3 rounded ${
              action === null
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#e94560] text-white hover:bg-[#ff5277]'
            }`}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComputerModal;