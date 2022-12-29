import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ResearchPanel = () => {
  return (
    <View style={styles.container}>
      <Text> Karta badań krwi użytkownika: usertest</Text>
      <View style={styles.card}>
        <Text style={styles.inlineText}> Parameter 1: </Text>
        <Text style={styles.inlineText}> Parameter 2: </Text>
        <Text style={styles.inlineText}> Parameter 3: </Text>
        <Text style={styles.inlineText}> Parameter 4: </Text>
        <Text style={styles.inlineText}> Parameter 5: </Text>
        <Text style={styles.inlineText}> Parameter 6: </Text>
        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 2,
            margin: 5,
          }}
        />
        <Text style={styles.inlineText}> Parameter 4: </Text>
        <Text style={styles.inlineText}> Parameter 5: </Text>
        <Text style={styles.inlineText}> Parameter 6: </Text>
      </View>
      <Text> Zdjęcia badań użytkownika</Text>
      <View style={styles.card2}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    height: 300,
    backgroundColor: '#c43b3d',
    borderColor: '#c43b3d',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  card2: {
    height: 300,
    backgroundColor: '#c43b3d',
    borderColor: '#c43b3d',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  inlineText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ResearchPanel;
