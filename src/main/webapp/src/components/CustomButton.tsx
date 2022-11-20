import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const CustomButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc64a',
    width: '100%',
    padding: 15,
    marginTop: 30,
    alignItems: 'center',
    borderRadius: 7,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CustomButton;
