import {Pressable, StyleSheet, View} from 'react-native';
import {PageHeader} from './components/PageHeader';
import {InputText} from './components/InputText';
import {ButtonPrimary} from './components/ButtonPrimary';
import {TextButton} from './components/TextButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';

import { useAuth } from './AuthContext';

const SignUp = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { signUp } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpPress = () => {
    console.log(name && email && password)
    if (name && email && password) {
      signUp({ name, email, password });
      navigation.navigate('Login');
      console.log('User data saved to the database');
    } else {
      // Alert.alert('Error', 'Please fill in all the fields');
      console.log('User data not saved')
    }
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <PageHeader headerText="Sign Up" />
      <InputText prompt="Name" onSave={(inputValue) => setName(inputValue)} />
      <InputText prompt="Email" onSave={(inputValue) => setEmail(inputValue)} />
      <InputText prompt="Password" onSave={(inputValue) => setPassword(inputValue)} />
      <ButtonPrimary buttonPrompt="Sign Up" onPress={handleSignUpPress} />
      <TextButton buttonPrompt="Forgot your password?" onPress={handleForgotPasswordPress} />
      <TextButton buttonPrompt = "Login" onPress={handleLoginPress} />
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

export default SignUp;
