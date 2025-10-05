import { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../hooks/useAudio';

const AudioManager = () => {
  const { musicPlaying } = useGame();
  const { play, pause } = useAudio('/audio/ES_country_music.mp3', 0.3);

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
