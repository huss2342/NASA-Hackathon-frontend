import { useState, useEffect } from 'react';
import { useGameState } from '../../context/GameStateContext';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import StoryText from '../ui/StoryText';
import SeasonHeader from '../ui/SeasonHeader';
import ComputerIcon from '../ui/ComputerIcon';
import ComputerModal from '../ui/ComputerModal';
import ResultsModal from '../ui/ResultsModal';
import Popup from '../ui/popup';

const InteractiveScreen = ({ scenario }) => {
  const { currentScenario, updateScores, goToScenario, money, sustainability } = useGameState();
  const [showModal, setShowModal] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showInitialPopup, setShowInitialPopup] = useState(false);
  const [lastScores, setLastScores] = useState({ money: 0, sustainability: 0 });

  useEffect(() => {
    if (currentScenario === scenario.id && scenario.showInitialPopup) {
      setShowInitialPopup(true);
    }
  }, [currentScenario, scenario.id, scenario.showInitialPopup]);

  const handleSubmit = (action, raisePercent, scores) => {
    updateScores(scores.money, scores.sustainability);
    setLastScores(scores);
    setShowModal(false);
    setShowResults(true);
  };

  const handleNext = () => {
    setShowResults(false);
    if (scenario.next) {
      goToScenario(scenario.next);
    }
  };

  return (
    <Screen active={currentScenario === scenario.id}>
      <PixelBackground customBackground={scenario.background} />
      
      {/* Overlay (like rain.gif) */}
      {scenario.overlay && (
        <img 
          src={scenario.overlay}
          alt="Weather overlay"
          className="absolute w-full h-full object-cover z-[2]"
        />
      )}

    {/* Bottom left image (like rock.png) */}
    {scenario.bottomLeftImage && (
    <img 
        src={scenario.bottomLeftImage}
        alt="Scene element"
        className="absolute bottom-0 left-0 z-[3] max-w-[300px]"
        style={{ transform: 'translate(-20%, 16%)' }}
    />
    )}
      
      {scenario.header && <SeasonHeader imageSrc={scenario.header} />}
      
      {scenario.showComputer && (
        <ComputerIcon onClick={() => setShowModal(true)} />
      )}

      {/* Score display */}
      <div className="absolute top-4 right-4 z-[100] bg-white rounded-lg p-4 border-2 border-black">
        <div className="text-black font-bold text-sm">
          <div>Money: ${money}</div>
          <div>Sustainability: {sustainability}</div>
        </div>
      </div>

      {/* Initial popup */}
      {showInitialPopup && (
        <Popup onClose={() => setShowInitialPopup(false)}>
          <p className="text-lg leading-relaxed">{scenario.text}</p>
        </Popup>
      )}

    {showModal && (
    <ComputerModal 
    onClose={() => setShowModal(false)}
    onSubmit={handleSubmit}
    scenario={scenario.id}
  />
)}

      {showResults && (
        <ResultsModal
          moneyChange={lastScores.money}
          sustainabilityChange={lastScores.sustainability}
          onNext={handleNext}
        />
      )}
    </Screen>
  );
};

export default InteractiveScreen;