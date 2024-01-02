import React, {useState, useEffect, useRef} from 'react'
import {
    styled, Typography, Slider,
    Paper, Stack, Box
} from '@mui/material';


// #region ------------ ICONS ---------
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

import PauseIcon from '@mui/icons-material/Pause';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// #endregion ------------ ICONS ---------

// #region ------- Tracts -------------------------------------------------------
// #endregion ---------------------------------------------------------------

// #region -------- Styled Components -----------------------------------------
const Div = styled('div')(({theme}) => ({
  height: '30vh', // Use 100% of the viewport height
  justifyContent: 'center', // Center vertically
  alignItems: 'center', // Center horizontally
  
   
}))

const CustomPaper = styled(Paper)(({theme}) => ({
    backgroundColor: '#4c4c4c',
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    padding: theme.spacing(2)
}))

const PSlider = styled(Slider)(({theme, ...props}) => ({
    color: 'lime',
    height: 2,
    '&:hover': {
        cursor: 'auto',
    },
    '& .MuiSlider-thumb': {
        width: '13px',
        height: '13px',
        display: props.thumbless ? 'none' : 'block',
    }
}))
// #endregion ---------------------------------------------------------------


// const playlist = [fade, enough, immortal, playDead, winning];


// ... (imports)

export default function Player() {
  const audioPlayer = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }

    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }
  }, [volume, isPlaying]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return '00:00';
  }

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleForward = () => {
    audioPlayer.current.currentTime += 10;
  };

  const toggleBackward = () => {
    audioPlayer.current.currentTime -= 10;
  };

  function VolumeBtns() {
    return mute ? (
      <VolumeOffIcon
        sx={{ color: 'lime', '&:hover': { color: 'white' } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 20 ? (
      <VolumeMuteIcon
        sx={{ color: 'lime', '&:hover': { color: 'white' } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 75 ? (
      <VolumeDownIcon
        sx={{ color: 'lime', '&:hover': { color: 'white' } }}
        onClick={() => setMute(!mute)}
      />
    ) : (
      <VolumeUpIcon
        sx={{ color: 'lime', '&:hover': { color: 'white' } }}
        onClick={() => setMute(!mute)}
      />
    );
  }

  return (
    <Div>
      <audio ref={audioPlayer} muted={mute} />
      <CustomPaper>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '25%',
              alignItems: 'center',
            }}
          >
            <VolumeBtns />

            <PSlider
              min={0}
              max={100}
              value={volume}
              onChange={(e, v) => setVolume(v)}
            />
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: 'flex',
              width: '40%',
              alignItems: 'center',
            }}
          >
            <FastRewindIcon
              sx={{ color: 'lime', '&:hover': { color: 'white' } }}
              onClick={toggleBackward}
            />

            {!isPlaying ? (
              <PlayArrowIcon
                fontSize={'large'}
                sx={{ color: 'lime', '&:hover': { color: 'white' } }}
                onClick={togglePlay}
              />
            ) : (
              <PauseIcon
                fontSize={'large'}
                sx={{ color: 'lime', '&:hover': { color: 'white' } }}
                onClick={togglePlay}
              />
            )}

            <FastForwardIcon
              sx={{ color: 'lime', '&:hover': { color: 'white' } }}
              onClick={toggleForward}
            />
          </Stack>

          <Stack
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          />
        </Box>
        <Stack
          spacing={1}
          direction="row"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ color: 'lime' }}>{formatTime(elapsed)}</Typography>
          <PSlider thumbless value={elapsed} max={duration} />
          <Typography sx={{ color: 'lime' }}>
            {formatTime(duration - elapsed)}
          </Typography>
        </Stack>
      </CustomPaper>
    </Div>
  );
}
