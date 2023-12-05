// Login.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { PageHeader } from './components/PageHeader';
import { InputText } from './components/InputText';
import { ButtonPrimary } from './components/ButtonPrimary';
import { TextButton } from './components/TextButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext';

const Login = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContentPress = () => {
    if (email && password) {
      const user = signIn(email, password);
      if (user) {
        navigation.navigate('AppTabs');
        console.log('User logged in successfully');
      } else {
        console.log('Invalid email or password');
        // Alert.alert('Error', 'Invalid email or password');
      }
    } else {
      // Alert.alert('Error', 'Please fill in all the fields');
    }
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <PageHeader headerText="Log In" />
      <InputText prompt="Email" onSave={(inputValue) => setEmail(inputValue)} />
      <InputText prompt="Password" onSave={(inputValue) => setPassword(inputValue)} />
      <ButtonPrimary buttonPrompt="Login" onPress={handleContentPress} />
      <TextButton buttonPrompt="Forgot your password?" onPress={handleForgotPasswordPress} />
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

export default Login;
