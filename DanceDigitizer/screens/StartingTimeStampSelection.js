import React, { useRef, useState } from 'react';
import { View, Button, Text, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { PageHeader } from './components/PageHeader';

const StartingTimeStampSelection = ({ handleGetTimeStamp }) => {
  const videoRef = useRef(null);
  const [currentTimestamp, setCurrentTimestamp] = useState(null);

  const handleButtonPress = async () => {
    console.log("Insting handle button press")
    if (videoRef.current) {
      console.log("Inside if")
      const status = await videoRef.current.getStatusAsync();
      const currentTimestamp = status.positionMillis / 1000; // Convert to seconds
      console.log("before handle get time stamp")
      handleGetTimeStamp(currentTimestamp);
    }
  };

  return (
    <View style={styles.container}>
      <PageHeader headerText={"Video"} />
      <Video
        ref={videoRef}
        source={require(
         '/Users/ellianabrown/bigOof/DanceDigitizerProject/DanceDigitizer/assets/s3.mp4',
  )}        
        useNativeControls
        style={styles.video}
      />
      <Button title="Click here when the video is at the one count before the first count of dancing" onPress={handleButtonPress} />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: screenWidth,
    height: screenHeight * 0.5,
  },
});

export default StartingTimeStampSelection;
