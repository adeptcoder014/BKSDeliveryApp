import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

export default function ({ children }) {
  return (
    <View style={styles.container}>
      <StatusBar />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    padding: 20,
    paddingVertical: 10,
  },
});
