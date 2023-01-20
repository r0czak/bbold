import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const UserProfilePanel = () => {
  return (
    <View>
      <Text> Jan Kowalski </Text>
      <Text> BRh + </Text>
      <View style={styles.card}>
        <Text> Karta honorowego dawcy krwi </Text>
      </View>
      <Text> Dane użytkownika </Text>
      <Text> Zmiana lokalizacji użytkownika </Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderWidth: 1,
        }}
      />
      <Text> Jan Kowalski </Text>
      <Text> BRh + </Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderWidth: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  card: {
    height: 150,
    backgroundColor: '#c43b3d',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 15,
  },
});

export default UserProfilePanel;
