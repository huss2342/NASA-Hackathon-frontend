import { GameStateProvider } from './context/GameStateContext';
import { scenarios, isDecisionScenario, isGameOver } from './data/scenarios';
import GameContainer from './components/ui/GameContainer';
import WelcomeScreen from './components/screens/WelcomeScreen';
import StoryScreen from './components/screens/StoryScreen';
import DecisionScreen from './components/screens/DecisionScreen';
import GameOverScreen from './components/screens/GameOverScreen';
import EvaluationScreen from './components/screens/EvaluationScreen';
import AudioManager from './components/AudioManager';

function GameContent() {
  // Render all scenarios dynamically based on their type
  const renderScenarios = () => {
    return Object.values(scenarios).map((scenario) => {
      // Decision scenarios with choices
      if (isDecisionScenario(scenario)) {
        return <DecisionScreen key={scenario.id} scenario={scenario} />;
      }
      
      // Game over / Victory screens
      if (isGameOver(scenario)) {
        return <GameOverScreen key={scenario.id} scenario={scenario} />;
      }

      // Evaluation screen
      if (scenario.type === 'evaluation') {
        return <EvaluationScreen key={scenario.id} scenario={scenario} />;
      }
      
      // Regular story screens
      if (scenario.type === 'story') {
        // Check if it's one of the intro stories
        const storyNumbers = {
          story1: 1,
          story2: 2,
          story3: 3,
          story4: 4,
        };
        
        return (
          <StoryScreen 
            key={scenario.id} 
            scenario={scenario}
            storyNumber={storyNumbers[scenario.id]}
          />
        );
      }

      return null;
    });
  };

  return (
    <GameContainer>
      <AudioManager />
      <WelcomeScreen />
      {renderScenarios()}
    </GameContainer>
  );
}

function App() {
  return (
    <GameStateProvider>
      <GameContent />
    </GameStateProvider>
  );
}

export default App;
