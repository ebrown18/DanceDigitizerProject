import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

export function InputText({ prompt, onSave }) {
  const [inputValue, setInputValue] = useState('');

  const handleChangeText = (text) => {
    setInputValue(text);
  }

  const handleBlur = () => {
    onSave(inputValue);
  }

  return (
    <View style={styles.root}>
      <Text style={styles.$name}>
        {prompt}
      </Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleChangeText}
        onBlur={handleBlur}  // Automatically save on blur
        placeholder={`Enter your ${prompt.toLowerCase()}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 343,
    height: 100,
  },
  $name: {
    color: '#a0a0a0',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 12,
  },
});


export default InputText;






