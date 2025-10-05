import { createContext, useContext, useState, useCallback } from 'react';

const GameStateContext = createContext();

export const useGameState = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};

export const GameStateProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');
  const [currentScenario, setCurrentScenario] = useState('welcome');
  const [money, setMoney] = useState(500);
  const [sustainability, setSustainability] = useState(0);
  const [decisions, setDecisions] = useState([]);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const makeDecision = useCallback((scenarioId, choice, outcome) => {
    const decision = {
      scenarioId,
      choice,
      outcome,
      timestamp: Date.now(),
    };
    setDecisions(prev => [...prev, decision]);
  }, []);

  const updateScores = useCallback((moneyChange, sustainabilityChange) => {
    setMoney(prev => prev + moneyChange);
    setSustainability(prev => prev + sustainabilityChange);
  }, []);

  const goToScenario = useCallback((scenarioId) => {
    setCurrentScenario(scenarioId);
  }, []);

  const startGame = useCallback((name) => {
    setPlayerName(name || 'Farmer');
    setCurrentScenario('story1');
    setMusicPlaying(true);
  }, []);

  const resetGame = useCallback(() => {
    setCurrentScenario('welcome');
    setMoney(1000);
    setSustainability(0);
    setDecisions([]);
    setMusicPlaying(false);
  }, []);

  const value = {
    playerName,
    currentScenario,
    money,
    sustainability,
    decisions,
    musicPlaying,
    
    setPlayerName,
    makeDecision,
    updateScores,
    goToScenario,
    startGame,
    resetGame,
  };

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
};