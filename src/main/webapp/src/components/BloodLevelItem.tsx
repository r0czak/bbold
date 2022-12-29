import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

let imageURL = '../../assets/images/alarmBloodDrop.png';

const setImage = bloodLevel => {
  console.log('bloodLeveL: ' + bloodLevel);
  if (bloodLevel <= 10) {
    imageURL = require('../../assets/images/alarmBloodDrop.png');
    console.log('bloodLevel < 10');
  } else if (bloodLevel > 10 && bloodLevel <= 25) {
    imageURL = require('../../assets/images/verylowBloodDrop.png');
    console.log('bloodLevel < 2250');
  } else if (bloodLevel > 25 && bloodLevel <= 49) {
    imageURL = require('../../assets/images/lowBloodDrop.png');
    console.log('bloodLevel < 400');
  } else {
    imageURL = require('../../assets/images/highBloodDrop.png');
    console.log('bloodLevel < 100');
  }
};

const BloodLevelItem = ({item}) => {
  setImage(item.bloodLevel);
  return (
    <View style={styles.item1}>
      <Image source={imageURL} resizeMode="contain" />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item1: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: Dimensions.get('window').width / 4, // approximate a square
  },
  itemText: {
    color: '#000',
    marginTop: 7,
    fontSize: 16,
  },
});

export default BloodLevelItem;
