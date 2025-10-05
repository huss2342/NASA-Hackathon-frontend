import { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [musicPlaying, setMusicPlaying] = useState(false);

  const startGame = (name) => {
    setPlayerName(name || 'Farmer');
    setCurrentScreen('story1');
    setMusicPlaying(true);
  };

  const nextScreen = (screen) => {
    setCurrentScreen(screen);
  };

  const value = {
    playerName,
    currentScreen,
    musicPlaying,
    startGame,
    nextScreen,
    setPlayerName,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
