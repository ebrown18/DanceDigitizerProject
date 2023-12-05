import {StyleSheet, View, Text} from 'react-native';

export function BodyText({bodyText}) {
  return (
    <View style={styles.root}>
      <Text style={styles.bodyTextStyle}>
        {bodyText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 311,
    height: 59.138,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
  },
  bodyTextStyle: {
    width: 311,
    height: 59.138,
    flexShrink: 0,
    color: '#808080',
    textAlign: 'center',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
  },
});

export default BodyText;