import {StyleSheet, View, Text} from 'react-native';
import {TextButton} from './TextButton';

export function PageHeader({headerText}) {
  return (
    <View style={styles.root}>
      <Text style={styles.left}>
        
      </Text>
      <Text style={styles.signUp}>
        {headerText}
      </Text>
      <View style={styles.right}>
      <TextButton textButtonPrompt = "Login"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 400,
    height: 46,
  },
  left: {
    color: '#00cc00',
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',

  },
  signUp: {
    color: '#202020',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',

  },
  right: {
    color: '#00cc00',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
  },
});
