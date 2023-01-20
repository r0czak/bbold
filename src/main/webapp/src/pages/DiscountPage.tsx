import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import React from 'react';

import DiscountCard from '../components/DiscountCard';
import DiscountModalItem from '../components/DiscountModalItem';

const data = [
  {
    title: 'Mikołajkowe gadzety dla krwiodawstwa',
    description: 'Zdobadz gadzety pod choinkę oddając krew w punktach w Łodzi',
    status: true,
    uri: require('../../assets/images/gadgets.png'),
  },
  {
    title: 'Znizka na transport publiczny w okresie swiatecznym',
    description: 'Opis znizki',
    status: false,
    uri: require('../../assets/images/transport.png'),
  },
  {
    title: 'Apteka',
    description: 'Aktywne do: 21.01.2023',
    status: true,
    uri: require('../../assets/images/pharmacy.png'),
  },
];

const DiscountPanel = () => {
  return (
    <ScrollView style={styles.container}>
      <View></View>
      {data.map((itemK, key) => {
        return (
          <View key={key}>
            <DiscountCard item={itemK} />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
});

export default DiscountPanel;
