import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SettingsPanel = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
});

export default SettingsPanel;
