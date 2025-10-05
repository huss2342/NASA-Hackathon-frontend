import { useState } from 'react';
import { useGameState } from '../../context/GameStateContext';
import { getScenario } from '../../data/scenarios';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import StoryText from '../ui/StoryText';
import ChoiceButton from '../ui/ChoiceButton';
import NASADataPanel from '../ui/NASADataPanel';
import ResourceBar from '../ui/ResourceBar';

const DecisionScreen = ({ scenario }) => {
  const { 
    currentScenario, 
    resources, 
    makeDecision, 
    updateResources, 
    goToScenario 
  } = useGameState();
  
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleChoice = (choice) => {
    setSelectedChoice(choice);
    setShowFeedback(true);
    
    // Record the decision
    makeDecision(scenario.id, choice.id, choice.outcome);
    
    // Update resources based on choice
    updateResources(choice.outcome);
  };

  const handleContinue = () => {
    if (selectedChoice) {
      goToScenario(selectedChoice.next);
      setSelectedChoice(null);
      setShowFeedback(false);
    }
  };

  return (
    <Screen active={currentScenario === scenario.id}>
      <PixelBackground />
      
      {/* Resource Display */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <div className="bg-[rgba(22,33,62,0.95)] border-4 border-[#16213e] p-4">
          <ResourceBar label="Water Supply" value={resources.water} max={100} icon="💧" color="bg-blue-500" />
          <ResourceBar label="Money" value={resources.money} max={2000} icon="💰" color="bg-green-500" />
          <ResourceBar label="Time" value={resources.time} max={100} icon="⏰" color="bg-yellow-500" />
        </div>
      </div>

      <div className="mt-32 w-full max-w-[700px] z-10">
        {!showFeedback ? (
          <>
            <h2 className="text-[#e94560] text-2xl mb-4 font-['Courier_New',_monospace] text-center [text-shadow:2px_2px_0_#16213e]">
              {scenario.title}
            </h2>
            
            <StoryText>
              <p className="mb-4">{scenario.description}</p>
            </StoryText>

            {/* NASA Data Panel */}
            {scenario.nasaData && <NASADataPanel data={scenario.nasaData} />}

            {/* Choices */}
            <div className="space-y-2">
              {scenario.choices.map((choice) => (
                <ChoiceButton
                  key={choice.id}
                  onClick={() => handleChoice(choice)}
                >
                  <div className="flex justify-between items-start">
                    <span>{choice.text}</span>
                    {choice.outcome && (
                      <span className="text-xs text-[#888] ml-2">
                        {choice.outcome.water && `💧${choice.outcome.water > 0 ? '+' : ''}${choice.outcome.water}`}
                        {choice.outcome.money && ` 💰${choice.outcome.money > 0 ? '+' : ''}${choice.outcome.money}`}
                        {choice.outcome.time && ` ⏰${choice.outcome.time > 0 ? '+' : ''}${choice.outcome.time}`}
                      </span>
                    )}
                  </div>
                </ChoiceButton>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className={`text-2xl mb-4 font-['Courier_New',_monospace] text-center [text-shadow:2px_2px_0_#16213e] ${
              selectedChoice?.outcome.success ? 'text-[#4ecca3]' : 'text-[#e94560]'
            }`}>
              {selectedChoice?.outcome.success ? '✓ Good Choice!' : '✗ Poor Decision'}
            </h2>
            
            <StoryText>
              <p>{selectedChoice?.feedback}</p>
            </StoryText>

            <button
              onClick={handleContinue}
              className="
                w-full bg-[#e94560] text-white border-none px-10 py-4 
                font-['Courier_New',_monospace] text-xl cursor-pointer 
                shadow-[0_6px_0_#c23b52] 
                transition-all duration-100 uppercase tracking-wider
                hover:bg-[#ff5277]
                active:translate-y-1 active:shadow-[0_2px_0_#c23b52]
              "
            >
              CONTINUE
            </button>
          </>
        )}
      </div>
    </Screen>
  );
};

export default DecisionScreen;
