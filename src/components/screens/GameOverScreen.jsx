import { useGameState } from '../../context/GameStateContext';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import StoryText from '../ui/StoryText';
import Button from '../ui/Button';

const scenarioNames = {
  'january_intro': '❄️ Winter - January',
  'spring_intro': '🌸 Spring - April',
  'summer_intro': '☀️ Summer - July',
};

const GameOverScreen = ({ scenario }) => {
  const { currentScenario, resetGame, playerName, decisions, money, sustainability } = useGameState();
  const isVictory = scenario.type === 'victory';

  const handleRetry = () => {
    resetGame();
  };

  const displayText = scenario.text.replace('{playerName}', playerName);

  // Analyze decisions
  const analyzeDecision = (decision) => {
    const { outcome } = decision;
    const totalImpact = (outcome.money || 0) + (outcome.sustainability || 0);
    
    if (totalImpact > 30) return { rating: 'Excellent', color: 'text-green-400', emoji: '✅' };
    if (totalImpact > 0) return { rating: 'Good', color: 'text-blue-400', emoji: '👍' };
    if (totalImpact > -30) return { rating: 'Poor', color: 'text-yellow-400', emoji: '⚠️' };
    return { rating: 'Bad', color: 'text-red-400', emoji: '❌' };
  };

  return (
    <Screen active={currentScenario === scenario.id}>
      <PixelBackground opacity={0.3} />
      
      <div className="w-full h-full overflow-y-auto flex flex-col items-center py-8 px-4">
        <div className="text-center mb-6 text-6xl z-10">
          {isVictory ? '🎉' : '🌾'}
        </div>

        <h1 className={`
          text-4xl mb-6 z-10 tracking-wider
          font-['Courier_New',_monospace]
          [text-shadow:4px_4px_0_#16213e]
          ${isVictory ? 'text-[#4ecca3]' : 'text-[#e94560]'}
        `}>
          {scenario.title}
        </h1>

        <StoryText>
          <div dangerouslySetInnerHTML={{ __html: displayText }} />
        </StoryText>

        {/* Final Scores */}
        <div className="bg-[rgba(22,33,62,0.95)] border-4 border-[#16213e] p-6 mb-6 z-10 max-w-[600px] w-full">
          <h2 className="text-[#4ecca3] text-2xl mb-4 font-['Courier_New',_monospace] text-center">
            📊 Final Results
          </h2>
          <div className="space-y-3 font-['Courier_New',_monospace] text-[#f1f1f1] text-lg">
            <div className="flex justify-between items-center">
              <span>💰 Money:</span>
              <span className={`text-2xl font-bold ${money >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                ${money}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>🌱 Sustainability:</span>
              <span className={`text-2xl font-bold ${sustainability >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {sustainability}
              </span>
            </div>
          </div>
        </div>

        {/* Decision Review */}
        {decisions.length > 0 && (
          <div className="bg-[rgba(22,33,62,0.95)] border-4 border-[#16213e] p-6 mb-6 z-10 max-w-[600px] w-full">
            <h2 className="text-[#4ecca3] text-2xl mb-4 font-['Courier_New',_monospace] text-center">
              📋 Your Decisions
            </h2>
            <div className="space-y-4">
              {decisions.map((decision, index) => {
                const analysis = analyzeDecision(decision);
                const scenarioName = scenarioNames[decision.scenarioId] || decision.scenarioId;
                
                return (
                  <div key={index} className="bg-[rgba(15,52,96,0.7)] border-2 border-[#0f3460] p-4 rounded">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-2xl">{analysis.emoji}</span>
                      <div className="flex-1">
                        <div className="text-[#f1f1f1] font-['Courier_New',_monospace] font-bold mb-1">
                          {scenarioName}
                        </div>
                        <div className="text-[#ccc] font-['Courier_New',_monospace] text-sm mb-2">
                          {decision.choiceText}
                        </div>
                        <div className="flex gap-4 text-sm font-['Courier_New',_monospace]">
                          <span className={decision.outcome.money >= 0 ? 'text-green-400' : 'text-red-400'}>
                            💰 {decision.outcome.money > 0 ? '+' : ''}{decision.outcome.money}
                          </span>
                          <span className={decision.outcome.sustainability >= 0 ? 'text-green-400' : 'text-red-400'}>
                            🌱 {decision.outcome.sustainability > 0 ? '+' : ''}{decision.outcome.sustainability}
                          </span>
                        </div>
                      </div>
                      <div className={`${analysis.color} font-['Courier_New',_monospace] text-sm font-bold`}>
                        {analysis.rating}
                      </div>
                    </div>
                    
                    {/* Show why it was good or bad */}
                    {decision.fullDecision && (
                      <div className="mt-2 pt-2 border-t border-[#0f3460] text-xs text-[#999] font-['Courier_New',_monospace]">
                        💡 {decision.fullDecision}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex gap-4 z-10">
          {(scenario.canRetry || scenario.canReplay) && (
            <Button onClick={handleRetry}>
              {isVictory ? 'PLAY AGAIN' : 'TRY AGAIN'}
            </Button>
          )}
        </div>

        {!isVictory && decisions.length > 0 && (
          <div className="text-[#000000] text-sm mt-6 z-10 font-['Courier_New',_monospace] max-w-[500px] text-center">
            💡 Review your decisions above to see how NASA satellite data could have helped you make better choices.
          </div>
        )}
      </div>
    </Screen>
  );
};

export default GameOverScreen;
