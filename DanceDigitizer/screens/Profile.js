import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PageHeader } from './components/PageHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from './AuthContext';

export function Profile() {
  const insets = useSafeAreaInsets();
  const { currentUser } = useAuth();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.userInfoContainer}>
        <Text>Email: {currentUser.email}</Text>
        <Text>Name: {currentUser.name}</Text>
        {/* Add more user details as needed */}
      </View>
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
  userInfoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default Profile;
