import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import MapView from 'react-native-maps';

const MapPanel = () => {
  return (
    <View style={{flex: 1}}>
      <Text>.</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.7822594164352,
          longitude: 19.461464927407615,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapPanel;
