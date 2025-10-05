import { useEffect } from 'react';
import { useGameState } from '../../context/GameStateContext';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import StoryText from '../ui/StoryText';

const EvaluationScreen = ({ scenario }) => {
  const { currentScenario, resources, goToScenario, setGameStatus } = useGameState();

  useEffect(() => {
    if (currentScenario === scenario.id) {
      // Wait 3 seconds then evaluate
      const timer = setTimeout(() => {
        // Win condition: money >= 1500 and at least 30% of other resources
        if (resources.money >= 1500 && resources.water >= 30 && resources.time >= 30) {
          setGameStatus('won');
          goToScenario('game_victory');
        } else {
          setGameStatus('lost');
          goToScenario('game_over_poor');
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentScenario, resources, goToScenario, setGameStatus, scenario.id]);

  return (
    <Screen active={currentScenario === scenario.id}>
      <PixelBackground />
      
      <h2 className="text-[#e94560] text-3xl mb-6 font-['Courier_New',_monospace] text-center [text-shadow:2px_2px_0_#16213e] z-10">
        {scenario.title}
      </h2>

      <StoryText>
        <p className="text-center">{scenario.text}</p>
        <div className="mt-6 text-center">
          <div className="inline-block animate-pulse text-4xl">⏳</div>
        </div>
      </StoryText>

      <div className="mt-4 bg-[rgba(22,33,62,0.95)] border-4 border-[#16213e] p-6 z-10 max-w-[500px]">
        <h3 className="text-[#4ecca3] text-xl mb-4 font-['Courier_New',_monospace] text-center">
          Final Resources
        </h3>
        <div className="space-y-2 font-['Courier_New',_monospace] text-[#f1f1f1]">
          <div className="flex justify-between">
            <span>💧 Water Supply:</span>
            <span className="text-[#4ecca3]">{resources.water}/100</span>
          </div>
          <div className="flex justify-between">
            <span>💰 Money:</span>
            <span className="text-[#4ecca3]">${resources.money}</span>
          </div>
          <div className="flex justify-between">
            <span>⏰ Time Remaining:</span>
            <span className="text-[#4ecca3]">{resources.time}/100</span>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default EvaluationScreen;
