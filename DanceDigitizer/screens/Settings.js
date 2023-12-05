import {StyleSheet, View} from 'react-native';
import {PageHeader} from './components/PageHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useAuth } from './AuthContext';
import TextButton from './components/TextButton';
import { useNavigation } from '@react-navigation/native';

export function Settings(){
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

  const {signOut } = useAuth
    const handleSignoutPress = () => {
      signOut;
      navigation.navigate('SignUp');
    };

    return (
        <View style={[styles.root, { paddingTop: insets.top }]}>
          <TextButton buttonPrompt = "Sign Out" onPress={handleSignoutPress} />

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
export default Settings;