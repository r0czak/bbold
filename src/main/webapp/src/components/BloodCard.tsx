import React from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';

const BloodCard = ({item}) => {
  return (
    <View style={[styles.card, {backgroundColor: item.cardColor}]}>
      <Text style={styles.cardTitle}>{item.donationType}</Text>
      <Text style={styles.cardValue}>{item.donationAmount}</Text>
      <Text style={{color: '#fff'}}>Data ostatniej donacji:</Text>
      <Text style={styles.cardData}>{item.donationDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    flex: 1,
    margin: 10,
    borderRadius: 15,
    height: Dimensions.get('window').width / 2.3, // approximate a square
  },
  cardTitle: {
    color: '#fff',
    fontSize: 23,
    marginTop: 15,
  },
  cardValue: {
    color: '#fff',
    fontSize: 40,
    margin: 15,
  },
  cardData: {
    color: '#fff',
    fontSize: 15,
    alignItems: 'center',
  },
});

export default BloodCard;
