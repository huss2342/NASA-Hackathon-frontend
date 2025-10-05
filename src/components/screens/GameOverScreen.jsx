import { useGameState } from '../../context/GameStateContext';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import StoryText from '../ui/StoryText';
import Button from '../ui/Button';

const GameOverScreen = ({ scenario }) => {
  const { currentScenario, resetGame, playerName } = useGameState();
  const isVictory = scenario.type === 'victory';

  const handleRetry = () => {
    resetGame();
  };

  const displayText = scenario.text.replace('{playerName}', playerName);

  return (
    <Screen active={currentScenario === scenario.id}>
      <PixelBackground opacity={0.3} />
      
      <div className="text-center mb-6 text-6xl z-10">
        {isVictory ? '🎉' : '💀'}
      </div>

      <h1 className={`
        text-5xl mb-8 z-10 tracking-wider
        font-['Courier_New',_monospace]
        [text-shadow:4px_4px_0_#16213e]
        ${isVictory ? 'text-[#4ecca3]' : 'text-[#e94560]'}
      `}>
        {scenario.title}
      </h1>

      <StoryText>
        <div dangerouslySetInnerHTML={{ __html: displayText }} />
      </StoryText>

      <div className="flex gap-4">
        {(scenario.canRetry || scenario.canReplay) && (
          <Button onClick={handleRetry}>
            {isVictory ? 'PLAY AGAIN' : 'TRY AGAIN'}
          </Button>
        )}
      </div>

      {!isVictory && (
        <div className="text-[#f1f1f1] text-sm mt-6 z-10 font-['Courier_New',_monospace] max-w-[500px] text-center">
          💡 Tip: Pay close attention to NASA satellite data. It provides crucial insights for making informed farming decisions.
        </div>
      )}
    </Screen>
  );
};

export default GameOverScreen;
