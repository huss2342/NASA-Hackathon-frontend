import { useState } from 'react';

const ComputerModal = ({ onClose, onSubmit, scenario }) => {
  const [action, setAction] = useState(null);
  const [raisePercent, setRaisePercent] = useState(0);
  const [irrigationLevel, setIrrigationLevel] = useState(null);
  const [showGraph, setShowGraph] = useState(false);

  const calculateScores = () => {
    // Winter scenario (January)
    if (scenario === 'january_intro') {
      if (action === 'nothing') {
        // return explicit scores instead of mutating undefined variables
        return { money: -100, sustainability: 10 };
      }

      if (action === 'raise') {
        let money = -raisePercent;
        let sustainability = 0;

        if (raisePercent < 40) {
          money -= 100;
        }

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
    }

    // Spring scenario
    if (scenario === 'spring_intro') {
      if (action === 'keep') {
        return { money: 100, sustainability: 20 }; // Hidden: +100 money, +10 base + 10 shown
      }

      if (action === 'irrigate') {
        if (irrigationLevel === 'low') {
          return { money: -50, sustainability: -10 };
        } else if (irrigationLevel === 'medium') {
          return { money: -100, sustainability: -20 };
        } else if (irrigationLevel === 'high') {
          return { money: -150, sustainability: -30 };
        }
      }
    }

    return { money: 0, sustainability: 0 };
  };

  const handleSubmit = () => {
    const scores = calculateScores();
    onSubmit(action, irrigationLevel || raisePercent, scores);
  };

  const isSpring = scenario === 'spring_intro';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200]">
      <div className="bg-white rounded-[15px] p-8 max-w-[600px] w-full mx-4 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-black">NASA Data</h2>
        
        {!isSpring ? (
          // Winter data
          <div className="mb-6 text-black">
            <p className="mb-2">Parameters:</p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Location: Monterey, CA</li>
              <li>Flooding Threshold: 1.51 ft above MHHW</li>
              <li>Scenario: Intermediate U.S. Interagency Sea Level Rise projection</li>
            </ul>
            <p className="mt-4 font-bold">Prediction: 3 flooding days in January</p>
            <button onClick={() => setShowGraph(!showGraph)} 
          className="mt-4 px-4 py-2 bg-[#4ecca3] text-white font-bold rounded hover:bg-[#45b494]"
>
  {showGraph ? 'Hide Graph' : 'View Graph →'}
</button>

{showGraph && (
  <div className="mt-4">
   <img
  src="/flood_graph.png"
  alt="Flooding Graph"
  className="max-w-[300px] mx-auto rounded-lg border border-gray-300 shadow-md"
/>
<div className="mt-2 text-center text-xs text-gray-700">
  <div className="flex justify-center items-center gap-2">
    <div className="w-6 h-[2px] bg-blue-700"></div>
    <span>dark blue line shows the expected # of floodings per month.</span>
  </div>
</div>


    <p className="text-sm text-gray-600 mt-2 text-center">
      Projected flood frequency for Monterey County. 
    </p>
  </div>
)}
          </div>
        ) : (
        <div className="mb-6 text-black">
        <p className="mb-2">Soil Moisture Analysis:</p>
        <ul className="list-disc ml-6 space-y-1 text-sm">
            <li>Past 7 days precipitation: 14 inches</li>
            <li>Predicted flooding days: 0</li>
            <li className="text-gray-600 italic">(In the case of a drought, irrigation is beneficial. However, using water lowers your sustainability score.)</li>
        </ul>
        </div>
        )}

        <div className="mb-6">
          <p className="text-black font-bold mb-3">What would you like to do?</p>
          
          {!isSpring ? (
            // Winter choices
            <>
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
            </>
          ) : (
            // Spring choices
            <>
              <button
  onClick={() => setAction('keep')}
  className={`w-full p-4 mb-3 rounded border-2 text-left ${
    action === 'keep' 
      ? 'border-[#4ecca3] bg-[#4ecca3] bg-opacity-20' 
      : 'border-gray-300 hover:border-gray-400'
  }`}
>
  <div className="flex items-center justify-between">
    <span className="text-black font-bold">Keep soil moisture as is</span>
    <div className="flex items-center gap-2">
      <span className="text-green-600">+10</span>
      <img src="/sustainability_score.png" alt="Sustainability" className="w-6 h-6" />
    </div>
  </div>
</button>

              <button
                onClick={() => setAction('irrigate')}
                className={`w-full p-4 mb-3 rounded border-2 text-left ${
                  action === 'irrigate' 
                    ? 'border-[#4ecca3] bg-[#4ecca3] bg-opacity-20' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <span className="text-black font-bold">Increase soil moisture through drip irrigation</span>
              </button>

              {action === 'irrigate' && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                  <label className="text-black font-bold mb-2 block">
                    Irrigation level:
                  </label>
                  <select
                    value={irrigationLevel || ''}
                    onChange={(e) => setIrrigationLevel(e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded text-black"
                  >
                    <option value="">Select level...</option>
                    <option value="low">Low increase (-10 sustainability)</option>
                    <option value="medium">Medium increase (-20 sustainability)</option>
                    <option value="high">High increase (-30 sustainability)</option>
                  </select>
                </div>
              )}
            </>
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
            disabled={action === null || (action === 'irrigate' && !irrigationLevel)}
            className={`flex-1 px-6 py-3 rounded ${
              action === null || (action === 'irrigate' && !irrigationLevel)
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