import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import MapView, {Marker} from 'react-native-maps';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapModalItem from '../components/MapModalItem';

const makeVisible = () => {
  console.log('make it visible');
};

const MapPanel = () => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <View style={{flex: 1}}>
      <MapModalItem visible={isVisible}>
        <View>
          <View>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <MaterialCommunityIcon name={'window-close'} size={20} />
            </TouchableOpacity>
            <View>
              <Image
                style={styles.imageContainer}
                source={require('../../assets/images/1.png')}
              />
            </View>
            <View style={{marginTop: 170}}>
              <Text style={{fontSize: 18}}> RCKiK Łodź </Text>
              <Text style={{fontSize: 16}}> ul. Franciszkańska 17 </Text>
              <Text style={{fontSize: 14, marginTop: 20}}>
                {' '}
                Godziny otwarcia punktu:{' '}
              </Text>
              <Text style={{fontSize: 14}}> pn - pt: 8:30 - 14:00</Text>
              <Text style={{fontSize: 14, marginTop: 10}}>
                {' '}
                Kontakt telefon / mail:{' '}
              </Text>
            </View>
          </View>
        </View>
      </MapModalItem>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.7822594164352,
          longitude: 19.461464927407615,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 51.7822594164352,
            longitude: 19.461464927407615,
          }}
          onPress={() => setVisible(true)}
        />
      </MapView>
      {/* <MapView
        //specify our coordinates.
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  imageContainer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    borderRadius: 10,
  },
});

export default MapPanel;
