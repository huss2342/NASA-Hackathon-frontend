import { useState } from 'react';
import { useGameState } from '../../context/GameStateContext';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import StoryText from '../ui/StoryText';
import ChoiceButton from '../ui/ChoiceButton';
import SeasonHeader from '../ui/SeasonHeader';

const DecisionScreen = ({ scenario }) => {
  const { currentScenario, goToScenario } = useGameState();
  
  const handleChoice = (choice) => {
    goToScenario(choice.next);
  };

  return (
    <Screen active={currentScenario === scenario.id}>
      <PixelBackground customBackground={scenario.background} />
      
      {/* Header image if present */}
      {scenario.header && <SeasonHeader imageSrc={scenario.header} />}

      <div className="mt-32 w-full max-w-[700px] z-10">
        <h2 className="text-[#e94560] text-2xl mb-4 text-center font-bold">
          {scenario.title}
        </h2>
        
        <StoryText>
          <p>{scenario.description}</p>
        </StoryText>

        {/* Choices */}
        <div className="space-y-2">
          {scenario.choices.map((choice) => (
            <ChoiceButton
              key={choice.id}
              onClick={() => handleChoice(choice)}
            >
              {choice.text}
            </ChoiceButton>
          ))}
        </div>
      </div>
    </Screen>
  );
};

export default DecisionScreen;