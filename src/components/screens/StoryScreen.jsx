import { useGameState } from '../../context/GameStateContext';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import StoryText from '../ui/StoryText';
import Button from '../ui/Button';

const StoryScreen = ({ scenario, storyNumber }) => {
  const { currentScenario, goToScenario, playerName } = useGameState();

  const handleContinue = () => {
    goToScenario(scenario.next);
  };

  // Replace player name placeholder in text if it exists
  const displayText = scenario.text.replace('{playerName}', playerName);

  return (
    <Screen active={currentScenario === scenario.id}>
      <PixelBackground />
      <StoryText>
        <span dangerouslySetInnerHTML={{ __html: displayText }} />
      </StoryText>
      <Button onClick={handleContinue}>
        {storyNumber === 4 ? 'START FARMING' : 'CONTINUE'}
      </Button>
      {storyNumber && (
        <div className="text-[#e94560] text-sm mt-5 z-10 font-['Courier_New',_monospace]">
          {storyNumber} / 4
        </div>
      )}
    </Screen>
  );
};

export default StoryScreen;
