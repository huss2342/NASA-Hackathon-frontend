import { useGame } from '../../context/GameContext';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import StoryText from '../ui/StoryText';
import Button from '../ui/Button';

const StoryScreen = ({ storyNumber, text, nextScreen, isActive }) => {
  const { nextScreen: goToNextScreen, playerName } = useGame();

  const handleContinue = () => {
    goToNextScreen(nextScreen);
  };

  // Replace player name placeholder in text if it exists
  const displayText = text.replace('{playerName}', playerName);

  return (
    <Screen active={isActive}>
      <PixelBackground />
      <StoryText>
        <span dangerouslySetInnerHTML={{ __html: displayText }} />
      </StoryText>
      <Button onClick={handleContinue}>
        {storyNumber === 4 ? 'START FARMING' : 'CONTINUE'}
      </Button>
      <div className="text-[#e94560] text-sm mt-5 z-10 font-['Courier_New',_monospace]">
        {storyNumber} / 4
      </div>
    </Screen>
  );
};

export default StoryScreen;
