import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PageHeader } from './components/PageHeader';
import { InputText } from './components/InputText';
import { ContentEntry } from './components/ContentEntry';
import { BottomButtons } from './components/BottomButtons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Video } from 'expo-av';  // Change this line

// Create a list of Video objects
const videos = [
  {
    title: "Dance Video 1",
    description: "Dance Video Description",
    creator: "Person's name",
    thumbnailImg: "thumbnail1.jpg",
    videoLink: "video1.mp4",
  },
  {
    title: "Dance Video 2",
    description: "Another Description",
    creator: "Another Creator",
    thumbnailImg: "thumbnail2.jpg",
    videoLink: "video2.mp4",
  },
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
          >
            <Video
              source={{ uri: video.videoLink }}
              style={{ width: 300, height: 200 }}
              useNativeControls
            />
          </ContentEntry>
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
