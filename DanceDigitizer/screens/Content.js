import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PageHeader } from './components/PageHeader';
import { InputText } from './components/InputText';
import { ContentEntry } from './components/ContentEntry';
import { BottomButtons } from './components/BottomButtons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Video from './Video';

// Create a list of Video objects
const videos = [
  new Video("Dance Video 1", "Dance Video Description", "Person's name", "thumbnail1.jpg", "video1.mp4"),
  new Video("Dance Video 2", "Another Description", "Another Creator", "thumbnail2.jpg", "video2.mp4"),
  // Add more videos as needed
];

const Content = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <InputText
        prompt="Search"
        onSave={(inputValue) => {
          // Add logic to save inputValue to the database
          console.log(`Saved ${inputValue} to the database`);
        }}
      />

      <ScrollView>
        {videos.map((video, index) => (
          <ContentEntry
            key={index}
            title={video.title}
            desc={video.description}
            creator={video.creator}
            thumbnailImg={video.thumbnailImg}
            videoLink={video.videoLink}
          />
        ))}
      </ScrollView>

      <BottomButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 375,
    height: 812,
    flexShrink: 0,
    flex: 1,
  },
});

export default Content;
