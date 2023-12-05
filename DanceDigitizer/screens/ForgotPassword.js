import {StyleSheet, View} from 'react-native';
import {PageHeader} from './components/PageHeader';
import {ButtonPrimary} from './components/ButtonPrimary.js';
import {TextButton} from './components/TextButton';
import {InputText} from './components/InputText';
import { BodyText } from './components/BodyText';
import { useSafeAreaInsets} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext';
export function ForgotPassword() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={[styles.root, {paddingTop: insets.top}]}>
      <PageHeader headerText = "Forgot Password"/>
      <BodyText bodyText= "Click below to receive a password reset link via email."/>
      <InputText prompt="Email" onSave={(inputValue) => {
        // Add logic to save inputValue to the database
        console.log(`Saved ${inputValue} to the database`);
        }}/>
      <ButtonPrimary buttonPrompt = "Send Email"/>
      <TextButton textButtonPrompt = "Login" onPress={handleLoginPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 375,
    height: 812,
    flexShrink: 0,
    flex: 1, 
  },
});

export default ForgotPassword;