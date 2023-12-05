import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export function ButtonPrimary({buttonPrompt, onPress}) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text style={styles.clickMe}>{buttonPrompt}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#00cc00',
    paddingVertical: 16,
    paddingHorizontal: 132,
    borderRadius: 100,
  },
  clickMe: {
    color: '#000000', 
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
  },
});

export default ButtonPrimary;
