import React, { useState } from 'react';
import Sound from 'react-sound';
import audio from './music';

const PirateMusic = (handleSongFinishedPlaying) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="music-section">
      <div className="music-btn">
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {!isPlaying ? (
            <img className="playstop-btn" src={audio.Play} alt="" />
          ) : (
            <img className="playstop-btn" src={audio.Cd} alt="" />
          )}
        </button>
      </div>
      <Sound
        url={audio.Ashish}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300}
        volume={5}
        onFinishedPlaying={handleSongFinishedPlaying}
        loop={true}
        autoLoad={true}
      />
    </div>
  );
};

export default PirateMusic;
