import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import MapView from 'react-native-maps';

const MapPanel = () => {
  return (
    <View>
      <Text>.</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
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
