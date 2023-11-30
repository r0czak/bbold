import React from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';

const BloodCard = ({item}) => {
  return (
    <View style={[styles.card, {backgroundColor: item.cardColor}]}>
      <Text style={styles.cardTitle}>{item.donationType}</Text>
      <Text style={styles.cardValue}>{item.donationAmount}</Text>
      <Text style={{color: '#fff', fontSize: 12}}>
        Następna możliwa donacja:
      </Text>
      <Text style={styles.cardData}>{item.donationDate} - (x dni)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    flex: 1,
    margin: 7,
    borderRadius: 20,
    elevation: 5,
    height: Dimensions.get('window').width / 2.3, // approximate a square
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 15,
  },
  cardValue: {
    color: '#fff',
    fontSize: 40,
    margin: 12,
  },
  cardData: {
    color: '#fff',
    fontSize: 15,
    alignItems: 'center',
  },
});

export default BloodCard;
