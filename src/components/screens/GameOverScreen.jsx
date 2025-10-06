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

  // Determine overall performance tier
  const getPerformanceTier = () => {
    // Success: Money ≥ 40 AND Sustainability ≥ 20
    if (money >= 40 && sustainability >= 20) {
      return { 
        tier: 'Success', 
        badge: '/gold_badge.GIF',
        color: 'text-yellow-400',
        message: 'You effectively used NASA satellite data to balance farm profitability with environmental sustainability. Excellent data-driven decisions!'
      };
    }
    // Struggled: Money < 0 OR Sustainability < -20
    if (money < 0 || sustainability < -20) {
      return { 
        tier: 'Struggled', 
        badge: '/bronze_badge.GIF',
        color: 'text-orange-600',
        message: 'The farm became unsustainable. NASA satellite data could have helped you balance economic needs with environmental health before reaching crisis levels.'
      };
    }
    // Survived: Everything in between
    return { 
      tier: 'Survived', 
      badge: '/silver_badge.GIF',
      color: 'text-gray-400',
      message: 'You survived but struggled to balance profits and sustainability. Better use of NASA data could have helped you optimize both economic and environmental outcomes.'
    };
  };

  // Analyze individual decisions with 3-tier system
  const analyzeDecision = (decision) => {
    const { outcome } = decision;
    const totalImpact = (outcome.money || 0) + (outcome.sustainability || 0);
    
    // Success: positive total impact
    if (totalImpact > 0) return { rating: 'Success', color: 'text-green-400', emoji: '🌟' };
    // Struggled: significantly negative impact
    if (totalImpact < -20) return { rating: 'Struggled', color: 'text-red-400', emoji: '❌' };
    // Survived: neutral/slightly negative
    return { rating: 'Survived', color: 'text-yellow-400', emoji: '⚖️' };
  };

  const performanceTier = getPerformanceTier();

  return (
    <Screen active={currentScenario === scenario.id}>
      <PixelBackground opacity={0.3} 
        customBackground={scenario.background}
      />
      
      <div className="w-full h-full overflow-y-auto flex flex-col items-center py-8 px-4">
        {/* Performance Badge */}
        <div className="text-center mb-4 z-10">
          <img 
            src={performanceTier.badge} 
            alt={`${performanceTier.tier} Badge`}
            className="w-32 h-32 mx-auto mb-2"
          />
          <div className={`text-4xl font-bold font-['Courier_New',_monospace] ${performanceTier.color}`}>
            {performanceTier.tier}
          </div>
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
          {/* Performance Message */}
          <div className="mb-6">
            <p className="text-lg">
              {performanceTier.message}
            </p>
          </div>

          {/* Final Scores */}
          <div className="mt-6">
            <h2 className="text-[#4ecca3] text-2xl mb-4 text-center">
              Final Results
            </h2>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img src="/money.png" alt="Money" className="w-6 h-6" />
                  <span>Money:</span>
                </div>
                <span
                  className={`text-2xl font-bold ${
                    money >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  ${money}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img src="/sustainability_icon.png" alt="Sustainability" className="w-6 h-6" />
                  <span>Sustainability:</span>
                </div>
                <span
                  className={`text-2xl font-bold ${
                    sustainability >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {sustainability}
                </span>
              </div>
            </div>
          </div>
        </StoryText>

        {/* Decision Review */}
        {decisions.length > 0 && (
          <StoryText>
            <h2 className="text-black text-2xl mb-4 font-['Courier_New',_monospace] text-center font-bold">
              📋 Your Decisions
            </h2>
            <div className="space-y-4">
              {decisions.map((decision, index) => {
                const analysis = analyzeDecision(decision);
                const scenarioName = scenarioNames[decision.scenarioId] || decision.scenarioId;
                
                return (
                  <div key={index} className="bg-gray-100 border-2 border-black p-4 rounded mb-3">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-2xl">{analysis.emoji}</span>
                      <div className="flex-1">
                        <div className="text-black font-['Courier_New',_monospace] font-bold mb-1">
                          {scenarioName}
                        </div>
                        <div className="text-gray-700 font-['Courier_New',_monospace] text-sm mb-2">
                          {decision.choiceText}
                        </div>
                        <div className="flex gap-4 text-sm font-['Courier_New',_monospace]">
                          <span className={decision.outcome.money >= 0 ? 'text-green-600' : 'text-red-600'}>
                            💰 {decision.outcome.money > 0 ? '+' : ''}{decision.outcome.money}
                          </span>
                          <span className={decision.outcome.sustainability >= 0 ? 'text-green-600' : 'text-red-600'}>
                            🌱 {decision.outcome.sustainability > 0 ? '+' : ''}{decision.outcome.sustainability}
                          </span>
                        </div>
                      </div>
                      <div className={`${analysis.color === 'text-green-400' ? 'text-green-600' : analysis.color === 'text-red-400' ? 'text-red-600' : 'text-yellow-600'} font-['Courier_New',_monospace] text-sm font-bold`}>
                        {analysis.rating}
                      </div>
                    </div>
                    
                    {/* Show why it was good or bad */}
                    {decision.fullDecision && (
                      <div className="mt-2 pt-2 border-t border-gray-300 text-xs text-gray-600 font-['Courier_New',_monospace]">
                        💡 {decision.fullDecision}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </StoryText>
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