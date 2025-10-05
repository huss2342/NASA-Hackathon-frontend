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
  const [resources, setResources] = useState({
    water: 100,
    money: 1000,
    time: 100,
  });
  const [decisions, setDecisions] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [musicPlaying, setMusicPlaying] = useState(false);

  // Track player's decision history
  const makeDecision = useCallback((scenarioId, choice, outcome) => {
    const decision = {
      scenarioId,
      choice,
      outcome,
      timestamp: Date.now(),
    };
    setDecisions(prev => [...prev, decision]);
  }, []);

  // Update resources based on choices
  const updateResources = useCallback((changes) => {
    setResources(prev => {
      const updated = {
        water: Math.max(0, Math.min(100, prev.water + (changes.water || 0))),
        money: Math.max(0, prev.money + (changes.money || 0)),
        time: Math.max(0, Math.min(100, prev.time + (changes.time || 0))),
      };

      // Check for game over conditions
      if (updated.money <= 0 || updated.water <= 0 || updated.time <= 0) {
        setGameStatus('lost');
      }

      return updated;
    });
  }, []);

  // Navigate to next scenario based on choice
  const goToScenario = useCallback((scenarioId) => {
    setCurrentScenario(scenarioId);
  }, []);

  // Start the game
  const startGame = useCallback((name) => {
    setPlayerName(name || 'Farmer');
    setCurrentScenario('story1');
    setMusicPlaying(true);
    setGameStatus('playing');
  }, []);

  // Reset game state
  const resetGame = useCallback(() => {
    setCurrentScenario('welcome');
    setResources({ water: 100, money: 1000, time: 100 });
    setDecisions([]);
    setGameStatus('playing');
    setMusicPlaying(false);
  }, []);

  // Check win condition
  const checkWinCondition = useCallback(() => {
    // Example: Player needs minimum resources to win
    if (resources.money >= 2000 && resources.water >= 50) {
      setGameStatus('won');
      return true;
    }
    return false;
  }, [resources]);

  const value = {
    // State
    playerName,
    currentScenario,
    resources,
    decisions,
    gameStatus,
    musicPlaying,
    
    // Actions
    setPlayerName,
    makeDecision,
    updateResources,
    goToScenario,
    startGame,
    resetGame,
    checkWinCondition,
    setGameStatus,
  };

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
};
