import { GameProvider, useGame } from './context/GameContext';
import GameContainer from './components/ui/GameContainer';
import WelcomeScreen from './components/screens/WelcomeScreen';
import StoryScreen from './components/screens/StoryScreen';
import GameScreen from './components/screens/GameScreen';
import AudioManager from './components/AudioManager';

const storyData = [
  {
    number: 1,
    text: `It's been a long year. In the mail you receive rusty key and a note: "The farm is yours now, dear. I know you'll bring it back to life."`,
    nextScreen: 'story2',
  },
  {
    number: 2,
    text: 'You have a job in New York City. A life. You can\'t just leave that behind.',
    nextScreen: 'story3',
  },
  {
    number: 3,
    text: 'But you remember the summers at the farm as a child...the smell of fresh soil, the satisfaction of harvest. But that was a long time ago.',
    nextScreen: 'story4',
  },
  {
    number: 4,
    text: '"What if...?" You think to yourself. You have a chance to start over, to build something real... <br><br>Welcome home, <span class="text-[#4ecca3]">{playerName}</span>.',
    nextScreen: 'game',
  },
];

function GameContent() {
  const { currentScreen } = useGame();

  return (
    <GameContainer>
      <AudioManager />
      <WelcomeScreen />
      {storyData.map((story) => (
        <StoryScreen
          key={story.number}
          storyNumber={story.number}
          text={story.text}
          nextScreen={story.nextScreen}
          isActive={currentScreen === `story${story.number}`}
        />
      ))}
      <GameScreen />
    </GameContainer>
  );
}

function App() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}

export default App;
