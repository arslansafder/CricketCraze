import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNFS from 'react-native-fs';

const VideoPlayer = ({videoUrl}) => {
  const [videoUri, setVideoUri] = useState(null);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const loadVideoUri = async () => {
      const uri = RNFS.DocumentDirectoryPath + videoUrl;
      setVideoUri(uri);
    };
    loadVideoUri();
  }, [videoUrl]);

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.fullscreenButton}
        onPress={toggleFullscreen}>
        <Icon
          name={fullscreen ? 'fullscreen-exit' : 'fullscreen'}
          size={24}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.muteButton} onPress={toggleMute}>
        <Icon
          name={muted ? 'volume-off' : 'volume-up'}
          size={24}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.playPauseButton}
        onPress={togglePlayPause}>
        <Icon name={paused ? 'play-arrow' : 'pause'} size={24} color="white" />
      </TouchableOpacity>
      {videoUri && (
        <Video
          source={{uri: videoUri}}
          style={fullscreen ? styles.fullscreenVideo : styles.video}
          resizeMode="contain"
          paused={paused}
          muted={muted}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: 300,
    height: 300,
    backgroundColor: 'red',
    // aspectRatio: 16 / 9,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  fullscreenVideo: {
    ...StyleSheet.absoluteFillObject,
  },
  playPauseButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  muteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  fullscreenButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});

export default VideoPlayer;
