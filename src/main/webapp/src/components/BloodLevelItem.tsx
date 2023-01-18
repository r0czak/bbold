import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

let imageURL = '../../assets/images/alarmBloodDrop.png';
let description = 'brak danych';

const setImage = bloodLevel => {
  console.log('bloodLeveL: ' + bloodLevel);
  if (bloodLevel <= 10) {
    imageURL = require('../../assets/images/alarmBloodDrop.png');
    description = 'stan alarmowy';
    console.log('bloodLevel < 10');
  } else if (bloodLevel > 10 && bloodLevel <= 25) {
    imageURL = require('../../assets/images/verylowBloodDrop.png');
    description = 'stan bardzo niski';
    console.log('bloodLevel < 2250');
  } else if (bloodLevel > 25 && bloodLevel <= 50) {
    imageURL = require('../../assets/images/lowBloodDrop.png');
    description = 'stan niski';
    console.log('bloodLevel < 400');
  } else if (bloodLevel > 50 && bloodLevel <= 75) {
    imageURL = require('../../assets/images/mediumBloodDrop.png');
    description = 'stan średni';
    console.log('bloodLevel < 400');
  } else if (bloodLevel > 75) {
    imageURL = require('../../assets/images/highBloodDrop.png');
    description = 'stan wysoki';
    console.log('bloodLevel < 400');
  }
};

const BloodLevelItem = ({item}) => {
  setImage(item.bloodLevel);
  return (
    <View style={styles.itemContainer}>
      <Image source={imageURL} resizeMode="contain" />
      <Text style={styles.itemDescriptionText}>{description}</Text>
      <Text style={styles.itemTitleText}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: Dimensions.get('window').width / 4, // approximate a square
  },
  itemTitleText: {
    color: '#000',
    fontSize: 17,
    fontWeight: '500',
  },
  itemDescriptionText: {
    color: '#000',
    fontSize: 12,
  },
});

export default BloodLevelItem;
