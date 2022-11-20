import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const BloodLevelItem = ({bloodLevel}) => {
  return (
    <View style={styles.item}>
      <Image
        source={require('../../assets/images/appBanner.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    maxWidth: '25%',
    alignItems: 'center',
  },
});

export default BloodLevelItem;
