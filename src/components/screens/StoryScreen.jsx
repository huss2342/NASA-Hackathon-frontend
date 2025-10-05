import { useGameState } from '../../context/GameStateContext';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import StoryText from '../ui/StoryText';
import Button from '../ui/Button';
import SeasonHeader from '../ui/SeasonHeader';

const StoryScreen = ({ scenario, storyNumber }) => {
  const { currentScenario, goToScenario, playerName } = useGameState();

  const handleContinue = () => {
    goToScenario(scenario.next);
  };

  const displayText = scenario.text.replace('{playerName}', playerName);

  return (
    <Screen active={currentScenario === scenario.id}>
      <PixelBackground customBackground={scenario.background} />
      
      {/* Header image if present */}
      {scenario.header && <SeasonHeader imageSrc={scenario.header} />}

      <StoryText>
        <span dangerouslySetInnerHTML={{ __html: displayText }} />
        
        {/* Bullet points if present */}
        {scenario.bulletPoints && (
          <ul className="list-disc ml-6 mt-4 space-y-2">
            {scenario.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </StoryText>
      
      <Button onClick={handleContinue}>
        {storyNumber === 4 ? 'START FARMING' : 'CONTINUE'}
      </Button>
      
      {storyNumber && (
        <div className="text-[#e94560] text-[14px] mt-5 z-[1]">
          {storyNumber} / 4
        </div>
      )}
    </Screen>
  );
};

export default StoryScreen;
