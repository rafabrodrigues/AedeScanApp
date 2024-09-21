import { ResizeMode, Video } from "expo-av";
import { StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Splash({ onFinish }) {
  const [status, setStatus] = useState({});

  return (
    <Video
      style={StyleSheet.absoluteFill}
      source={require("../../../assets/icons/animated-splash.mp4")}
      resizeMode={ResizeMode.COVER}
      isLooping={false}
      shouldPlay={true}
      onPlaybackStatusUpdate={(status) => {
        setStatus(() => status);
        if (status.didJustFinish) {
          onFinish();
        }
      }}
    />
  );
}