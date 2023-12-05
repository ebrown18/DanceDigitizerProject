import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export function TextButton ({buttonPrompt, onPress}){
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text style={styles.clickMe}>{buttonPrompt}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButtonClick: {
    color: '#00cc00',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',

  },
});

export default TextButton;


