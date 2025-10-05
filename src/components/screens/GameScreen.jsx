import { useGame } from '../../context/GameContext';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import StoryText from '../ui/StoryText';

const GameScreen = () => {
  const { currentScreen, playerName } = useGame();

  return (
    <Screen active={currentScreen === 'game'}>
      <PixelBackground />
      <StoryText>
        Welcome, <span className="text-[#4ecca3]">{playerName}</span>! <br /><br />
        This is where your farming adventure begins...
      </StoryText>
    </Screen>
  );
};

export default GameScreen;
