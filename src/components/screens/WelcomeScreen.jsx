import { useState } from 'react';
import { useGameState } from '../../context/GameStateContext';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import Button from '../ui/Button';

const WelcomeScreen = () => {
  const { currentScenario, startGame } = useGameState();
  const [name, setName] = useState('');

  const handleStart = () => {
    startGame(name);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleStart();
    }
  };

  return (
    <Screen active={currentScenario === 'welcome'}>
      <PixelBackground opacity={0.15} />
      <h1 
  className="text-[#e94560] text-[48px] mb-10 z-[1] tracking-[2px] font-bold"
  style={{ fontFamily: "'Silkscreen', monospace" }}
>
  FARM NAVIGATORS
</h1>
      <div className="z-10 mb-8">
        <label 
          htmlFor="playerName" 
          className="
            block text-[#f1f1f1] text-xl mb-2.5 
            [text-shadow:2px_2px_0_#16213e]
            font-['Courier_New',_monospace]
          "
        >
          Enter Your Name:
        </label>
        <input
          type="text"
          id="playerName"
          maxLength={20}
          placeholder="Farmer"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleKeyPress}
          className="
            w-[300px] p-4 
            font-['Courier_New',_monospace] text-xl 
            bg-[#16213e] text-[#f1f1f1] 
            border-4 border-[#0f3460] 
            outline-none text-center
            focus:border-[#e94560]
          "
        />
      </div>
      <Button onClick={handleStart}>BEGIN</Button>
    </Screen>
  );
};

export default WelcomeScreen;
