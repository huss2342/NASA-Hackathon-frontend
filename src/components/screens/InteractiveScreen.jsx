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
  const { currentScenario, updateScores, goToScenario, money, sustainability, makeDecision } = useGameState();
  const [showModal, setShowModal] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showInitialPopup, setShowInitialPopup] = useState(false);
  const [lastScores, setLastScores] = useState({ money: 0, sustainability: 0 });
  const [lastDecision, setLastDecision] = useState(null);

  useEffect(() => {
    if (currentScenario === scenario.id && scenario.showInitialPopup) {
      setShowInitialPopup(true);
    }
  }, [currentScenario, scenario.id, scenario.showInitialPopup]);

  const handleSubmit = (action, raisePercent, scores, decision) => {
    updateScores(scores.money, scores.sustainability);
    setLastScores(scores);
    setLastDecision(decision);
    
    // Record the decision in game state
    makeDecision(
      scenario.id,
      `${action} (Raise by ${raisePercent}%)`,
      scores,
      {
        action,
        raisePercent,
        fullDecision: decision,
      }
    );
    
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

      
      {scenario.header && <SeasonHeader imageSrc={scenario.header} />}
      
      {scenario.showComputer && (
        <ComputerIcon onClick={() => setShowModal(true)} />
      )}

    {/* Score display */}
    <div className="absolute top-4 right-4 z-[100] bg-white rounded-lg p-4 border-2 border-black">
        <div className="text-black font-bold text-sm flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <img src='/money.png' className="w-6 h-6" alt="Money" />
                <span>Money: ${money}</span>
            </div>
            <div className="flex items-center gap-2">
                <img src='/sustainability_score.png' className="w-6 h-6" alt="Sustainability" />
                <span>Sustainability: {sustainability}</span>
            </div>
        </div>
    </div>
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

    {/* Farmer gif in bottom right */}
    {(scenario.id === 'january_intro' || scenario.id === 'spring_intro' || scenario.id === 'summer_intro') && (
    <img 
        src="/farmer.gif"
        alt="Farmer"
        className="absolute bottom-4 right-0 z-[3] w-[400px] h-[400px]"
    />
    )}

      {showResults && (
        <ResultsModal
          moneyChange={lastScores.money}
          sustainabilityChange={lastScores.sustainability}
          decision={lastDecision} // PASS THE DECISION
          onNext={handleNext}
        />
      )}
    </Screen>
  );
};

export default InteractiveScreen;