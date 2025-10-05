import { useEffect } from 'react';
import { useGameState } from '../context/GameStateContext';
import { useAudio } from '../hooks/useAudio';

const AudioManager = () => {
  const { musicPlaying } = useGameState();
  const { play, pause } = useAudio('/ES_country_music.mp3', 0.3);

  useEffect(() => {
    if (musicPlaying) {
      play();
    } else {
      pause();
    }
  }, [musicPlaying, play, pause]);

  return null;
};

export default AudioManager;
