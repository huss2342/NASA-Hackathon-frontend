import { GameStateProvider } from './context/GameStateContext';
import { scenarios } from './data/scenarios';
import GameContainer from './components/ui/GameContainer';
import WelcomeScreen from './components/screens/WelcomeScreen';
import StoryScreen from './components/screens/StoryScreen';
import AudioManager from './components/AudioManager';

function GameContent() {
  const renderScenarios = () => {
    return Object.values(scenarios).map((scenario) => {
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