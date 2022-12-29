import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import DiscountCardComponent from '../components/DiscountCardComponent';

const data = [
  {
    title: 'Mikołajkowe gadzety dla krwiodawstwa',
    description: 'Zdobadz gadzety pod choinkę oddając krew w punktach w Łodzi',
    uri: require('../../assets/images/gadgets.png'),
  },
  {
    title: 'Znizka na transport publiczny w okresie swiatecznym',
    description: 'Opis znizki',
    uri: require('../../assets/images/transport.png'),
  },
  {
    title: 'Apteka',
    description: 'Aktywne do: 21.01.2023',
    uri: require('../../assets/images/pharmacy.png'),
  },
];

const DiscountPanel = () => {
  return (
    <ScrollView style={styles.container}>
      <DiscountCardComponent item={data[0]} />
      <Text></Text>
      <DiscountCardComponent item={data[1]} />
      <Text></Text>
      <DiscountCardComponent item={data[2]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default DiscountPanel;
